import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import { applyForFoodPermitPage, getStepCompletionUrl } from '../utils';
import { stepsData } from './stepsData';

type ContextType = {
	/** The href of the previous step. */
	backHref: string;
	/** The label of the previous step. */
	backLabel: string;
	/** Callback function to submit the current step. */
	submitStep: () => Promise<void>;
	/** If true, the user can access the "confirm and submit step".  */
	canConfirmAndSubmit: boolean;
};

const context = createContext<ContextType | undefined>(undefined);

export function FormProvider({ children }: PropsWithChildren<{}>) {
	const { pathname, ...router } = useRouter();
	const { setIsSubmittingStep, formState, isSavingBeforeExiting } =
		useGlobalForm();

	const currentStepIndex = stepsData.findIndex(({ href }) => href === pathname);
	const editingStep = useIsEditingFromReviewStep();

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
			editingStep: {
				depth: editingStep?.depth,
				match: editingStep?.match,
			},
			steps: stepsData,
		});

		router.push(stepCompletionUrl);

		setIsSubmittingStep(false);
	}, [
		currentStepIndex,
		formState,
		editingStep,
		isSavingBeforeExiting,
		router,
		setIsSubmittingStep,
	]);

	// The href of the previous step
	const backHref = `${
		(editingStep?.match ? stepsData.at(-1) : stepsData[currentStepIndex - 1])
			?.href ?? applyForFoodPermitPage
	}`;
	const backLabel = editingStep?.match ? 'Back to review and submit' : 'Back';

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
			!formState.steps?.stepUploadDocuments?.completed
		) {
			return false;
		}
		return true;
	}, [formState]);

	const contextValue = {
		backHref,
		backLabel,
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
