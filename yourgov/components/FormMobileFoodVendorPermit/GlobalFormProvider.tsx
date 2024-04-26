import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react';
import { TaskListItemStatus } from '@ag.ds-next/react/task-list';
import { DeepPartial } from '../../lib/types';
import { useSessionFormState } from '../../lib/useSessionFormState';
import { defaultFormState, FormState, TaskKey } from './FormState';
import { getPrevTaskKey } from './utils';

// It is a pain to have to go through the entire form flow to demo things on specific pages
// Set this to true to allow skipping past steps and tasks
const ENABLE_STEP_SKIPPING = false;

type ContextType = {
	formTitle: string;
	typeSearchParm: string;
	homePageUrl: string;
	// Task status
	getTaskStatus: (key: TaskKey) => TaskListItemStatus;
	startTask: (key: TaskKey) => void;
	checkIsTaskAvailable: (key: TaskKey) => boolean;
	// Form state
	formState: DeepPartial<FormState>;
	setFormState: (formState: DeepPartial<FormState>) => void;
	// Is submitting step
	isSubmittingStep: boolean;
	setIsSubmittingStep: (value: boolean) => void;
	// Actions
	cancel: () => void;
	saveAndExit: () => void;
	isSavingBeforeExiting: boolean;
};

const context = createContext<ContextType | undefined>(undefined);

type FormMobileFoodVendorPermitProps = PropsWithChildren<{}>;

export function GlobalFormProvider({
	children,
}: FormMobileFoodVendorPermitProps) {
	const router = useRouter();

	const [hasSynced, formState, setFormState] = useSessionFormState(
		'FormMobileFoodVendorPermit',
		defaultFormState as DeepPartial<FormState>
	);

	const searchParams = useSearchParams();
	const typeSearchParm = searchParams.get('type') ?? '';

	const formTitle = `Apply for a ${typeSearchParm} permit`;
	const homePageUrl = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form?type=${typeSearchParm}`;

	const getTaskStatus = useCallback(
		(taskKey: TaskKey): TaskListItemStatus => {
			const prevTaskKey = getPrevTaskKey(taskKey);
			const isPrevTaskComplete =
				taskKey === 'task1' || Boolean(formState[prevTaskKey]?.completed);
			const isDoneRecently =
				taskKey === `task${router.query.taskHighlight}` &&
				formState[taskKey]?.completed;

			if (!isPrevTaskComplete && taskKey !== 'task2') return 'blocked';
			if (isDoneRecently) return 'doneRecently';
			if (formState[taskKey]?.completed) return 'done';
			if (formState[taskKey]?.started) return 'doing';
			return 'todo';
		},
		[formState, router.query.taskHighlight]
	);

	const checkIsTaskAvailable = useCallback(
		(taskKey: TaskKey) => {
			return getTaskStatus(taskKey) !== 'blocked' || ENABLE_STEP_SKIPPING;
		},
		[getTaskStatus]
	);

	const startTask = useCallback(
		(taskKey: TaskKey) => {
			setFormState((formState) => ({
				...formState,
				[taskKey]: { ...formState[taskKey], started: true },
			}));
		},
		[setFormState]
	);

	const [isSubmittingStep, setIsSubmittingStep] = useState(false);

	const cancel = useCallback(() => {
		router.push(homePageUrl);
	}, [homePageUrl, router]);

	const [isSavingBeforeExiting, setIsSavingBeforeExiting] = useState(false);

	const saveAndExit = useCallback(() => {
		setIsSavingBeforeExiting(true);
		setTimeout(() => {
			setIsSavingBeforeExiting(false);
			router.push(homePageUrl);
		}, 1500);
	}, [homePageUrl, router]);

	// Prevent the form rendering until the users progress has been loaded from session storage
	if (!hasSynced) return null;

	const contextValue: ContextType = {
		formTitle,
		typeSearchParm,
		homePageUrl,
		// task status
		getTaskStatus,
		startTask,
		checkIsTaskAvailable,
		// form state
		formState,
		setFormState,
		// submitting step
		isSubmittingStep,
		setIsSubmittingStep,
		// form actions
		cancel,
		saveAndExit,
		isSavingBeforeExiting,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useGlobalForm() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
