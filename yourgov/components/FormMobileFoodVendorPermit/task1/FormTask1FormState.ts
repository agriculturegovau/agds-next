import { DeepPartial } from 'react-hook-form';
import { ZodIssueCode, z } from 'zod';
import {
	zodArray,
	zodDateField,
	zodPhoneFieldOptional,
	zodString,
	zodStringOptional,
	zodTimeField,
} from '../utils';
import { Completion } from '../FormState';

export const task1Step1FormSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter your email').email('Enter a valid email'),
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type Task1Step1FormSchema = z.infer<typeof task1Step1FormSchema>;

export const task1Step1Part2FormSchema = z.object({
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type Task1Step1Part2FormSchema = z.infer<
	typeof task1Step1Part2FormSchema
>;

export const task1Step2FormSchema = z
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

export type Task1Step2FormSchema = z.infer<typeof task1Step2FormSchema>;

export const task1Step3FormSchema = z
	.object({
		// street address
		streetAddress: zodString('Enter your street address'),
		suburbTownCity: zodString('Enter your suburb, town or city'),
		state: zodString('Enter your state'),
		postcode: zodString('Enter your postcode').length(4, {
			message: 'An australian postcode is 4 digits long',
		}),
		// postal address
		isPostalAddressSameAsStreetAddress: z.boolean(),
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

		if (!value.isPostalAddressSameAsStreetAddress) {
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
					'An australian postcode is 4 digits long'
				);
			}
		}
	});

export type Task1Step3FormSchema = z.infer<typeof task1Step3FormSchema>;

export const task1Step4FormSchema = z.object({
	registrationNumber: zodString('Vehicle registration number is required').max(
		6,
		'Registration number can not be longer than 6 characters'
	),
	registrationExpiry: zodDateField('Vehicle registration expiry is required'),
});

export type Task1Step4FormSchema = z.infer<typeof task1Step4FormSchema>;

const periodActiveMessage = 'Period active start and end date is required';

export const task1Step5FormSchema = z
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

export type Task1Step5FormSchema = z.infer<typeof task1Step5FormSchema>;

export const task1Step6FormSchema = z.object({
	cuisine: zodArray(
		z.object({ label: zodString(), value: zodString() }),
		'Cuisine is required'
	),
});

export type Task1Step6FormSchema = z.infer<typeof task1Step6FormSchema>;

export type Task1FormState = Completion & {
	step1: Task1Step1FormSchema & Completion;
	step2: Task1Step2FormSchema & Completion;
	step3: Task1Step3FormSchema & Completion;
	step4: Task1Step4FormSchema & Completion;
	step5: Task1Step5FormSchema & Completion;
	step6: Task1Step6FormSchema & Completion;
	step7: Completion;
};

export const task1DefaultFormState: DeepPartial<Task1FormState> = {
	started: false,
	completed: false,
	step1: {
		firstName: 'Charlie',
		lastName: 'Walker',
		email: 'c.walker@email.com',
		completed: false,
	},
	step3: {
		isPostalAddressSameAsStreetAddress: true,
		completed: false,
	},
	step5: {
		tradingPeriod: { from: undefined, to: undefined },
		completed: false,
	},
};
