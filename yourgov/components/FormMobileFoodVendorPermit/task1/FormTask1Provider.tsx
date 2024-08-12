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
import { formHomePage, getTaskCompletionUrl } from '../utils';

export type Task1StepNumber =
	| 'step1'
	| 'step2'
	| 'step3'
	| 'step4'
	| 'step5'
	| 'step6'
	| 'step7';

export const task1FormSteps: Array<FormStep<Task1StepNumber>> = [
	{
		formStateKey: 'step1',
		label: 'Owner details',
		href: formHomePage + '/task-1/step-1',
		items: [
			{
				label: 'Change business owner details',
				href: formHomePage + '/task-1/step-1/change-details',
			},
		],
	},
	{
		formStateKey: 'step2',
		label: 'Business details',
		href: formHomePage + '/task-1/step-2',
	},
	{
		formStateKey: 'step3',
		label: 'Business address',
		href: formHomePage + '/task-1/step-3',
	},
	{
		formStateKey: 'step4',
		label: 'Vehicle registration',
		href: formHomePage + '/task-1/step-4',
	},
	{
		formStateKey: 'step5',
		label: 'Trading time',
		href: formHomePage + '/task-1/step-5',
	},
	{
		formStateKey: 'step6',
		label: 'Food served',
		href: formHomePage + '/task-1/step-6',
	},
	{
		formStateKey: 'step7',
		label: 'Confirm and submit',
		href: formHomePage + '/task-1/step-7',
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

export function FormTask1Provider({ children }: PropsWithChildren<{}>) {
	const { pathname, push } = useRouter();
	const { setIsSubmittingStep, formState, isSavingBeforeExiting } =
		useGlobalForm();

	const currentStepIndex = task1FormSteps.findIndex(
		({ href }) => href === pathname
	);

	// Callback function to submit the current step
	const submitStep = useCallback(async () => {
		if (isSavingBeforeExiting) {
			return;
		}

		setIsSubmittingStep(true);
		// Fake API network call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		const taskCompletionUrl = getTaskCompletionUrl({
			currentStepIndex,
			steps: task1FormSteps,
			taskHighlight: 1,
		});

		push(taskCompletionUrl);

		setIsSubmittingStep(false);
	}, [currentStepIndex, push, setIsSubmittingStep, isSavingBeforeExiting]);

	// The href of the previous step
	const backHref = `${
		task1FormSteps[currentStepIndex - 1]?.href ?? formHomePage
	}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (
			!formState.task1?.step1?.completed ||
			!formState.task1?.step2?.completed ||
			!formState.task1?.step3?.completed ||
			!formState.task1?.step4?.completed ||
			!formState.task1?.step5?.completed ||
			!formState.task1?.step6?.completed
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

export function useFormTask1Context() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
