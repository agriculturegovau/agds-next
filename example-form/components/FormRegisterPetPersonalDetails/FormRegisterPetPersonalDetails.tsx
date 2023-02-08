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
	FormRegisterPetPersonalDetailsStep0,
	formSchema as formRegisterPetPersonalDetailsStep0Schema,
	FormSchema as FormRegisterPetPersonalDetailsStep0Schema,
} from './FormRegisterPetPersonalDetailsStep0';
import {
	FormRegisterPetPersonalDetailsStep1,
	formSchema as formRegisterPetPersonalDetailsStep1Schema,
	FormSchema as FormRegisterPetPersonalDetailsStep1Schema,
} from './FormRegisterPetPersonalDetailsStep1';
import {
	FormRegisterPetPersonalDetailsStep2,
	formSchema as formRegisterPetPersonalDetailsStep2Schema,
	FormSchema as FormRegisterPetPersonalDetailsStep2Schema,
} from './FormRegisterPetPersonalDetailsStep2';
import { FormRegisterPetPersonalDetailsStep3 } from './FormRegisterPetPersonalDetailsStep3';

export const FORM_STEPS = [
	{
		label: 'Personal details',
		component: FormRegisterPetPersonalDetailsStep0,
	},
	{
		label: 'Address details',
		component: FormRegisterPetPersonalDetailsStep1,
	},
	{
		label: 'Contact method',
		component: FormRegisterPetPersonalDetailsStep2,
	},
	{
		label: 'Confirm and submit',
		component: FormRegisterPetPersonalDetailsStep3,
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
	[0]: FormRegisterPetPersonalDetailsStep0Schema & { completed: boolean };
	[1]: FormRegisterPetPersonalDetailsStep1Schema & { completed: boolean };
	[2]: FormRegisterPetPersonalDetailsStep2Schema & { completed: boolean };
}>;

export const formSchema = yup.object({
	[0]: formRegisterPetPersonalDetailsStep0Schema,
	[1]: formRegisterPetPersonalDetailsStep1Schema,
	[2]: formRegisterPetPersonalDetailsStep2Schema,
});

export const FormRegisterPetPersonalDetails = () => {
	const { startTask, submitTask1, task1FormState } = useFormRegisterPet();
	const router = useRouter();
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>(task1FormState);

	/** Call `startTask` when the user first visits this task */
	useEffect(() => {
		startTask(1);
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
					submitTask1(formState);
				} else {
					setCurrentStep(currentStep + 1);
				}
			}, 1500);
		},
		[currentStep, formState, submitTask1]
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

export const useFormRegisterPetPersonalDetails = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
