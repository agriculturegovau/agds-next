import { type DeepPartial } from 'react-hook-form';
import { z, ZodIssueCode } from 'zod';
import {
	zodArray,
	zodDateField,
	zodPhoneField,
	zodPhoneFieldOptional,
	zodString,
	zodStringOptional,
	zodTimeField,
} from '../../../lib/zodUtils';
import { type Completion } from '../FormState';
import { StaffMember } from '../../Staff/lib/types';

export const stepOwnerDetailsFormSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter your email address').email(
		'Enter a valid email address'
	),
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type StepOwnerDetailsFormSchema = z.infer<
	typeof stepOwnerDetailsFormSchema
>;

export const stepOwnerDetailsChangeDetailsFormSchema = z.object({
	contactPhoneNumber: zodPhoneFieldOptional(),
});

export type StepOwnerDetailsChangeDetailsFormSchema = z.infer<
	typeof stepOwnerDetailsChangeDetailsFormSchema
>;

export const stepBusinessDetailsFormSchema = z
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

export type StepBusinessDetailsFormSchema = z.infer<
	typeof stepBusinessDetailsFormSchema
>;

export const stepBusinessAddressFormSchema = z
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

export type StepBusinessAddressFormSchema = z.infer<
	typeof stepBusinessAddressFormSchema
>;

export const stepVehicleRegistrationFormSchema = z.object({
	registrationNumber: z
		.string()
		.transform((value) => value.replace(/\s+/g, ''))
		.pipe(
			z
				.string()
				.min(1, { message: 'Vehicle registration number is required' })
				.max(6, 'Registration number can not be longer than 6 characters')
		),
	registrationExpiry: zodDateField('Registration expiry date is required'),
});

export type StepVehicleRegistrationFormSchema = z.infer<
	typeof stepVehicleRegistrationFormSchema
>;

export const stepTradingTimeFormSchema = z.object({
	tradingPeriod: z.object({
		from: zodDateField('Start date is required'),
		to: zodDateField('End date is required'),
	}),
	openingTime: zodTimeField({ label: 'Opening time' }),
	closingTime: zodTimeField({ label: 'Closing time' }),
});

export type StepTradingTimeFormSchema = z.infer<
	typeof stepTradingTimeFormSchema
>;

export const stepFoodServedFormSchema = z.object({
	foodServed: zodArray(
		z.object({ label: zodString(), value: zodString() }),
		'Food types is required'
	),
});

export type StepFoodServedFormSchema = z.infer<typeof stepFoodServedFormSchema>;

export const stepEmployeesFormSchema = z.object({
	employee: z.object({
		id: zodString(),
		firstName: zodString('Enter employee’s first name'),
		lastName: zodString('Enter employee’s last name'),
		email: zodString('Enter employee’s email address').email(
			'Enter a valid email address'
		),
	}),
});

export type StepEmployeesFormSchema = z.infer<typeof stepEmployeesFormSchema>;

export const stepFoodSafetySupervisorFormSchema = z.object({
	supervisor: zodString('Food safety supervisor is required'),
});

export type StepFoodSafetySupervisorFormSchema = z.infer<
	typeof stepFoodSafetySupervisorFormSchema
>;

export const stepUploadDocumentsFormSchema = z.object({
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

export type StepUploadDocumentsFormSchema = z.infer<
	typeof stepUploadDocumentsFormSchema
>;

export const stepReviewAndSubmitFormSchema = z.object({
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

export type StepReviewAndSubmitFormSchema = z.infer<
	typeof stepReviewAndSubmitFormSchema
>;

export type FormState = {
	stepOwnerDetails: StepOwnerDetailsFormSchema & Completion;
	stepBusinessDetails: StepBusinessDetailsFormSchema & Completion;
	stepBusinessAddress: StepBusinessAddressFormSchema & Completion;
	stepVehicleRegistration: StepVehicleRegistrationFormSchema & Completion;
	stepTradingTime: StepTradingTimeFormSchema & Completion;
	stepFoodServed: StepFoodServedFormSchema & Completion;
	stepEmployees: {
		employee: StepEmployeesFormSchema['employee'][];
	} & Completion;
	stepFoodSafetySupervisor: StepFoodSafetySupervisorFormSchema & Completion;
	stepUploadDocuments: StepUploadDocumentsFormSchema & Completion;
	stepReviewAndSubmit: StepReviewAndSubmitFormSchema & Completion;
};

export const defaultFormState: DeepPartial<FormState> = {
	stepOwnerDetails: {
		firstName: 'Charlie',
		lastName: 'Walker',
		email: 'c.walker@email.com',
		completed: false,
	},
	stepBusinessAddress: {
		isPostalAddressSameAsBusinessAddress: true,
		completed: false,
	},
	stepEmployees: {
		employee: [
			{
				firstName: 'Taj',
				lastName: 'Walkley',
				email: 'Taj@test.com',
				id: 'taj-walkley-employee',
			},
		],
	},
	stepUploadDocuments: {
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
	mobile: zodPhoneField('Enter employee’s mobile number'),
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
