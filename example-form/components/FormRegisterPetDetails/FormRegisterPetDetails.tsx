import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/box';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { AppLayout } from '../AppLayout';
import { useFormRegisterPet } from '../FormRegisterPetContext';
import {
	FormRegisterPetDetailsStep0,
	formSchema as formRegisterPetDetailsStep0Schema,
	FormSchema as FormRegisterPetDetailsStep0Schema,
} from './FormRegisterPetDetailsStep0';
import {
	FormRegisterPetDetailsStep1,
	formSchema as formRegisterPetDetailsStep1Schema,
	FormSchema as FormRegisterPetDetailsStep1Schema,
} from './FormRegisterPetDetailsStep1';
import {
	FormRegisterPetDetailsStep2,
	formSchema as formRegisterPetDetailsStep2Schema,
	FormSchema as FormRegisterPetDetailsStep2Schema,
} from './FormRegisterPetDetailsStep2';
import {
	FormRegisterPetDetailsStep3,
	formSchema as formRegisterPetDetailsStep3Schema,
	FormSchema as FormRegisterPetDetailsStep3Schema,
} from './FormRegisterPetDetailsStep3';
import { FormRegisterPetDetailsStep4 } from './FormRegisterPetDetailsStep4';

export const FORM_STEPS = [
	{
		label: 'Type of pet',
		component: FormRegisterPetDetailsStep0,
	},
	{
		label: 'Pet details',
		component: FormRegisterPetDetailsStep1,
	},
	{
		label: 'Proof of vaccination',
		component: FormRegisterPetDetailsStep2,
	},
	{
		label: 'Start date',
		component: FormRegisterPetDetailsStep3,
	},
	{
		label: 'Confirm and submit',
		component: FormRegisterPetDetailsStep4,
	},
];

const TOTAL_STEPS = FORM_STEPS.length - 1;

type ContextType = {
	/** When called, the user will be taken back to the previous step */
	back: () => void;
	/** When called, the user will be taken forward to the the next step */
	next: (stepFormState?: StepFormState) => void;
	/** When called, the user will be taken to the provided step */
	goToStep: (step: number) => void;
	/** The current step of the form */
	currentStep: number;
	/** If true, the user has completed the previous step of the form */
	hasCompletedPreviousStep: boolean;
	/** If true, the current from step is being submitted */
	isSubmittingStep: boolean;
	/** When called, the users progress will be saved and they will be taken to the home page */
	saveAndExit: () => void;
	/** If true, the user is about to exit the form */
	isSavingBeforeExiting: boolean;
	/** When called, the user will to the forms home page */
	cancel: () => void;
	/** The state of the entire form */
	formState: FormState;
	/** The state of the form of the current step */
	stepFormState: StepFormState;
};

const context = createContext<ContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StepFormState = Record<string, any>;

export type FormState = Partial<{
	[0]: FormRegisterPetDetailsStep0Schema & { completed: boolean };
	[1]: FormRegisterPetDetailsStep1Schema & { completed: boolean };
	[2]: FormRegisterPetDetailsStep2Schema & { completed: boolean };
	[3]: FormRegisterPetDetailsStep3Schema & { completed: boolean };
}>;

export const formSchema = yup.object({
	[0]: formRegisterPetDetailsStep0Schema,
	[1]: formRegisterPetDetailsStep1Schema,
	[2]: formRegisterPetDetailsStep2Schema,
	[3]: formRegisterPetDetailsStep3Schema,
});

export const FormRegisterPetDetails = () => {
	const { startTask, submitTask2, task2FormState } = useFormRegisterPet();

	const router = useRouter();
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>(task2FormState);

	/** Call `startTask` when the user first visits this task */
	useEffect(() => {
		startTask(2);
	}, [startTask]);

	const backToHomePage = useCallback(() => {
		router.push('/services/registrations/pet');
	}, [router]);

	/** When called, the user will be taken back to the previous step */
	const back = useCallback(() => {
		if (currentStep === 0) backToHomePage();
		setCurrentStep(currentStep - 1);
	}, [currentStep, backToHomePage]);

	const [isSubmittingStep, setIsSubmittingStep] = useState(false);

	/** When called, the user will be taken forward to the the next step */
	const next = useCallback(
		(stepFormState?: StepFormState) => {
			setIsSubmittingStep(true);

			// Using a `setTimeout` to replicate a call to a back-end API
			setTimeout(() => {
				if (stepFormState) {
					setFormState((current) => ({
						...current,
						[currentStep]: { ...stepFormState, completed: true },
					}));
				}
				setIsSubmittingStep(false);
				if (currentStep === TOTAL_STEPS) {
					submitTask2(formState);
				} else {
					setCurrentStep(currentStep + 1);
				}
			}, 1500);
		},
		[currentStep, formState, submitTask2]
	);

	const [isSavingBeforeExiting, setIsSavingBeforeExiting] = useState(false);

	/** When called, the users progress will be saved and they will be taken to the home page */
	const saveAndExit = useCallback(() => {
		setIsSavingBeforeExiting(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			backToHomePage();
			setIsSavingBeforeExiting(false);
		}, 1500);
	}, [backToHomePage]);

	const hasCompletedStep = useCallback(
		(idx: number) => {
			if (idx in formState) {
				return formState[idx as keyof typeof formState]?.completed || false;
			}
			return false;
		},
		[formState]
	);

	/** If true, the user has completed the previous step of the form */
	const hasCompletedPreviousStep = useMemo(() => {
		if (currentStep === 0) return true;
		const previousStep = currentStep - 1;
		return hasCompletedStep(previousStep);
	}, [currentStep, hasCompletedStep]);

	const getStepStatus = useCallback(
		(idx: number) => {
			if (idx === currentStep) return 'doing';
			if (hasCompletedStep(idx)) return 'done';
			if (idx === 0 || hasCompletedStep(idx - 1)) return 'todo';
			return 'blocked';
		},
		[currentStep, hasCompletedStep]
	);

	const FormStepComponent = FORM_STEPS[currentStep]?.component;

	const contextValue = {
		back,
		next,
		goToStep: setCurrentStep,
		currentStep,
		isSubmittingStep,
		saveAndExit,
		isSavingBeforeExiting,
		cancel: backToHomePage,
		hasCompletedPreviousStep,
		formState,
		stepFormState:
			(currentStep in formState &&
				formState[currentStep as keyof typeof formState]) ||
			{},
	};

	return (
		<AppLayout focusMode>
			<PageContent>
				<context.Provider value={contextValue}>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<ProgressIndicator
									items={FORM_STEPS.map(({ label }, idx) => ({
										label,
										status: getStepStatus(idx),
										onClick: () => setCurrentStep(idx),
									}))}
								/>
							</ContentBleed>
						</Column>
						<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
							<Stack gap={3} alignItems="flex-start">
								<DirectionButton direction="left" onClick={back}>
									Back
								</DirectionButton>
								{FormStepComponent ? <FormStepComponent /> : null}
							</Stack>
						</Column>
					</Columns>
				</context.Provider>
			</PageContent>
		</AppLayout>
	);
};

export const useFormRegisterPetDetails = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
