import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useGlobalForm } from '../GlobalFormProvider';
import { applyForFoodPermitPage, getStepCompletionUrl } from '../utils';
import { stepsData } from './stepsData';

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

	const currentStepIndex = stepsData.findIndex(({ href }) => href === pathname);

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
			steps: stepsData,
		});

		push(stepCompletionUrl);

		setIsSubmittingStep(false);
	}, [
		currentStepIndex,
		formState,
		isSavingBeforeExiting,
		push,
		setIsSubmittingStep,
	]);

	// The href of the previous step
	const backHref = `${
		stepsData[currentStepIndex - 1]?.href ?? applyForFoodPermitPage
	}`;

	// If true, the user can access the "confirm and submit step"
	const canConfirmAndSubmit = useMemo(() => {
		if (
			!formState.steps?.stepOwnerDetails?.completed ||
			!formState.steps?.stepBusinessDetails?.completed ||
			!formState.steps?.stepBusinessAddress?.completed ||
			!formState.steps?.stepVehicleRegistration?.completed ||
			!formState.steps?.stepTradingTime?.completed ||
			!formState.steps?.stepFoodServed?.completed ||
			!formState.steps?.stepEmployees?.completed ||
			!formState.steps?.stepFoodSafetySupervisor?.completed ||
			!formState.steps?.stepUploadDocuments?.completed
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
