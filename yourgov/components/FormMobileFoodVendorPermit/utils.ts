import * as yup from 'yup';
import parseISO from 'date-fns/parseISO';
import isValid from 'date-fns/isValid';

// `yup.date()` can sometimes give false positives with certain string values
// Fixes https://github.com/jquense/yup/issues/764
// Tests for this can be found in `packages/react/src/date-picker/test-utils.ts`
export const yupDateField = yup
	.date()
	.transform((current, orig) => (typeof orig === 'string' ? orig : current))
	.typeError('Enter a valid date');

// Session storage converts converts dates to ISO strings, so we need to convert these values back to dates
export function parseDateField(value: Date | string | undefined) {
	const parsedValue = typeof value === 'string' ? parseISO(value) : value;
	return isValid(parsedValue) ? (value as Date) : undefined;
}
