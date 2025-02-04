import { parseISO, isValid } from 'date-fns';
import { type FieldValues } from 'react-hook-form';
import { StepsData } from './steps/stepsData';

// Session storage converts dates to ISO strings, so we need to convert these values back to dates
export function parseDateField(value: Date | string | undefined) {
	if (typeof value === 'string') {
		const parsedValue = parseISO(value);
		return isValid(parsedValue) ? parsedValue : undefined;
	}
	return value;
}

export function hasMultipleErrors(errors: FieldValues = {}) {
	return Object.keys(errors).length > 1;
}

export const applyForFoodPermitPage =
	'/app/permits/apply-for-new-permit/mobile-food-vendor-permit';

export const managePermitsPage = '/app/permits';

type GetStepNavigationUrlParams = {
	currentStepIndex: number;
	id?: string;
	isEditingFromReviewStep: boolean;
	steps: StepsData;
};

export function getStepCompletionUrl({
	currentStepIndex,
	id,
	isEditingFromReviewStep,
	steps,
}: GetStepNavigationUrlParams) {
	const nextStepUrl = (
		isEditingFromReviewStep ? steps.at(-1) : steps[currentStepIndex + 1]
	)?.href;
	return (
		nextStepUrl ||
		`/app/permits/apply-for-new-permit/mobile-food-vendor-permit/success?id=${id}`
	);
}
