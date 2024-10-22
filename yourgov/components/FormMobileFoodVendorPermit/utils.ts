import * as yup from 'yup';
import { parseISO, isValid } from 'date-fns';
import { type FieldValues } from 'react-hook-form';
import { type FormStep, type TaskKey } from './FormState';

// `yup.date()` can sometimes give false positives with certain string values
// Fixes https://github.com/jquense/yup/issues/764
// Tests for this can be found in `packages/react/src/date-picker/test-utils.ts`
export const yupDateField = yup
	.date()
	.transform((current, orig) => (typeof orig === 'string' ? orig : current))
	.typeError('Enter a valid date');

// Session storage converts converts dates to ISO strings, so we need to convert these values back to dates
export function parseDateField(value: Date | string | undefined) {
	if (typeof value === 'string') {
		const parsedValue = parseISO(value);
		return isValid(parsedValue) ? parsedValue : undefined;
	}
	return value;
}

export const yupPhoneField = yup
	.string()
	.transform((current) => current.replace(/\s/g, ''))
	.matches(/^\d+$/, {
		excludeEmptyString: true,
		message: 'Phone number must not include letters or symbols',
	})
	.matches(/^0\d+$/, {
		excludeEmptyString: true,
		message:
			"Mobile numbers must begin with '04', landline numbers must begin with an area code",
	})
	.length(10, 'Phone number must be 10 digits');

export function hasMultipleErrors(errors: FieldValues) {
	return Object.keys(errors).length > 1;
}

export const formHomePage =
	'/app/licences-and-permits/apply/mobile-food-vendor-permit/form';

type GetTaskNavigationUrlParams = {
	steps: Array<FormStep>;
	currentStepIndex: number;
	taskHighlight: number;
};

export function getTaskCompletionUrl({
	currentStepIndex,
	steps,
	taskHighlight,
}: GetTaskNavigationUrlParams) {
	const nextStepUrl = steps[currentStepIndex + 1]?.href;
	return nextStepUrl || `${formHomePage}?taskHighlight=${taskHighlight}`;
}

export function getPrevTaskKey(currentTaskKey: TaskKey) {
	return `task${Number(currentTaskKey.replace('task', '')) - 1}` as TaskKey;
}
