import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { TaskListItemStatus } from '@ag.ds-next/react/task-list';
import { DeepPartial } from '../../lib/types';
import { useSessionFormState } from '../../lib/useSessionFormState';
import { FormState, defaultFormState, TaskKey } from './FormState';

type ContextType = {
	formTitle: string;
	typeSearchParm: string;
	homePageUrl: string;
	// Task status
	getTaskStatus: (key: TaskKey) => TaskListItemStatus;
	startTask: (key: TaskKey) => void;
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
			{
				if (formState[taskKey]?.completed) return 'doneRecently';
				if (formState[taskKey]?.started) return 'doing';
				return 'todo';
			}
		},
		[formState]
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
		setFormState(defaultFormState as DeepPartial<FormState>);
	}, [homePageUrl, router, setFormState]);

	const [isSavingBeforeExiting, setIsSavingBeforeExiting] = useState(false);

	const saveAndExit = useCallback(() => {
		setIsSavingBeforeExiting(true);
		setTimeout(() => {
			setIsSavingBeforeExiting(false);
			router.push(homePageUrl);
		}, 1500);
	}, [homePageUrl, router]);

	if (!hasSynced) return null;

	const contextValue: ContextType = {
		formTitle,
		typeSearchParm,
		homePageUrl,
		// task status
		getTaskStatus,
		startTask,
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
