// TOOD: Remove entirely? Or keep for easier future-proofing?
export const globalFormTasks = [
	{
		formStateKey: 'task',
		// TODO: We need to remove this and make the different steps specify it
		label: 'Provide business details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/task/step-1',
		// TODO: Remove. The remove step step should handle it
		message: 'Confirm your business details',
	},
] as const;
