import * as yup from 'yup';
import { parseISO, isValid } from 'date-fns';
import { z } from 'zod';
import { FieldValues } from 'react-hook-form';

// Empty strings do not trigger Zod required field error validation
export const zodString = (message?: string) => z.string().trim().min(1, { message })
export const zodStringOptional = () => z.string().optional()

export const zodDateField = (message = 'Enter a valid date') => z.date({ invalid_type_error: 'Enter a valid date', required_error: message })

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

const phoneError = {
	lettersOrSymbols: 'Phone number must not include letters or symbols',
	start0402: `Mobile numbers must begin with '04', landline numbers must begin with '02'`,
	digitCount: 'The Phone number is expected to be 10 digits long'
}

export function zodPhoneField(message = 'Enter a phone number') {
	return zodString(message).regex(/^[\d\s]+$/, { message: phoneError.lettersOrSymbols })
		.regex(/^0[42][\d\s]+$/, { message: phoneError.start0402 })
		// Refine returns with the wrong type information https://github.com/colinhacks/zod/issues/2474
		.refine((val) => val.replace(/\s/g, '').length === 10, { message: phoneError.digitCount })
}
export function zodPhoneFieldOptional() {
	return zodStringOptional()
		.refine(value => !value || /^[\d\s]+$/.test(value), { message: phoneError.lettersOrSymbols })
		.refine(value => !value || /^0[42][\d\s]+$/.test(value), { message: phoneError.start0402 })
		// Refine returns with the wrong type information https://github.com/colinhacks/zod/issues/2474
		.refine(value => !value || value?.replace(/\s/g, '').length === 10, { message: phoneError.digitCount })
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

// Only show the page alert if there is more than 1 error
export function checkHasErrors(errors: FieldValues) {
	return Object.keys(errors).length > 1
};
