import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { TaskListItemStatus } from '@ag.ds-next/react/task-list';
import { FormState, defaultFormState } from './FormState';

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
	formState: FormState;
};

const context = createContext<ContextType | undefined>(undefined);

type FormMobileFoodVendorPermitProps = PropsWithChildren<{}>;

export function FormMobileFoodVendorPermit({
	children,
}: FormMobileFoodVendorPermitProps) {
	const [currentTaskIdx, setCurrentTaskIdx] = useState<number>();
	const [recentlyCompletedStepIdx, setRecentlyCompletedStepIdx] =
		useState<number>();
	const [formState, setFormState] = useState(defaultFormState);

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
		formState,
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
