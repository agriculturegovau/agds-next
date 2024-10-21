import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FormState as TaskFormState } from '../components/FormMobileFoodVendorPermit/task/FormState';
import { FormState } from '../components/FormMobileFoodVendorPermit/FormState';
import { DeepPartial } from './types';

type SetStateValue<TValue> = TValue | ((prevState: TValue) => TValue);

/**
 * Node does not support sessionStorage.
 * This provides an easy way to use sessionStorage without getting any errors in Node.
 */
export const safeSessionStorage =
	'sessionStorage' in globalThis ? globalThis.sessionStorage : undefined;

/**
 * This hook sets, stores, and synchronises all state between the session
 * storage and the global React state.
 *
 * TODO: single responsibility
 */
export function useSessionFormState<GlobalState extends DeepPartial<FormState>>(
	key: string,
	initialValue: Partial<GlobalState>
) {
	const [hasSynced, setHasSynced] = useState(false);
	const [globalState, setGlobalState] = useState(initialValue);

	useEffect(() => {
		if (!safeSessionStorage) return;
		const value = safeSessionStorage.getItem(key);
		const parsedValue = value ? (JSON.parse(value) as GlobalState) : null;
		if (parsedValue) setGlobalState(parsedValue);
		setHasSynced(true);
	}, [initialValue, key]);

	const globalStateRef = useRef(globalState);
	globalStateRef.current = globalState;

	// TODO: migrate this to a function called `setGlobalState` that calls a function `syncGlobalStateAndSessionStorage` rather than doing everything in the 'session storage manager' hook
	const setAndSyncGlobalStateAndSessionStorage = useCallback(
		(value: SetStateValue<Partial<GlobalState>>) => {
			function writeStorage(key: string, value: Partial<GlobalState>) {
				safeSessionStorage?.setItem(key, JSON.stringify(value));
				setGlobalState(value);
			}
			value instanceof Function
				? writeStorage(key, value(globalStateRef.current))
				: writeStorage(key, value);
		},
		[key]
	);

	const stateGettersAndSettersPerStep = useMemo(
		() => ({
			step1SetState: (newState: Partial<TaskFormState['step1']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => {
					return {
						...prevState,
						task: {
							...prevState.task,
							step1: {
								...prevState.task?.step1, // User details, e.g. name and email are saved against step 1 but not always included during form submisssions for step 1 - TODO: either migrate this data to hidden form fields in step 1 or include it separately in the confirm and submit page
								...newState,
							},
						},
					};
				});
			},
			step2SetState: (newState: Partial<TaskFormState['step2']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step2: newState,
					},
				}));
			},
			step3SetState: (newState: Partial<TaskFormState['step3']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step3: newState,
					},
				}));
			},
			step4SetState: (newState: Partial<TaskFormState['step4']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step4: newState,
					},
				}));
			},
			step5SetState: (newState: Partial<TaskFormState['step5']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step5: newState,
					},
				}));
			},
			step6SetState: (newState: Partial<TaskFormState['step6']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step6: newState,
					},
				}));
			},
			step7GetState: () => {
				return globalState.task?.step7;
			},
			step7SetState: (newState: Partial<TaskFormState['step7']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step7: newState,
					},
				}));
			},
			step8SetState: (newState: Partial<TaskFormState['step8']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step8: newState,
					},
				}));
			},
			step9SetState: (newState: Partial<TaskFormState['step9']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					task: {
						...prevState.task,
						step9: newState,
					},
				}));
			},
			// This is the review and submit step
			step10SetState: (newState: Partial<TaskFormState['step10']>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					completed: newState.completed, // When this step is complete, the whole process is complete
					task: {
						...prevState.task,
						step10: newState,
					},
				}));
			},
		}),
		[globalState, setAndSyncGlobalStateAndSessionStorage]
	);

	return {
		hasSynced,
		formState: globalState,
		setFormState: setAndSyncGlobalStateAndSessionStorage,
		...stateGettersAndSettersPerStep,
	} as const;
}

export function useHasStartedSessionForm(key: string) {
	const [hasStartedForm, setHasStartedForm] = useState(false);

	useEffect(() => {
		if (!safeSessionStorage) return;
		const value = safeSessionStorage.getItem(key);
		setHasStartedForm(Boolean(value));
	}, [key]);

	return hasStartedForm;
}
