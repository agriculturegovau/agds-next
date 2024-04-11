import { DeepPartial } from 'react-hook-form';
import * as yup from 'yup';
import { z } from "zod";
import { zodString } from '../utils';

export const task2Step1EmployeeSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter a valid email')
		.email({ message: 'Not a valid email address' }),
});

export type Task2Step1EmployeeSchema = z.infer<typeof task2Step1EmployeeSchema>;

export const task2Step1Schema = z.object({
	employeeList: z.array(task2Step1EmployeeSchema, { required_error: 'required_error' }).nonempty({ message: 'No employees added' })
})

export type Task2Step1Schema = z.infer<typeof task2Step1Schema>

export const task2Step2FormSchema = yup
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

export type Task2Step2FormSchema = yup.InferType<typeof task2Step2FormSchema>;

export const task2Step3FormSchema = yup
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

export type Task2Step3FormSchema = yup.InferType<typeof task2Step3FormSchema>;

export type Task2FormState = {
	started: boolean;
	completed: boolean;
	step1: Task2Step1Schema & { completed: boolean };
	step2: Task2Step2FormSchema & { completed: boolean };
	step3: Task2Step3FormSchema & { completed: boolean };
};

export const task2DefaultFormState: DeepPartial<Task2FormState> = {
	started: false,
	completed: false,
	step1: {
		employeeList: [],
		completed: false,
	},
};
