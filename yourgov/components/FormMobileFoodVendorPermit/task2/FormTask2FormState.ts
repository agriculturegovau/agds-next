import { DeepPartial } from 'react-hook-form';
import { z } from 'zod';
import { zodArray, zodString } from '../utils';
import { Completion } from '../FormState';

export const task2Step1EmployeeSchema = z.object({
	firstName: zodString('Enter your first name'),
	lastName: zodString('Enter your last name'),
	email: zodString('Enter a valid email').email({
		message: 'Not a valid email address',
	}),
});

export type Task2Step1EmployeeSchema = z.infer<typeof task2Step1EmployeeSchema>;

export const task2Step1Schema = z.object({
	employeeList: zodArray(task2Step1EmployeeSchema, 'No employees added'),
});

export type Task2Step1Schema = z.infer<typeof task2Step1Schema>;

export const task2Step2Schema = z.object({
	foodSafetySupervisor: zodString('Select a food safety supervisor'),
});

export type Task2Step2Schema = z.infer<typeof task2Step2Schema>;

export const task2Step3Schema = z.object({
	// street address
	streetAddress: z.string(),
	suburbTownCity: z.string(),
	state: z.string(),
	postcode: z.string(),
	// postal address
	isPostalAddressSameAsStreetAddress: z.boolean(),
});

export type Task2Step3Schema = z.infer<typeof task2Step3Schema>;

export type Task2FormState = Completion & {
	step1: Task2Step1Schema & Completion;
	step2: Task2Step2Schema & Completion;
	step3: Task2Step3Schema & Completion;
};

export const task2DefaultFormState: DeepPartial<Task2FormState> = {
	started: false,
	completed: false,
	step1: {
		employeeList: [],
		completed: false,
	},
	step2: {
		foodSafetySupervisor: '',
		completed: false,
	},
};
