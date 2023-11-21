import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { TaskListItemStatus } from '@ag.ds-next/react/task-list';

type ContextType = {
	formTitle: string;
	typeSearchParm: string;
	homePageUrl: string;
	/** Function to be called to start a task. Ensures the statuses on the home page task list is updated correctly. */
	startTask: (taskNumber: number) => void;
	/** Function to get the status of a task. */
	getTaskStatus: (taskIndex: number) => TaskListItemStatus;

	isSideFlow: boolean;
	setIsSideFlow: (isSideFlow: boolean) => void;
};

const context = createContext<ContextType | undefined>(undefined);

type FormState = {
	// Task 1 form state
	[1]: Record<string, unknown> & { completed: boolean };
	// Task 2 form state
	[2]: Record<string, unknown> & { completed: boolean };
	// Task 3 form state
	[3]: Record<string, unknown> & { completed: boolean };
	// Task 4 form state
	[4]: Record<string, unknown> & { completed: boolean };
};

const defaultFormState: FormState = {
	1: { completed: false },
	2: { completed: false },
	3: { completed: false },
	4: { completed: false },
};

type FormMobileFoodVendorPermitProps = PropsWithChildren<{}>;

export function FormMobileFoodVendorPermit({
	children,
}: FormMobileFoodVendorPermitProps) {
	const [currentTaskIdx, setCurrentTaskIdx] = useState<number>();
	const [recentlyCompletedStepIdx, setRecentlyCompletedStepIdx] =
		useState<number>();
	const [formState, setFormState] = useState<FormState>(defaultFormState);

	const searchParams = useSearchParams();
	const typeSearchParm = searchParams.get('type') ?? '';

	const formTitle = `Apply for a ${typeSearchParm} permit`;
	const homePageUrl = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form?type=${typeSearchParm}`;

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

	const [isSideFlow, setIsSideFlow] = useState(false);

	const contextValue = {
		formTitle,
		typeSearchParm,
		homePageUrl,
		startTask,
		getTaskStatus,
		isSideFlow,
		setIsSideFlow,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useFormMobileFoodVendorPermit() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
