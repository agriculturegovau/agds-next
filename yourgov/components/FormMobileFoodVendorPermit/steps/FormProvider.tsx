import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useGlobalForm } from '../GlobalFormProvider';
import { type FormStep } from '../FormState';
import { formHomePage, getStepCompletionUrl } from '../utils';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';

export type StepNumber =
	| 'step1'
	| 'step2'
	| 'step3'
	| 'step4'
	| 'step5'
	| 'step6'
	| 'step7'
	| 'step8'
	| 'step9'
	| 'step10';

export const formSteps: Array<FormStep<StepNumber>> = [
	{
		editLinkLabel: 'Change owner details',
		formStateKey: 'step1',
		label: 'Owner details',
		href: formHomePage + '/steps/step-1',
		items: [
			{
				label: 'Change business owner details',
				href: formHomePage + '/steps/step-1/change-details',
			},
		],
	},
	{
		editLinkLabel: 'Change business details',
		formStateKey: 'step2',
		label: 'Business details',
		href: formHomePage + '/steps/step-2',
	},
	{
		editLinkLabel: 'Change business address',
		formStateKey: 'step3',
		label: 'Business address',
		href: formHomePage + '/steps/step-3',
	},
	{
		editLinkLabel: 'Change vehicle registration',
		formStateKey: 'step4',
		label: 'Vehicle registration',
		href: formHomePage + '/steps/step-4',
	},
	{
		editLinkLabel: 'Change trading time',
		formStateKey: 'step5',
		label: 'Trading time',
		href: formHomePage + '/steps/step-5',
	},
	{
		editLinkLabel: 'Change food served',
		formStateKey: 'step6',
		label: 'Food served',
		href: formHomePage + '/steps/step-6',
	},
	{
		editLinkLabel: 'Change employees',
		formStateKey: 'step7',
		label: 'Employees',
		href: formHomePage + '/steps/step-7',
		items: [
			{
				label: 'Add employee',
				href: formHomePage + '/steps/step-7/add-employee',
			},
		],
	},
	{
		editLinkLabel: 'Change food safety supervisor',
		formStateKey: 'step8',
		label: 'Food safety supervisor',
		href: formHomePage + '/steps/step-8',
	},
	{
		editLinkLabel: 'Change documents',
		formStateKey: 'step9',
		label: 'Upload documents',
		href: formHomePage + '/steps/step-9',
	},
	{
		editLinkLabel: 'Change review and submit', // Not used but it simplifies the type and makes the submit pages more robust
		formStateKey: 'step10',
		label: 'Review and submit',
		href: formHomePage + '/steps/step-10',
	},
];

type ContextType = {
	/** The href of the previous step. */
	backHref: string;
	/** Callback function to submit the current step. */
	submitStep: () => Promise<void>;
	/** If true, the user can access the "confirm and submit step".  */
	canConfirmAndSubmit: boolean;
};

const context = createContext<ContextType | undefined>(undefined);

export function FormProvider({ children }: PropsWithChildren<{}>) {
	const { pathname, push } = useRouter();
	const { setIsSubmittingStep, formState, isSavingBeforeExiting } =
		useGlobalForm();

	const currentStepIndex = formSteps.findIndex(({ href }) => href === pathname);
	const isEditingFromReviewStep = useIsEditingFromReviewStep();

	// Callback function to submit the current step
	const submitStep = useCallback(async () => {
		if (isSavingBeforeExiting) {
			return;
		}

		setIsSubmittingStep(true);
		// Fake API network call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		const stepCompletionUrl = getStepCompletionUrl({
			currentStepIndex,
			id: formState.id,
			isEditingFromReviewStep,
			steps: formSteps,
		});

		push(stepCompletionUrl);

		setIsSubmittingStep(false);
	}, [
		currentStepIndex,
		formState,
		isEditingFromReviewStep,
		isSavingBeforeExiting,
		push,
		setIsSubmittingStep,
	]);

	// The href of the previous step
	const backHref = `${
		(isEditingFromReviewStep
			? formSteps.at(-1)
			: formSteps[currentStepIndex - 1]
		)?.href ?? formHomePage
	}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (
			!formState.steps?.step1?.completed ||
			!formState.steps?.step2?.completed ||
			!formState.steps?.step3?.completed ||
			!formState.steps?.step4?.completed ||
			!formState.steps?.step5?.completed ||
			!formState.steps?.step6?.completed ||
			!formState.steps?.step7?.completed ||
			!formState.steps?.step8?.completed ||
			!formState.steps?.step9?.completed
		) {
			return false;
		}
		return true;
	}, [formState]);

	const contextValue = {
		backHref,
		submitStep,
		canConfirmAndSubmit,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useFormContext() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
