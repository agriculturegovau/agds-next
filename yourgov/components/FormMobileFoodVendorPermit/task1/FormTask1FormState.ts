import { DeepPartial } from 'react-hook-form';
import { ZodIssueCode, z } from 'zod';
import { zodDateField, zodPhoneField } from '../utils';

export const task1Step1FormSchema = z
	.object({
		firstName: z.string({ required_error: 'Enter your first name' }),
		lastName: z.string({ required_error: 'Enter your last name' }),
		email: z
			.string({ required_error: 'Enter your email' })
			.email('Enter a valid email'),
		contactPhoneNumber: zodPhoneField().optional(),
	});

export type Task1Step1FormSchema = z.infer<typeof task1Step1FormSchema>;

export const task1Step1Part2FormSchema = z
	.object({
		contactPhoneNumber: zodPhoneField().optional(),
	});

export type Task1Step1Part2FormSchema = z.infer<
	typeof task1Step1Part2FormSchema
>;

export const task1Step2FormSchema = z
	.object({
		businessName: z.string({ required_error: 'Business or company name is required' }),
		tradingName: z.string({ required_error: 'A trading name is required' }),
		businessStructure: z
			.string({ required_error: 'Business structure is required' }),
		abn: z.string().optional()
	}).refine((value) => {
		return value.businessStructure === 'Business' ? Boolean(value.abn) : true
	}, {
		message: 'ABN is required'
	});

export type Task1Step2FormSchema = z.infer<typeof task1Step2FormSchema>;

export const task1Step3FormSchema = z
	.object({
		// street address
		streetAddress: z.string({ required_error: 'Enter your street address' }),
		suburbTownCity: z.string({ required_error: 'Enter your suburb, town or city' }),
		state: z.string({ required_error: 'Enter your state' }),
		postcode: z.string({ required_error: 'Enter your postcode' }),
		// postal address
		isPostalAddressSameAsStreetAddress: z.boolean(),
		postalAddress: z.string().optional(),
		postalSuburbTownCity: z.string().optional(),
		postalState: z.string().optional(),
		postalPostcode: z.string().optional(),
	})
	.superRefine((value, context) => {
		function addIssue(label: string) {
			context.addIssue({
				code: ZodIssueCode.invalid_string,
				message: `Enter your ${label}`,
				validation: { includes: '' }
			})
		}

		if (!value.isPostalAddressSameAsStreetAddress) {
			if (!value.postalAddress) {
				addIssue('postal address')
			}
			if (!value.postalSuburbTownCity) {
				addIssue('suburb, town or city')
			}
			if (!value.postalState) {
				addIssue('state')
			}
			if (!value.postalPostcode) {
				addIssue('postcode')
			}
		}
	});

export type Task1Step3FormSchema = z.infer<typeof task1Step3FormSchema>;

export const task1Step4FormSchema = z
	.object({
		registrationNumber: z
			.string({ required_error: 'Vehicle registration number is required' })
			.max(6, 'Registration number can not be longer than 6 characters'),
		registrationExpiry: zodDateField('Vehicle registration expiry is required'),
	});

export type Task1Step4FormSchema = z.infer<typeof task1Step4FormSchema>;

export const task1Step5FormSchema = z
	.object({
		tradingPeriod: z.object({
			from: zodDateField(),
			to: zodDateField(),
		}),
		openingTime: z.string({ required_error: 'Start time is required' }),
		closingTime: z.string({ required_error: 'End time is required' }),
	}).refine(value => {
		const { from, to } = value.tradingPeriod || {}
		// Ensures the start date is always before the end date
		return from && to ? from <= to : true
	}, {
		message: 'Start date must be before the end date'
	});

export type Task1Step5FormSchema = z.infer<typeof task1Step5FormSchema>;

export const task1Step6FormSchema = z.object({
	cuisine: z.object({ label: z.string(), value: z.string() }, { required_error: 'Cuisine is required' }),
});

export type Task1Step6FormSchema = z.infer<typeof task1Step6FormSchema>;

export type Task1FormState = {
	started: boolean;
	completed: boolean;
	step1: Task1Step1FormSchema & { completed: boolean };
	step2: Task1Step2FormSchema & { completed: boolean };
	step3: Task1Step3FormSchema & { completed: boolean };
	step4: Task1Step4FormSchema & { completed: boolean };
	step5: Task1Step5FormSchema & { completed: boolean };
	step6: Task1Step6FormSchema & { completed: boolean };
	step7: { completed: boolean };
};

export const task1DefaultFormState: DeepPartial<Task1FormState> = {
	started: false,
	completed: false,
	step1: {
		firstName: 'Barney',
		lastName: 'Gumble',
		email: 'gumble@email.com',
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
