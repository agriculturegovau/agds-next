import * as yup from 'yup';
import { parseISO, isValid } from 'date-fns';
import { z } from 'zod';

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

export const zodPhoneField = (message = 'Enter a phone number') => z.string({ required_error: message })
	.regex(/^[\d\s]+$/, { message: 'Phone number must not include letters or symbols' })
	.regex(/^0[\d\s]+$/, { message: `Mobile numbers must begin with '04', landline numbers must begin with an area code` })
	// Refine returns with the wrong type information https://github.com/colinhacks/zod/issues/2474
	.refine((val) => val.replace(/\s/g, '').length === 10) as unknown as ReturnType<typeof z.string>

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
