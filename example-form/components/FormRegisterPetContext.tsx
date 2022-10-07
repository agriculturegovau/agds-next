import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { ProgressIndicatorItemStatus } from '@ag.ds-next/progress-indicator';
import {
	FormState as Task1FormState,
	formSchema as task1FormSchema,
} from './FormRegisterPetPersonalDetails/FormRegisterPetPersonalDetails';
import {
	FormState as Task2FormState,
	formSchema as task2FormSchema,
} from './FormRegisterPetDetails/FormRegisterPetDetails';

type ContextType = {
	/** The form state of the current task. */
	taskFormState: TaskFormState;
	/** Function to be called to start a task */
	goToTask: (taskIdx: number) => void;
	/** Function to get the status of a task. */
	getTaskStatus: (taskIndex: number) => ProgressIndicatorItemStatus;
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

const defaultFormState = {
	// Task 1
	0: {
		0: {
			firstName: 'Alex',
			lastName: 'Citizen',
			email: 'alex.citizen@gmail.com',
			dob: new Date('1999-09-09'),
			completed: false,
		},
		1: {
			streetAddress: '21 East Wallaby Way',
			suburbTownCity: 'Petsville',
			state: 'nsw',
			postcode: '2123',
			completed: false,
		},
		completed: false,
	},
	// Task 2
	1: {
		completed: false,
	},
};

export const FormRegisterPetContext = ({
	children,
}: {
	children: ReactNode;
}) => {
	const router = useRouter();
	const [currentTaskIdx, setCurrentTaskIdx] = useState<number>();
	const [formState, setFormState] = useState<FormState>(defaultFormState);

	const completeForm = useCallback(() => {
		// Show the success message
		router.push('/services/registrations?registrationId=PET123456');
		// "Reset" the form
		setCurrentTaskIdx(undefined);
		setFormState(defaultFormState);
	}, [router]);

	const submitTask1 = useCallback(
		(taskFormState: TaskFormState) => {
			setCurrentTaskIdx(1);
			setFormState((current) => ({
				...current,
				[0]: { ...taskFormState, completed: true },
			}));
			const hasCompletedTask2 = task2FormSchema.isValidSync(formState[1]);
			hasCompletedTask2
				? completeForm()
				: router.push('/services/registrations/pet/task-2');
		},
		[formState, completeForm, router]
	);

	const submitTask2 = useCallback(
		(taskFormState: TaskFormState) => {
			setCurrentTaskIdx(0);
			setFormState((current) => ({
				...current,
				[1]: { ...taskFormState, completed: true },
			}));
			const hasAlreadyCompletedTask1 = task1FormSchema.isValidSync(
				formState[0]
			);
			hasAlreadyCompletedTask1
				? completeForm()
				: router.push('/services/registrations/pet/task-1');
		},
		[formState, completeForm, router]
	);

	const getTaskStatus = useCallback(
		(idx: number) => {
			if (idx === currentTaskIdx) return 'doing';
			if (
				idx in formState &&
				formState[idx as keyof typeof formState].completed
			) {
				return 'done';
			}
			return 'todo';
		},
		[currentTaskIdx, formState]
	);

	const goToTask = useCallback(
		(taskIdx: number) => {
			setCurrentTaskIdx(taskIdx);
			router.push(`/services/registrations/pet/task-${taskIdx + 1}`);
		},
		[router]
	);

	const contextValue = {
		goToTask,
		getTaskStatus,
		submitTask1,
		submitTask2,
		taskFormState:
			(typeof currentTaskIdx === 'number' &&
				currentTaskIdx in formState &&
				formState[currentTaskIdx as keyof typeof formState]) ||
			{},
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const useFormRegisterPet = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
