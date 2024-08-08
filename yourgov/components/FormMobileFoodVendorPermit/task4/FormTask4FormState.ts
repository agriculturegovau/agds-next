import { DeepPartial } from 'react-hook-form';
import { z } from 'zod';
import { type Completion } from '../FormState';
import { zodString } from '../utils';

const fileCodes = [
	'rmsVehicleRegistration',
	'operationalPlanOfManagement',
	'vehicleBuildAndLayoutPlans',
	'foodSafetySupervisorCertificate',
	'suggestedMenuOrListOfFoodsBeingSold',
] as const;

export type FileCode = (typeof fileCodes)[number];

export const task4Step1FormSchema = z.object({
	declarations: z
		.object({
			agreeToTerms: zodString('Agree to the terms of use.'),
			isTrueInformation: zodString(
				'Ensure all of your information is correct.'
			),
			allowUseOfPersonalData: zodString(
				'The department needs your permission to use your personal data.'
			),
		})
		.optional(),
});

export type Task4Step1FormSchema = z.infer<typeof task4Step1FormSchema>;

export const task4DefaultFormState: DeepPartial<Task4FormState> = {
	started: false,
	completed: false,
	step1: {
		completed: false,
	},
};

export type Task4FormState = Completion & {
	step1: Task4Step1FormSchema & Completion;
};
