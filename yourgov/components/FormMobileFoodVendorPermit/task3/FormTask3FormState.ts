import { DeepPartial } from 'react-hook-form';
import { z } from 'zod';
import { zodFile, zodString } from '../utils';

const fileCodes = [
	'rmsVehicleRegistration',
	'operationalPlanOfManagement',
	'vehicleBuildAndLayoutPlans',
	'foodSafetySupervisorCertificate',
	'suggestedMenuOrListOfFoodsBeingSold',
] as const

export type FileCode = typeof fileCodes[number]

export const task3FileSchema = z.object({
	code: z.enum(fileCodes),
	type: zodString(),
	file: zodFile('File missing'),
});

export type Task3FileSchema = z.infer<typeof task3FileSchema>;

export const task3Step1Schema = z.object({
	fileCollection: z.object({
		rmsVehicleRegistration: task3FileSchema,
		operationalPlanOfManagement: task3FileSchema,
		vehicleBuildAndLayoutPlans: task3FileSchema,
		foodSafetySupervisorCertificate: task3FileSchema,
		suggestedMenuOrListOfFoodsBeingSold: task3FileSchema,
	})
});

export type Task3Step1Schema = z.infer<typeof task3Step1Schema>;

export type Task3FormState = {
	started: boolean;
	completed: boolean;
	step1: Task3Step1Schema & { completed: boolean };
};

export const task3DefaultFormState: DeepPartial<Task3FormState> = {
	started: false,
	completed: false,
	step1: {
		fileCollection: {
			rmsVehicleRegistration: {
				code: 'rmsVehicleRegistration',
				type: 'RMS Vehicle registration',
			},
			operationalPlanOfManagement: {
				code: 'operationalPlanOfManagement',
				type: 'Operational Plan of Management',
			},
			vehicleBuildAndLayoutPlans: {
				code: 'vehicleBuildAndLayoutPlans',
				type: 'Vehicle build and layout plans',
			},
			foodSafetySupervisorCertificate: {
				code: 'foodSafetySupervisorCertificate',
				type: 'Food Safety Supervisor Certificate'
			},
			suggestedMenuOrListOfFoodsBeingSold: {
				code: 'suggestedMenuOrListOfFoodsBeingSold',
				type: 'Suggested menu or list of foods being sold',
			},
		},
		completed: false,
	},
};
