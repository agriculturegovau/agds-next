interface GlobalFormTask {
	formStateKey: TaskKey;
	label: string;
	href: string;
	message: string;
}

type TaskKey = 'task1' | 'task2' | 'task3' | 'task4';

export const globalFormTasks: Array<GlobalFormTask> = [
	{
		formStateKey: 'task1',
		label: 'Provide business details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-1',
		message: 'Confirm your business details',
	},
	{
		formStateKey: 'task2',
		label: 'Provide employee details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1',
		message: 'Provide employee names and email addresses',
	},
	{
		formStateKey: 'task3',
		label: 'Upload documents',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-3/step-1',
		message: 'Provide the documents required for your application',
	},
	{
		formStateKey: 'task4',
		label: 'Review and submit',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-4/step-1',
		message: 'Check all details and submit your application',
	},
];
