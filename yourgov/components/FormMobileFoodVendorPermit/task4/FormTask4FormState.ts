import { DeepPartial } from 'react-hook-form';

const fileCodes = [
	'rmsVehicleRegistration',
	'operationalPlanOfManagement',
	'vehicleBuildAndLayoutPlans',
	'foodSafetySupervisorCertificate',
	'suggestedMenuOrListOfFoodsBeingSold',
] as const;

export type FileCode = (typeof fileCodes)[number];

export type Task4FormState = {
	started: boolean;
	completed: boolean;
	step1: { completed: boolean };
};

export const task4DefaultFormState: DeepPartial<Task4FormState> = {
	started: false,
	completed: false,
	step1: {
		completed: false,
	},
};
