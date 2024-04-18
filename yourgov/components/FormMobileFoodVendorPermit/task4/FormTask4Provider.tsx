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
import { formHomePage, getTaskCompletionUrl } from '../utils';

export const task4FormSteps: Array<FormStep<'step1'>> = [
	{
		formStateKey: 'step1',
		label: 'Upload documents',
		href: formHomePage + '/task-4/step-1',
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
export function FormTask4Provider({ children }: PropsWithChildren<{}>) {
	const { pathname, push } = useRouter();
	const { setIsSubmittingStep, typeSearchParm, formState } = useGlobalForm();

	const currentStepIndex = task4FormSteps.findIndex(
		({ href }) => href === pathname
	);

	// Callback function to submit the current step
	const submitStep = useCallback(async () => {
		setIsSubmittingStep(true);
		// Fake API network call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		push(formHomePage + '/application-submitted');
		setIsSubmittingStep(false);
	}, [push, setIsSubmittingStep]);

	// The href of the previous step
	const backHref = `${
		task4FormSteps[currentStepIndex - 1]?.href ?? formHomePage
	}?type=${typeSearchParm}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (!formState.task4?.step1?.completed) {
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

export function useFormTask4Context() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
