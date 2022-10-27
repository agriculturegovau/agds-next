import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { AppLayout } from '../AppLayout';
import {
	FormExampleMultiStep0,
	FormSchema as FormExampleMultiStep0Schema,
} from './FormExampleMultiStep0';
import {
	FormExampleMultiStep1,
	FormSchema as FormExampleMultiStep1Schema,
} from './FormExampleMultiStep1';
import {
	FormExampleMultiStep2,
	FormSchema as FormExampleMultiStep2Schema,
} from './FormExampleMultiStep2';
import {
	FormExampleMultiStep3,
	FormSchema as FormExampleMultiStep3Schema,
} from './FormExampleMultiStep3';
import {
	FormExampleMultiStep4,
	FormSchema as FormExampleMultiStep4Schema,
} from './FormExampleMultiStep4';

export const FORM_STEPS = [
	{
		label: 'Conditional fork',
		component: FormExampleMultiStep0,
	},
	{
		label: 'Submit evidence',
		component: FormExampleMultiStep1,
	},
	{
		label: 'Select date',
		component: FormExampleMultiStep2,
	},
	{
		label: 'Conditional reveal',
		component: FormExampleMultiStep3,
	},
	{
		label: 'Confirm and submit',
		component: FormExampleMultiStep4,
	},
];

const TOTAL_STEPS = FORM_STEPS.length - 1;

type ContextType = {
	/** When called, the user will be taken back to the previous step */
	back: () => void;
	/** When called, the user will be taken forward to the the next step */
	next: (stepFormState: StepFormState) => void;
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

type StepFormState = Record<string, unknown>;

type FormState = Partial<{
	[0]: FormExampleMultiStep0Schema;
	[1]: FormExampleMultiStep1Schema;
	[2]: FormExampleMultiStep2Schema;
	[3]: FormExampleMultiStep3Schema;
	[4]: FormExampleMultiStep4Schema;
}>;

export const FormExampleMultiStep = () => {
	const router = useRouter();
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>({});

	const backToHomePage = useCallback(() => {
		router.push('/category/subcategory/multi-page-form');
	}, [router]);

	/** When called, the user will be taken back to the previous step */
	const back = useCallback(() => {
		if (currentStep === 0) backToHomePage();
		setCurrentStep(currentStep - 1);
	}, [currentStep, backToHomePage]);

	const [isSubmittingStep, setIsSubmittingStep] = useState(false);

	/** When called, the user will be taken forward to the the next step */
	const next = useCallback(
		(formState: StepFormState) => {
			setIsSubmittingStep(true);
			setFormState((current) => ({ ...current, [currentStep]: formState }));
			// Using a `setTimeout` to replicate a call to a back-end API
			setTimeout(() => {
				setIsSubmittingStep(false);
				if (currentStep === TOTAL_STEPS) {
					router.push('success');
				} else {
					setCurrentStep(currentStep + 1);
				}
			}, 1500);
		},
		[currentStep, router]
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

	/** If true, the user has completed the previous step of the form */
	const hasCompletedPreviousStep = useMemo(() => {
		if (currentStep === 0) return true;
		const previousStep = currentStep - 1;
		return Boolean(previousStep in formState);
	}, [formState, currentStep]);

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
		<AppLayout
			template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			focusMode
		>
			<PageContent>
				<context.Provider value={contextValue}>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<Stack gap={0.75}>
									<Text
										display={{ xs: 'none', md: 'block' }}
										as="h3"
										fontSize="md"
										fontWeight="bold"
										lineHeight="heading"
									>
										Progress
									</Text>
									<ProgressIndicator
										items={FORM_STEPS.map(({ label }, idx) => ({
											label,
											status:
												idx === currentStep
													? 'doing'
													: idx in formState
													? 'done'
													: 'todo',
											onClick: () => setCurrentStep(idx),
										}))}
									/>
								</Stack>
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

export const useFormExampleMultiStep = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
