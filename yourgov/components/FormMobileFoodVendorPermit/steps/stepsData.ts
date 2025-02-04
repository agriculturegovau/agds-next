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
		changeLabel: 'Change owner details',
		href: applyForFoodPermitPage + '/steps/owner-details',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/owner-details',
		items: [
			{
				label: 'Change business owner details',
				href: applyForFoodPermitPage + '/steps/owner-details/change-details',
				changeHref:
					applyForFoodPermitPage +
					'/steps/review-and-submit/owner-details/change-details',
			},
		],
	},
	{
		formStateKey: 'stepBusinessDetails',
		label: 'Business details',
		changeLabel: 'Change business details',
		href: applyForFoodPermitPage + '/steps/business-details',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/business-details',
	},
	{
		formStateKey: 'stepBusinessAddress',
		label: 'Business address',
		changeLabel: 'Change business address',
		href: applyForFoodPermitPage + '/steps/business-address',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/business-address',
	},
	{
		formStateKey: 'stepVehicleRegistration',
		label: 'Vehicle registration',
		changeLabel: 'Change vehicle registration',
		href: applyForFoodPermitPage + '/steps/vehicle-registration',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/vehicle-registration',
	},
	{
		formStateKey: 'stepTradingTime',
		label: 'Trading time',
		changeLabel: 'Change trading time',
		href: applyForFoodPermitPage + '/steps/trading-time',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/trading-time',
	},
	{
		formStateKey: 'stepFoodServed',
		label: 'Food served',
		changeLabel: 'Change food served',
		href: applyForFoodPermitPage + '/steps/food-served',
		changeHref: applyForFoodPermitPage + '/steps/review-and-submit/food-served',
	},
	{
		formStateKey: 'stepEmployees',
		label: 'Employees',
		changeLabel: 'Change employees',
		href: applyForFoodPermitPage + '/steps/employees',
		changeHref: applyForFoodPermitPage + '/steps/review-and-submit/employees',
		items: [
			{
				label: 'Add employee',
				href: applyForFoodPermitPage + '/steps/employees/add-employee',
				changeHref:
					applyForFoodPermitPage +
					'/steps/review-and-submit/employees/add-employee',
			},
		],
	},
	{
		formStateKey: 'stepFoodSafetySupervisor',
		label: 'Food safety supervisor',
		changeLabel: 'Change food safety supervisor',
		href: applyForFoodPermitPage + '/steps/food-safety-supervisor',
		changeHref:
			applyForFoodPermitPage +
			'/steps/review-and-submit/food-safety-supervisor',
	},
	{
		formStateKey: 'stepUploadDocuments',
		label: 'Upload documents',
		changeLabel: 'Change documents',
		href: applyForFoodPermitPage + '/steps/documents',
		changeHref: applyForFoodPermitPage + '/steps/review-and-submit/documents',
	},
	{
		formStateKey: 'stepReviewAndSubmit',
		label: 'Review and submit',
		changeLabel: 'Change review and submit', // Not used but it simplifies the type and makes the submit pages more robust
		href: applyForFoodPermitPage + '/steps/review-and-submit',
		changeHref:
			applyForFoodPermitPage + '/steps/review-and-submit/review-and-submit',
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
