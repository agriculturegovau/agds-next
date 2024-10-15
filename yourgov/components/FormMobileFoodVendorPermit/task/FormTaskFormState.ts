import { type DeepPartial } from 'react-hook-form';
import { z, ZodIssueCode } from 'zod';
import {
	zodArray,
	zodDateField,
	zodPhoneFieldOptional,
	zodString,
	zodStringOptional,
	zodTimeField,
} from '../../../lib/zodUtils';
import { type Completion } from '../FormState';

export const taskStep1FormSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter your email address').email(
		'Enter a valid email address'
	),
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type TaskStep1FormSchema = z.infer<typeof taskStep1FormSchema>;

export const taskStep1Part2FormSchema = z.object({
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type TaskStep1Part2FormSchema = z.infer<typeof taskStep1Part2FormSchema>;

export const taskStep2FormSchema = z
	.object({
		businessName: zodString('Business or company name is required'),
		tradingName: zodStringOptional(),
		businessStructure: zodString('Business structure is required'),
		abn: zodStringOptional(),
		acn: zodStringOptional(),
	})
	.refine(
		(value) => {
			return value.businessStructure === 'Business' ? Boolean(value.abn) : true;
		},
		{
			path: ['abn'],
			message: 'ABN is required',
		}
	)
	.refine(
		(value) => {
			return value.businessStructure === 'Company' ? Boolean(value.acn) : true;
		},
		{
			path: ['acn'],
			message: 'ACN is required',
		}
	);

export type TaskStep2FormSchema = z.infer<typeof taskStep2FormSchema>;

export const taskStep3FormSchema = z
	.object({
		// business address
		streetAddress: zodString('Enter your street address'),
		suburbTownCity: zodString('Enter your suburb, town or city'),
		state: zodString('Enter your state'),
		postcode: zodString('Enter your postcode').length(4, {
			message: 'An Australian postcode is 4 digits long',
		}),
		// postal address
		isPostalAddressSameAsBusinessAddress: z.boolean(),
		postalAddress: zodStringOptional(),
		postalSuburbTownCity: zodStringOptional(),
		postalState: zodStringOptional(),
		postalPostcode: zodStringOptional(),
	})
	.superRefine((value, context) => {
		function addIssue(
			key: keyof typeof value,
			label: string,
			message?: string
		) {
			context.addIssue({
				code: ZodIssueCode.invalid_string,
				message: message || `Enter your ${label}`,
				validation: { includes: '' },
				path: [key],
			});
		}

		if (!value.isPostalAddressSameAsBusinessAddress) {
			if (!value.postalAddress) {
				addIssue('postalAddress', 'postal address');
			}
			if (!value.postalSuburbTownCity) {
				addIssue('postalSuburbTownCity', 'suburb, town or city');
			}
			if (!value.postalState) {
				addIssue('postalState', 'state');
			}
			if (!value.postalPostcode) {
				addIssue('postalPostcode', 'postcode');
			} else if (value.postalPostcode.length !== 4) {
				addIssue(
					'postalPostcode',
					'postcode',
					'An Australian postcode is 4 digits long'
				);
			}
		}
	});

export type TaskStep3FormSchema = z.infer<typeof taskStep3FormSchema>;

export const taskStep4FormSchema = z.object({
	registrationNumber: zodString('Vehicle registration number is required').max(
		6,
		'Registration number can not be longer than 6 characters'
	),
	registrationExpiry: zodDateField('Registration expiry date is required'),
});

// FIXME: I don't like having to do this, but I can't get dates and error messages to work reliably across forms and reviews
export const taskStep4ReviewSchema = z.object({
	registrationNumber: zodString().max(6),
	registrationExpiry: zodDateField(),
});

export type TaskStep4FormSchema = z.infer<typeof taskStep4FormSchema>;

const periodActiveMessage = 'Trading start and end date is required';

export const taskStep5FormSchema = z
	.object({
		tradingPeriod: z.object({
			from: zodDateField(periodActiveMessage),
			to: zodDateField(periodActiveMessage),
		}),
		openingTime: zodTimeField({ label: 'Opening time' }),
		closingTime: zodTimeField({ label: 'Closing time' }),
	})
	.refine(
		(value) => {
			const { from, to } = value.tradingPeriod || {};
			// Ensures the start date is always before the end date
			return from && to ? from <= to : true;
		},
		{
			message: 'Start date must be before the end date',
		}
	);

export const taskStep5ReviewSchema = z.object({
	tradingPeriod: z.object({
		from: zodDateField(),
		to: zodDateField(),
	}),
	openingTime: zodTimeField({ label: 'Opening time' }),
	closingTime: zodTimeField({ label: 'Closing time' }),
});

export type TaskStep5FormSchema = z.infer<typeof taskStep5FormSchema>;

export const taskStep6FormSchema = z.object({
	cuisine: zodArray(
		z.object({ label: zodString(), value: zodString() }),
		'Food types is required'
	),
});

export type TaskStep6FormSchema = z.infer<typeof taskStep6FormSchema>;

export type TaskFormState = Completion & {
	step1: TaskStep1FormSchema & Completion;
	step2: TaskStep2FormSchema & Completion;
	step3: TaskStep3FormSchema & Completion;
	step4: TaskStep4FormSchema & Completion;
	step5: TaskStep5FormSchema & Completion;
	step6: TaskStep6FormSchema & Completion;
	step7: Completion;
};

export const taskDefaultFormState: DeepPartial<TaskFormState> = {
	started: false,
	completed: false,
	step1: {
		firstName: 'Charlie',
		lastName: 'Walker',
		email: 'c.walker@email.com',
		completed: false,
	},
	step3: {
		isPostalAddressSameAsBusinessAddress: true,
		completed: false,
	},
};
