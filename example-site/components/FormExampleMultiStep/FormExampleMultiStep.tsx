import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/columns';
import { Content, ContentBleed } from '@ag.ds-next/content';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { DirectionButton } from '@ag.ds-next/direction-link';

import { FormExampleMultiStep0 } from './FormExampleMultiStep0';
import { FormExampleMultiStep1 } from './FormExampleMultiStep1';
import { FormExampleMultiStep2 } from './FormExampleMultiStep2';
import { FormExampleMultiStep3 } from './FormExampleMultiStep3';
import { FormExampleMultiStep4 } from './FormExampleMultiStep4';
import { FormExampleMultiStepSuccess } from './FormExampleMultiStepSuccess';
import { DocumentTitle } from '../DocumentTitle';
import { AppLayout } from '../AppLayout';

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
	/** If true, the user has completed the previous step of the form */
	hasCompletedPreviousSteps: boolean;
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

type FormState = Record<number, Record<string, unknown>>;

export const FormExampleMultiStep = () => {
	const router = useRouter();
	const [success, setSuccess] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>({});

	/** When called, the user will be taken back to the previous step */
	const back = useCallback(() => {
		if (currentStep === 0) {
			router.push('/form-multi-step');
		} else {
			setCurrentStep(currentStep - 1);
		}
	}, [currentStep, router]);

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
					setSuccess(true);
				} else {
					setCurrentStep(currentStep + 1);
				}
			}, 1500);
		},
		[currentStep]
	);

	/** When called, the user will to the forms home page */
	const cancel = useCallback(() => {
		router.push('/form-multi-step');
	}, [router]);

	const [isSavingBeforeExiting, setIsSavingBeforeExiting] = useState(false);

	/** When called, the users progress will be saved and they will be taken to the home page */
	const saveAndExit = useCallback(() => {
		setIsSavingBeforeExiting(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			router.push('/form-multi-step');
			setIsSavingBeforeExiting(false);
		}, 1500);
	}, [router]);

	/** If true, the user has completed the previous step of the form */
	const hasCompletedPreviousSteps = useMemo(() => {
		if (currentStep === 0) return true;
		const previousStep = currentStep - 1;
		return Boolean(formState[previousStep]);
	}, [formState, currentStep]);

	if (success) {
		return (
			<>
				<DocumentTitle title="Multi step form example" />
				<AppLayout
					template={{ name: '"Multi-step form', slug: 'multi-step-form' }}
				>
					<Content>
						<Columns>
							<Column columnSpan={{ xs: 12, md: 8 }}>
								<FormExampleMultiStepSuccess />
							</Column>
						</Columns>
					</Content>
				</AppLayout>
			</>
		);
	}

	const FormStepComponent = FORM_STEPS[currentStep]?.component;

	const contextValue = {
		back,
		next,
		isSubmittingStep,
		saveAndExit,
		isSavingBeforeExiting,
		cancel,
		hasCompletedPreviousSteps,
		formState,
		stepFormState: formState[currentStep],
	};

	return (
		<>
			<DocumentTitle title="Multi step form example" />
			<AppLayout
				template={{ name: '"Multi-step form', slug: 'multi-step-form' }}
				focusMode
			>
				<Content>
					<context.Provider value={contextValue}>
						<Columns>
							<Column columnSpan={{ xs: 12, md: 3 }}>
								<ContentBleed visible={{ md: false }}>
									<Stack gap={0.75} paddingTop={{ xs: 0, md: 3 }}>
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
														: formState[idx]
														? 'done'
														: 'todo',
												onClick: () => setCurrentStep(idx),
											}))}
										/>
									</Stack>
								</ContentBleed>
							</Column>
							<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
								<Stack gap={2}>
									<DirectionButton direction="left" onClick={back}>
										Back
									</DirectionButton>
									{FormStepComponent ? <FormStepComponent /> : null}
								</Stack>
							</Column>
						</Columns>
					</context.Provider>
				</Content>
			</AppLayout>
		</>
	);
};

export const useFormExampleMultiStep = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
