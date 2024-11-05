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
import { StaffMember } from '../../Staff/lib/types';

export const step1FormSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter your email address').email(
		'Enter a valid email address'
	),
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type Step1FormSchema = z.infer<typeof step1FormSchema>;

export const step1Part2FormSchema = z.object({
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type Step1Part2FormSchema = z.infer<typeof step1Part2FormSchema>;

export const step2FormSchema = z
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

export type Step2FormSchema = z.infer<typeof step2FormSchema>;

export const step3FormSchema = z
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

export type Step3FormSchema = z.infer<typeof step3FormSchema>;

export const step4FormSchema = z.object({
	registrationNumber: zodString('Vehicle registration number is required').max(
		6,
		'Registration number can not be longer than 6 characters'
	),
	registrationExpiry: zodDateField('Registration expiry date is required'),
});

export type Step4FormSchema = z.infer<typeof step4FormSchema>;

const periodActiveMessage = 'Trading start and end date is required';

export const step5FormSchema = z
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

export type Step5FormSchema = z.infer<typeof step5FormSchema>;

export const step6FormSchema = z.object({
	foodServed: zodArray(
		z.object({ label: zodString(), value: zodString() }),
		'Food types is required'
	),
});

export type Step6FormSchema = z.infer<typeof step6FormSchema>;

export const step7FormSchema = z.object({
	employee: z.object({
		id: zodString(),
		firstName: zodString('Enter employee’s first name'),
		lastName: zodString('Enter employee’s last name'),
		email: zodString('Enter employee’s email address').email(
			'Enter a valid email address'
		),
	}),
});

export type Step7FormSchema = z.infer<typeof step7FormSchema>;

export const step8FormSchema = z.object({
	supervisor: zodString('Food safety supervisor is required'),
});

export type Step8FormSchema = z.infer<typeof step8FormSchema>;

export const step9FormSchema = z.object({
	files: z.object({
		'rms-vehicle-registration': z.object({
			file: zodString(),
			size: zodString(),
		}),
		'food-safety-certificate': z.object({
			file: zodString(),
			size: zodString(),
		}),
		'suggested-menu-or-list-of-foods-being-sold': z.object({
			file: zodString(),
			size: zodString(),
		}),
	}),
});

export type Step9FormSchema = z.infer<typeof step9FormSchema>;

export const step10FormSchema = z.object({
	declaration1: z
		.boolean()
		.refine((value) => value, 'Accept the first declaration to continue'),
	declaration2: z
		.boolean()
		.refine((value) => value, 'Accept the second declaration to continue'),
	declaration3: z
		.boolean()
		.refine((value) => value, 'Accept the third declaration to continue'),
});

export type Step10FormSchema = z.infer<typeof step10FormSchema>;

export type FormState = {
	step1: Step1FormSchema & Completion;
	step2: Step2FormSchema & Completion;
	step3: Step3FormSchema & Completion;
	step4: Step4FormSchema & Completion;
	step5: Step5FormSchema & Completion;
	step6: Step6FormSchema & Completion;
	step7: { employee: Step7FormSchema['employee'][] } & Completion;
	step8: Step8FormSchema & Completion;
	step9: Step9FormSchema & Completion;
	step10: Step10FormSchema & Completion;
};

export const defaultFormState: DeepPartial<FormState> = {
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
	step7: {
		employee: [],
	},
	step9: {
		files: {
			'rms-vehicle-registration': {
				file: '',
				size: '',
			},
			'food-safety-certificate': {
				file: '',
				size: '',
			},
			'suggested-menu-or-list-of-foods-being-sold': {
				file: '',
				size: '',
			},
		},
	},
};

///////////
// STAFF

export const inviteStaffFormSchema = z.object({
	id: zodString(),
	firstName: zodString('Enter employee’s first name'),
	lastName: zodString('Enter employee’s last name'),
	email: zodString('Enter employee’s email address').email(
		'Enter a valid email address'
	),
	mobile: zodString('Enter employee’s mobile number'),
	role: z.enum(['Manager', 'Employee', 'Trainee', 'Work experience'], {
		errorMap: () => ({ message: 'Please choose a role' }),
	}),
	trainingCompleted: z.array(
		z.enum(['Deliveries', 'Distribution', 'Ice cream making', 'Packaging'])
	),
});

export type InviteStaffFormSchema = z.infer<typeof inviteStaffFormSchema>;

export const editStaffFormSchema = z.object({
	role: z.enum(['Manager', 'Employee', 'Trainee', 'Work experience'], {
		errorMap: () => ({ message: 'Please choose a role' }),
	}),
	trainingCompleted: z.array(
		z.enum(['Deliveries', 'Distribution', 'Ice cream making', 'Packaging'])
	),
});

export type EditStaffFormSchema = {
	role: StaffMember['role'];
	trainingCompleted: StaffMember['trainingCompleted'];
};

export type GlobalStaffState = {
	accessRequests: InviteStaffFormSchema[]; // TODO: update this to AccessRequests[]
	staffMembers: StaffMember[];
};
