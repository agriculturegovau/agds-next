import { applyForFoodPermitPage } from '../utils';

export type StepsData = typeof stepsData;

export type FormStep = StepsData[number];

export type StepKey = FormStep['formStateKey'];

/**
 * The order of the steps in this array determines the order
 * of steps in the application.
 */
export const stepsData = [
	{
		formStateKey: 'stepOwnerDetails',
		label: 'Owner details',
		labelWhenChanging: 'Change owner details',
		href: applyForFoodPermitPage + '/steps/owner-details',
		items: [
			{
				label: 'Change business owner details',
				href: applyForFoodPermitPage + '/steps/owner-details/change-details',
			},
		],
	},
	{
		formStateKey: 'stepBusinessDetails',
		label: 'Business details',
		labelWhenChanging: 'Change business details',
		href: applyForFoodPermitPage + '/steps/business-details',
	},
	{
		formStateKey: 'stepBusinessAddress',
		label: 'Business address',
		labelWhenChanging: 'Change business address',
		href: applyForFoodPermitPage + '/steps/business-address',
	},
	{
		formStateKey: 'stepVehicleRegistration',
		label: 'Vehicle registration',
		labelWhenChanging: 'Change vehicle registration',
		href: applyForFoodPermitPage + '/steps/vehicle-registration',
	},
	{
		formStateKey: 'stepTradingTime',
		label: 'Trading time',
		labelWhenChanging: 'Change trading time',
		href: applyForFoodPermitPage + '/steps/trading-time',
	},
	{
		formStateKey: 'stepFoodServed',
		label: 'Food served',
		labelWhenChanging: 'Change food served',
		href: applyForFoodPermitPage + '/steps/food-served',
	},
	{
		formStateKey: 'stepEmployees',
		label: 'Employees',
		labelWhenChanging: 'Change employees',
		href: applyForFoodPermitPage + '/steps/employees',
		items: [
			{
				label: 'Add employee',
				href: applyForFoodPermitPage + '/steps/employees/add-employee',
			},
		],
	},
	{
		formStateKey: 'stepFoodSafetySupervisor',
		label: 'Food safety supervisor',
		labelWhenChanging: 'Change food safety supervisor',
		href: applyForFoodPermitPage + '/steps/food-safety-supervisor',
	},
	{
		formStateKey: 'stepUploadDocuments',
		label: 'Upload documents',
		labelWhenChanging: 'Change documents',
		href: applyForFoodPermitPage + '/steps/documents',
	},
	{
		formStateKey: 'stepReviewAndSubmit',
		label: 'Review and submit',
		labelWhenChanging: 'Change review and submit', // Not used but it simplifies the type and makes the submit pages more robust
		href: applyForFoodPermitPage + '/steps/review-and-submit',
	},
] as const;

/**
 * This is a convenience lookup for step data that references the key,
 * rather than the array index.
 */
export const stepKeyToStepDataMap = stepsData.reduce(
	(acc, step) => {
		return {
			...acc,
			[step.formStateKey]: step,
		};
	},
	{} as Record<StepKey, FormStep>
);
