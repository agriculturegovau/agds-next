import { useRouter } from 'next/router';
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react';
import { DeepPartial } from '../../lib/types';
import { useSessionFormState } from '../../lib/useSessionFormState';
import { defaultFormState, FormState, TaskKey } from './FormState';
import { managePermitsPage } from './utils';

type ContextType = {
	formTitle: string;
	managePermitsPage: string;
	// Task status
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
		defaultFormState
	);

	const formTitle = `Apply for a ${formState.type} permit`;

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
		router.push(managePermitsPage);
	}, [router]);

	const [isSavingBeforeExiting, setIsSavingBeforeExiting] = useState(false);

	const saveAndExit = useCallback(() => {
		setIsSavingBeforeExiting(true);
		setTimeout(() => {
			setIsSavingBeforeExiting(false);
			router.push(managePermitsPage);
		}, 1500);
	}, [router]);

	// Prevent the form rendering until the users progress has been loaded from session storage
	if (!hasSynced) return null;

	const contextValue: ContextType = {
		formTitle,
		managePermitsPage,
		// task status
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
