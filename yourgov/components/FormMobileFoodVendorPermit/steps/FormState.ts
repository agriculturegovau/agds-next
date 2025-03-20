import { type DeepPartial } from 'react-hook-form';
import { z, ZodIssueCode } from 'zod';
import {
	zodArray,
	zodDateField,
	zodPhoneField,
	zodString,
	zodStringOptional,
	zodTimeField,
} from '../../../lib/zodUtils';
import { type Status } from '../FormState';
import { StaffMember } from '../../Staff/lib/types';

export const stepOwnerDetailsFormSchema = z.object({
	firstName: zodString('First name is required'),
	lastName: zodString('Last name is required'),
	email: zodString('Email address is required').email(
		'Email address is invalid'
	),
	mobileNumber: zodPhoneField(),
	contactMethod: zodStringOptional(),
});

export type StepOwnerDetailsFormSchema = z.infer<
	typeof stepOwnerDetailsFormSchema
>;

export const stepOwnerDetailsOtherDetailsFormSchema = z.object({
	contactMethod: zodString('Preferred contact method is required'),
});

export type StepOwnerDetailsOtherDetailsFormSchema = z.infer<
	typeof stepOwnerDetailsOtherDetailsFormSchema
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
			return ['Business', 'Sole trader'].includes(value.businessStructure)
				? Boolean(value.abn)
				: true;
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
		streetAddress: zodString('Street address is required'),
		suburbTownCity: zodString('Suburb, town or city is required'),
		state: zodString('State or territory is required'),
		postcode: zodString('Postcode is required').length(4, {
			message: 'Postcode must be 4 digits',
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
				message: message || `${label} is required`,
				validation: { includes: '' },
				path: [key],
			});
		}

		if (!value.isPostalAddressSameAsBusinessAddress) {
			if (!value.postalAddress) {
				addIssue('postalAddress', 'Postal address');
			}
			if (!value.postalSuburbTownCity) {
				addIssue('postalSuburbTownCity', 'Suburb, town or city');
			}
			if (!value.postalState) {
				addIssue('postalState', 'State or territory');
			}
			if (!value.postalPostcode) {
				addIssue('postalPostcode', 'Postcode');
			} else if (value.postalPostcode.length !== 4) {
				addIssue('postalPostcode', 'Postcode', 'Postcode must be 4 digits');
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
		firstName: zodString('First name is required'),
		lastName: zodString('Last name is required'),
		email: zodString('Email address is required').email(
			'Email address is invalid'
		),
	}),
});

export type StepEmployeesFormSchema = z.infer<typeof stepEmployeesFormSchema>;

export const stepUploadDocumentsFormSchema = z.object({
	files: z.object({
		'rms-vehicle-registration': z.object({
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
	stepOwnerDetails: StepOwnerDetailsFormSchema & Status;
	stepOwnerDetailsReviewEdit: StepOwnerDetailsFormSchema & Status;
	// FIXME: This is here to satisfy TS but is not correct
	stepChangeOwnerDetails: StepOwnerDetailsFormSchema & Status;
	stepBusinessDetails: StepBusinessDetailsFormSchema & Status;
	stepBusinessAddress: StepBusinessAddressFormSchema & Status;
	stepVehicleRegistration: StepVehicleRegistrationFormSchema & Status;
	stepTradingTime: StepTradingTimeFormSchema & Status;
	stepFoodServed: StepFoodServedFormSchema & Status;
	stepEmployees: {
		employee: StepEmployeesFormSchema['employee'][];
	} & Status;
	stepEmployeesReviewEdit: {
		employee: StepEmployeesFormSchema['employee'][];
	} & Status;
	// FIXME: This is here to satisfy TS but is not correct
	stepAddEmployee: {
		employee: StepEmployeesFormSchema['employee'][];
	} & Status;
	stepUploadDocuments: StepUploadDocumentsFormSchema & Status;
	stepReviewAndSubmit: StepReviewAndSubmitFormSchema & Status;
};

export const defaultFormState: DeepPartial<FormState> = {
	stepOwnerDetails: {
		firstName: 'Charlie',
		lastName: 'Walker',
		email: 'c.walker@email.com',
		mobileNumber: '0494 811 111',
		completed: false,
	},
	stepBusinessAddress: {
		isPostalAddressSameAsBusinessAddress: true,
		completed: false,
	},
	stepEmployees: {
		employee: [],
	},
	stepUploadDocuments: {
		files: {
			'rms-vehicle-registration': {
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
	firstName: zodString('First name is required'),
	lastName: zodString('Last name is required'),
	email: zodString('Email address is required').email(
		'Email address is invalid'
	),
	mobile: zodPhoneField('Mobile number'),
	role: z.enum(['Manager', 'Employee', 'Trainee', 'Work experience'], {
		errorMap: () => ({ message: 'Role is required' }),
	}),
	trainingCompleted: z.array(
		z.enum(['Deliveries', 'Distribution', 'Ice cream making', 'Packaging'])
	),
});

export type InviteStaffFormSchema = z.infer<typeof inviteStaffFormSchema>;

export const editStaffFormSchema = z.object({
	role: z.enum(['Manager', 'Employee', 'Trainee', 'Work experience'], {
		errorMap: () => ({ message: 'Role is required' }),
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
