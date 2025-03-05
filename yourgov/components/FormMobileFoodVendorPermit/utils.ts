import { parseISO, isValid } from 'date-fns';
import { type FieldValues } from 'react-hook-form';
import { type FormStep, type StepsData } from './steps/stepsData';

// Session storage converts dates to ISO strings, so we need to convert these values back to dates
export function parseDateField(value: Date | string | undefined) {
	if (typeof value === 'string') {
		const parsedValue = parseISO(value);
		return isValid(parsedValue) ? parsedValue : undefined;
	}
	return value;
}

export function hasMultipleErrors(errors: FieldValues = {}) {
	return (
		Object.values(errors)
			.filter(Boolean)
			.filter(
				(value) => typeof value === 'object' && Object.keys(value).length > 0
			).length > 1
	);
}

export const applyForFoodPermitPage =
	'/app/permits/apply-for-new-permit/mobile-food-vendor-permit';

export const managePermitsPage = '/app/permits';

type GetStepNavigationUrlParams = {
	currentStepIndex: number;
	id?: string;
	editingStep: { match?: FormStep; depth?: number } | undefined;
	steps: StepsData;
};

export function getStepCompletionUrl({
	currentStepIndex,
	id,
	editingStep,
	steps,
}: GetStepNavigationUrlParams) {
	const nextStepUrl = (
		editingStep?.match ? steps.at(-1) : steps[currentStepIndex + 1]
	)?.href;

	return nextStepUrl
		? `${nextStepUrl}${
				editingStep?.match ? `?success=${editingStep.match.formStateKey}` : ''
		  }`
		: `/app/permits/apply-for-new-permit/mobile-food-vendor-permit/success?id=${id}`;
}
