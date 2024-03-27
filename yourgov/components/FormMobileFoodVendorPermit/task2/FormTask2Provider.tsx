import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useGlobalForm } from '../GlobalFormProvider';

const formHomePage =
	'/app/licences-and-permits/apply/mobile-food-vendor-permit/form';

export const task2FormSteps = [
	{
		formStateKey: 'step1',
		label: 'Owner details',
		href: formHomePage + '/task-2/step-1',
	},
	{
		formStateKey: 'step2',
		label: 'Business details',
		href: formHomePage + '/task-2/step-2',
	},
	{
		formStateKey: 'step3',
		label: 'Business address',
		href: formHomePage + '/task-2/step-3',
	},
	{
		formStateKey: 'step4',
		label: 'Vehicle registration',
		href: formHomePage + '/task-2/step-4',
	},
	{
		formStateKey: 'step5',
		label: 'Trading time',
		href: formHomePage + '/task-2/step-5',
	},
	{
		formStateKey: 'step6',
		label: 'Food served',
		href: formHomePage + '/task-2/step-6',
	},
	{
		formStateKey: 'step7',
		label: 'Confirm and submit',
		href: formHomePage + '/task-2/step-7',
	},
] as const;

type ContextType = {
	/** The href of the previous step. */
	backHref: string;
	/** Callback function to submit the current step. */
	submitStep: () => Promise<void>;
	/** If true, the user can access the "confirm and submit step".  */
	canConfirmAndSubmit: boolean;
};

const context = createContext<ContextType | undefined>(undefined);

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
			!formState.task2?.step1?.completed //||
			// !formState.task2?.step2?.completed ||
			// !formState.task2?.step3?.completed ||
			// !formState.task2?.step4?.completed ||
			// !formState.task2?.step5?.completed ||
			// !formState.task2?.step6?.completed
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
