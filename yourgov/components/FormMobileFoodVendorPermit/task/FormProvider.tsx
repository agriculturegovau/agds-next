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

export const taskFormSteps: Array<FormStep<StepNumber>> = [
	{
		formStateKey: 'step1',
		label: 'Owner details',
		href: formHomePage + '/task/step-1',
		items: [
			{
				label: 'Change business owner details',
				href: formHomePage + '/task/step-1/change-details',
			},
		],
	},
	{
		formStateKey: 'step2',
		label: 'Business details',
		href: formHomePage + '/task/step-2',
	},
	{
		formStateKey: 'step3',
		label: 'Business address',
		href: formHomePage + '/task/step-3',
	},
	{
		formStateKey: 'step4',
		label: 'Vehicle registration',
		href: formHomePage + '/task/step-4',
	},
	{
		formStateKey: 'step5',
		label: 'Trading time',
		href: formHomePage + '/task/step-5',
	},
	{
		formStateKey: 'step6',
		label: 'Food served',
		href: formHomePage + '/task/step-6',
	},
	{
		formStateKey: 'step7',
		label: 'Employees',
		href: formHomePage + '/task/step-7',
		items: [
			{
				label: 'Add employee',
				href: formHomePage + '/task/step-7/add-employee',
			},
		],
	},
	{
		formStateKey: 'step8',
		label: 'Food safety supervisor',
		href: formHomePage + '/task/step-8',
	},
	{
		formStateKey: 'step9',
		label: 'Upload documents',
		href: formHomePage + '/task/step-9',
	},
	{
		formStateKey: 'step10',
		label: 'Review and submit',
		href: formHomePage + '/task/step-10',
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

	const currentStepIndex = taskFormSteps.findIndex(
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
			steps: taskFormSteps,
		});

		push(taskCompletionUrl);

		setIsSubmittingStep(false);
	}, [currentStepIndex, push, setIsSubmittingStep, isSavingBeforeExiting]);

	// The href of the previous step
	const backHref = `${
		taskFormSteps[currentStepIndex - 1]?.href ?? formHomePage
	}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (
			!formState.task?.step1?.completed ||
			!formState.task?.step2?.completed ||
			!formState.task?.step3?.completed ||
			!formState.task?.step4?.completed ||
			!formState.task?.step5?.completed ||
			!formState.task?.step6?.completed ||
			!formState.task?.step7?.completed ||
			!formState.task?.step8?.completed ||
			!formState.task?.step9?.completed
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
