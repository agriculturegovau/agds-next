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
import { ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { useFormApplyFoodTruckPermit } from '../FormApplyFoodTruckPermitContext';
import {
	FormBusinessDetailsStep0,
	formSchema as formBusinessDetailsStep0Schema,
	FormSchema as FormBusinessDetailsStep0Schema,
} from './FormBusinessDetailsStep0';
import {
	FormBusinessDetailsStep1,
	formSchema as formBusinessDetailsStep1Schema,
	FormSchema as FormBusinessDetailsStep1Schema,
} from './FormBusinessDetailsStep1';
import {
	FormBusinessDetailsStep2,
	formSchema as formBusinessDetailsStep2Schema,
	FormSchema as FormBusinessDetailsStep2Schema,
} from './FormBusinessDetailsStep2';
import {
	FormBusinessDetailsStep3,
	formSchema as formBusinessDetailsStep3Schema,
	FormSchema as FormBusinessDetailsStep3Schema,
} from './FormBusinessDetailsStep3';
import {
	FormBusinessDetailsStep4,
	formSchema as formBusinessDetailsStep4Schema,
	FormSchema as FormBusinessDetailsStep4Schema,
} from './FormBusinessDetailsStep4';
import {
	FormBusinessDetailsStep5,
	formSchema as formBusinessDetailsStep5Schema,
	FormSchema as FormBusinessDetailsStep5Schema,
} from './FormBusinessDetailsStep5';
import { FormBusinessDetailsStep6 } from './FormBusinessDetailsStep6';

export const FORM_STEPS = [
	{
		label: 'Owner details',
		component: FormBusinessDetailsStep0,
	},
	{
		label: 'Business details',
		component: FormBusinessDetailsStep1,
	},
	{
		label: 'Business address',
		component: FormBusinessDetailsStep2,
	},
	{
		label: 'Vehicle registration',
		component: FormBusinessDetailsStep3,
	},
	{
		label: 'Trading time',
		component: FormBusinessDetailsStep4,
	},
	{
		label: 'Food served',
		component: FormBusinessDetailsStep5,
	},
	{
		label: 'Confirm and submit',
		component: FormBusinessDetailsStep6,
	},
];

const TOTAL_STEPS = FORM_STEPS.length - 1;

type ContextType = {
	isSideFlow: boolean;
	setIsSideFlow: (value: boolean) => void;
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
	[0]: FormBusinessDetailsStep0Schema & { completed: boolean };
	[1]: FormBusinessDetailsStep1Schema & { completed: boolean };
	[2]: FormBusinessDetailsStep2Schema & { completed: boolean };
	[3]: FormBusinessDetailsStep3Schema & { completed: boolean };
	[4]: FormBusinessDetailsStep4Schema & { completed: boolean };
	[5]: FormBusinessDetailsStep5Schema & { completed: boolean };
}>;

export const formSchema = yup.object({
	[0]: formBusinessDetailsStep0Schema,
	[1]: formBusinessDetailsStep1Schema,
	[2]: formBusinessDetailsStep2Schema,
	[3]: formBusinessDetailsStep3Schema,
	[4]: formBusinessDetailsStep4Schema,
	[5]: formBusinessDetailsStep5Schema,
});

export const FormBusinessDetails = () => {
	const [isSideFlow, setIsSideFlow] = useState(false);

	const { homePageUrl, startTask, submitTask1, task1FormState } =
		useFormApplyFoodTruckPermit();

	const router = useRouter();
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>(task1FormState);

	/** Call `startTask` when the user first visits this task */
	useEffect(() => {
		startTask(1);
	}, [startTask]);

	const backToHomePage = useCallback(() => {
		router.push(homePageUrl);
	}, [router, homePageUrl]);

	/** When called, the user will be taken back to the previous step */
	const back = useCallback(() => {
		if (isSideFlow) {
			setIsSideFlow(false);
		} else {
			if (currentStep === 0) backToHomePage();
			setCurrentStep(currentStep - 1);
		}
	}, [isSideFlow, currentStep, backToHomePage]);

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
		isSideFlow,
		setIsSideFlow,
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
		<context.Provider value={contextValue}>
			<Columns>
				{!isSideFlow && (
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
				)}
				<Column
					columnSpan={{ xs: 12, md: 8 }}
					columnStart={isSideFlow ? undefined : { lg: 5 }}
				>
					<Stack gap={3} alignItems="flex-start">
						<DirectionButton direction="left" onClick={back}>
							Back
						</DirectionButton>
						{FormStepComponent ? <FormStepComponent /> : null}
					</Stack>
				</Column>
			</Columns>
		</context.Provider>
	);
};

export const useFormBusinessDetails = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
