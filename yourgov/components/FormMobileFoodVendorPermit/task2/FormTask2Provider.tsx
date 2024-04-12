import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormStep } from '../types';
import { Task2StepNumber } from './Task2Types';

const formHomePage =
	'/app/licences-and-permits/apply/mobile-food-vendor-permit/form';

export const task2FormSteps: Array<FormStep<Task2StepNumber>> = [
	{
		formStateKey: 'step1',
		label: 'Employees',
		href: formHomePage + '/task-2/step-1',
	},
	{
		formStateKey: 'step2',
		label: 'Food Safety Supervisor',
		href: formHomePage + '/task-2/step-2',
	},
	{
		formStateKey: 'step3',
		label: 'Review and complete task',
		href: formHomePage + '/task-2/step-3',
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

// A lot of this code can probably be deduped once task 2 is completed
export function FormTask2Provider({ children }: PropsWithChildren<{}>) {
	const { pathname, push } = useRouter();
	const { setIsSubmittingStep, typeSearchParm, formState } = useGlobalForm();

	const currentStepIndex = task2FormSteps.findIndex(
		({ href }) => href === pathname
	);

	// Callback function to submit the current step
	const submitStep = useCallback(async () => {
		setIsSubmittingStep(true);
		// Fake API network call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		push(
			`${
				task2FormSteps[currentStepIndex + 1]?.href ?? formHomePage
			}?type=${typeSearchParm}`
		);
		setIsSubmittingStep(false);
	}, [currentStepIndex, push, setIsSubmittingStep, typeSearchParm]);

	// The href of the previous step
	const backHref = `${
		task2FormSteps[currentStepIndex - 1]?.href ?? formHomePage
	}?type=${typeSearchParm}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (
			!formState.task2?.step1?.completed ||
			!formState.task2?.step2?.completed
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

export function useFormTask2Context() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
