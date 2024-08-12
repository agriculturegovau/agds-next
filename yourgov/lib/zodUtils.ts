// import { type ZodIssueCode, type ZodTypeAny, z } from 'zod';
import { z, ZodIssueCode } from 'zod';

// Empty strings do not trigger Zod required field error validation
export function zodString(message?: string) {
	return z
		.string({
			invalid_type_error: message,
			required_error: message,
		})
		.trim()
		.min(1, { message });
}

export const zodStringOptional = () => z.string().optional();

const phoneError = {
	lettersOrSymbols: 'Phone number must not include letters or symbols',
	start0402:
		'Mobile numbers must begin with ‘04’, landline numbers must begin with ‘02’',
	digitCount: 'The Phone number must be 10 digits long',
};

export function zodPhoneField(message = 'Enter a phone number') {
	return (
		zodString(message)
			.regex(/^[\d\s]+$/, { message: phoneError.lettersOrSymbols })
			.regex(/^0[42][\d\s]+$/, { message: phoneError.start0402 })
			// Refine returns with the wrong type information https://github.com/colinhacks/zod/issues/2474
			.refine((val) => val.replace(/\s/g, '').length === 10, {
				message: phoneError.digitCount,
			})
	);
}
export function zodPhoneFieldOptional() {
	return (
		zodStringOptional()
			.refine((value) => !value || /^[\d\s]+$/.test(value), {
				message: phoneError.lettersOrSymbols,
			})
			.refine((value) => !value || /^0[42][\d\s]+$/.test(value), {
				message: phoneError.start0402,
			})
			// Refine returns with the wrong type information https://github.com/colinhacks/zod/issues/2474
			.refine((value) => !value || value?.replace(/\s/g, '').length === 10, {
				message: phoneError.digitCount,
			})
	);
}

export function zodDateField(message = 'Enter a valid date') {
	return z.date({
		invalid_type_error: 'Enter a valid date',
		required_error: message,
	});
}

export function zodReviewDateField() {
	return z.coerce.date();
}

interface ZodTimeFieldProps {
	label: string;
	requiredMessage?: string;
	invalidMessage?: string;
}

export function zodTimeField({
	label,
	requiredMessage = `${label} is required`,
	invalidMessage = `${label} is an invalid time`,
}: ZodTimeFieldProps) {
	return z
		.object(
			{
				value: zodString(requiredMessage),
				formatted: zodString(requiredMessage),
			},
			{
				required_error: requiredMessage,
				invalid_type_error: invalidMessage,
			}
		)
		.superRefine((value, context) => {
			if (!value.value) {
				context.addIssue({
					code: ZodIssueCode.invalid_string,
					message: requiredMessage,
					validation: { includes: '' },
				});
			}
			if (!/^\d\d:\d\d$/.test(value.value)) {
				context.addIssue({
					code: ZodIssueCode.invalid_string,
					message: invalidMessage,
					validation: { includes: '' },
				});
			}
		});
}
