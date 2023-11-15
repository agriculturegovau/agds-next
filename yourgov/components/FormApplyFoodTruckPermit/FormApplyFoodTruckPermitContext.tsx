import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { TaskListItemStatus } from '@ag.ds-next/react/task-list';
import {
	FormState as Task1FormState,
	formSchema as task1FormSchema,
} from './FormBusinessDetails/FormBusinessDetails';
import {
	FormState as Task2FormState,
	// formSchema as task2FormSchema,
} from './FormEmployeeDetails/FormEmployeeDetails';

type ContextType = {
	title: string;
	homePageUrl: string;
	/** The task form state. */
	task1FormState: FormState[0];
	// task2FormState: FormState[1];
	/** Function to be called to start a task. Ensures the statuses on the home page task list is updated correctly. */
	startTask: (taskNumber: number) => void;
	/** Function to get the status of a task. */
	getTaskStatus: (taskIndex: number) => TaskListItemStatus;
	/** Function to be called at the end of task 1 (personal details). */
	submitTask1: (taskFormState: TaskFormState) => void;
	/** Function to be called at the end of task 2 (pet details). */
	submitTask2: (taskFormState: TaskFormState) => void;
};

const context = createContext<ContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TaskFormState = Record<string, any>;

type FormState = {
	[0]: Task1FormState & { completed: boolean };
	[1]: Task2FormState & { completed: boolean };
};

const defaultFormState: FormState = {
	// Task 1
	0: {
		0: {
			firstName: 'Alex',
			lastName: 'Citizen',
			email: 'alex.citizen@gmail.com',
			completed: false,
		},
		completed: false,
	},
	// Task 2
	1: {
		0: {
			employees: [
				{
					givenName: 'Homer',
					familyName: 'Simpson',
					email: 'homer.simpson@gmail.com',
				},
				{
					givenName: 'Lenny',
					familyName: 'Leonardson',
					email: 'lenny.leonardson@gmail.com',
				},
				{
					givenName: 'Waylon',
					familyName: 'Smithers',
					email: 'walon.smithers@gmail.com',
				},
			],
			completed: false,
		},
		completed: false,
	},
};

export const FormApplyFoodTruckPermitContext = ({
	children,
}: {
	children: ReactNode;
}) => {
	const router = useRouter();
	const [currentTaskIdx, setCurrentTaskIdx] = useState<number>();
	const [recentlyCompletedStepIdx, setRecentlyCompletedStepIdx] =
		useState<number>();
	const [formState, setFormState] = useState<FormState>(defaultFormState);

	const params = useSearchParams();
	const title = `Apply for a ${params.get('type')} permit`;

	const homePageUrl = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form?type=${params.get(
		'type'
	)}`;

	const completeForm = useCallback(() => {
		// Show the success message
		router.push('/services/registrations?registrationId=PET123456');
		// "Reset" the form
		setCurrentTaskIdx(undefined);
		setRecentlyCompletedStepIdx(undefined);
		setFormState(defaultFormState);
	}, [router]);

	const completeTask = useCallback(
		(taskNumber: number) => {
			router.push(homePageUrl);
			setRecentlyCompletedStepIdx(taskNumber - 1);
		},
		[homePageUrl, router]
	);

	const submitTask1 = useCallback(
		(taskFormState: TaskFormState) => {
			setCurrentTaskIdx(undefined);
			setFormState((current) => ({
				...current,
				[0]: { ...taskFormState, completed: true },
			}));
			completeTask(1);
		},
		[completeTask]
	);

	const submitTask2 = useCallback(
		(taskFormState: TaskFormState) => {
			setCurrentTaskIdx(undefined);
			setFormState((current) => ({
				...current,
				[1]: { ...taskFormState, completed: true },
			}));
			const hasAlreadyCompletedTask1 = task1FormSchema.isValidSync(
				formState[0]
			);
			hasAlreadyCompletedTask1 ? completeForm() : completeTask(2);
		},
		[formState, completeForm, completeTask]
	);

	const getTaskStatus = useCallback(
		(idx: number): TaskListItemStatus => {
			if (idx === currentTaskIdx) return 'doing';
			if (
				idx in formState &&
				formState[idx as keyof typeof formState].completed
			) {
				if (idx === recentlyCompletedStepIdx) return 'doneRecently';
				return 'done';
			}
			return 'todo';
		},
		[currentTaskIdx, recentlyCompletedStepIdx, formState]
	);

	const startTask = useCallback((taskNumber: number) => {
		setCurrentTaskIdx(taskNumber - 1);
		setRecentlyCompletedStepIdx(undefined);
	}, []);

	const contextValue = {
		title,
		homePageUrl,
		startTask,
		getTaskStatus,
		submitTask1,
		submitTask2,
		task1FormState: formState[0],
		task2FormState: formState[1],
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export function useFormApplyFoodTruckPermit() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
