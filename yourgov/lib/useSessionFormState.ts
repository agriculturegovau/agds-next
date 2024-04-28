import { useCallback, useEffect, useRef, useState } from 'react';

type SetStateValue<TValue> = TValue | ((prevState: TValue) => TValue);

/**
 * Node does not support sessionStorage.
 * This provides an easy way to use sessionStorage without getting any errors in Node.
 */
export const safeSessionStorage =
	'sessionStorage' in globalThis ? globalThis.sessionStorage : undefined;

export function useSessionFormState<FormState>(
	key: string,
	initialValue: Partial<FormState>
) {
	const [hasSynced, setHasSynced] = useState(false);
	const [localFormState, setLocalFormState] = useState(initialValue);

	useEffect(() => {
		if (!safeSessionStorage) return;
		const value = safeSessionStorage.getItem(key);
		const parsedValue = value ? (JSON.parse(value) as FormState) : null;
		if (parsedValue) setLocalFormState(parsedValue);
		setHasSynced(true);
	}, [initialValue, key]);

	const localFormStateRef = useRef(localFormState);
	localFormStateRef.current = localFormState;

	const setState: (value: SetStateValue<Partial<FormState>>) => void =
		useCallback(
			(value) => {
				function writeStorage(key: string, value: Partial<FormState>) {
					safeSessionStorage?.setItem(key, JSON.stringify(value));
					setLocalFormState(value);
				}
				value instanceof Function
					? writeStorage(key, value(localFormStateRef.current))
					: writeStorage(key, value);
			},
			[key]
		);

	return [hasSynced, localFormState, setState] as const;
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
