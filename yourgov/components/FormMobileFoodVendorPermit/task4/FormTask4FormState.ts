import { DeepPartial } from 'react-hook-form';
import { Completion } from '../FormState';

const fileCodes = [
	'rmsVehicleRegistration',
	'operationalPlanOfManagement',
	'vehicleBuildAndLayoutPlans',
	'foodSafetySupervisorCertificate',
	'suggestedMenuOrListOfFoodsBeingSold',
] as const;

export type FileCode = (typeof fileCodes)[number];

export type Task4FormState = Completion & {
	step1: Completion;
};

export const task4DefaultFormState: DeepPartial<Task4FormState> = {
	started: false,
	completed: false,
	step1: {
		completed: false,
	},
};
