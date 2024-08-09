import { z } from 'zod';
import { type DeepPartial } from 'react-hook-form';
import * as yup from 'yup';
import { yupDateField } from '../utils';
import { zodPhoneFieldOptional, zodString } from '../../../lib/zodUtils';
import { type Completion } from '../FormState';

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

export const task1Step2FormSchema = yup
	.object({
		businessName: yup.string().required('Business or company name is required'),
		tradingName: yup.string(),
		businessStructure: yup
			.string()
			.typeError('Business structure is required')
			.required('Business structure is required'),
		abn: yup.string().when('businessStructure', (value, schema) => {
			if (value === 'Business') {
				return schema.required('ABN is required');
			}
			return schema;
		}),
	})
	.required();

export type Task1Step2FormSchema = yup.InferType<typeof task1Step2FormSchema>;

export const task1Step3FormSchema = yup
	.object({
		// street address
		streetAddress: yup.string().required('Enter your street address'),
		suburbTownCity: yup.string().required('Enter your suburb, town or city'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		// postal address
		isPostalAddressSameAsStreetAddress: yup.boolean(),
		postalAddress: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postal address'),
		}),
		postalSuburbTownCity: yup
			.string()
			.when('isPostalAddressSameAsStreetAddress', {
				is: false,
				then: yup.string().required('Enter your suburb, town or city'),
			}),
		postalState: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your state'),
		}),
		postalPostcode: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postcode'),
		}),
	})
	.required();

export type Task1Step3FormSchema = yup.InferType<typeof task1Step3FormSchema>;

export const task1Step4FormSchema = yup
	.object({
		registrationNumber: yup
			.string()
			.max(6, 'Registration number can not be longer than 6 characters')
			.required('Vehicle registration number is required'),
		registrationExpiry: yupDateField.required(
			'Vehicle registration expiry is required'
		),
	})
	.required();

export type Task1Step4FormSchema = yup.InferType<typeof task1Step4FormSchema>;

export const task1Step5FormSchema = yup
	.object({
		tradingPeriod: yup
			.object({
				from: yupDateField
					.required('Enter a valid date')
					// Ensures the start date is always before the end date
					.max(yup.ref('to'), 'Start date must be before the end date'),
				to: yupDateField
					.required('Enter a valid date')
					// Ensures the end date is always after the start date
					.min(yup.ref('from'), 'Start date must be before the end date'),
			})
			.required('Enter a valid date'),
		openingTime: yup.string().required('Start time is required'),
		closingTime: yup.string().required('End time is required'),
	})
	.required();

export type Task1Step5FormSchema = yup.InferType<typeof task1Step5FormSchema>;

export const task1Step6FormSchema = yup
	.object({
		cuisine: yup
			.object()
			.shape({ label: yup.string().required(), value: yup.string().required() })
			.typeError('Cuisine is required')
			.default(null),
	})
	.required();

export type Task1Step6FormSchema = yup.InferType<typeof task1Step6FormSchema>;

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
