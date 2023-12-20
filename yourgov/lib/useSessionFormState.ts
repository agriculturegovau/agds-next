import { useCallback, useEffect, useRef, useState } from 'react';

type SetStateValue<TValue> = TValue | ((prevState: TValue) => TValue);

export function useSessionFormState<FormState>(
	key: string,
	initialValue: Partial<FormState>
) {
	const [hasSynced, setHasSynced] = useState(false);
	const [localFormState, setLocalFormState] = useState(initialValue);

	useEffect(() => {
		if (typeof sessionStorage === undefined) return;
		const value = sessionStorage.getItem(key);
		const parsedValue = value ? (JSON.parse(value) as FormState) : null;
		if (parsedValue) setLocalFormState(parsedValue);
		setHasSynced(true);
	}, [initialValue, key]);

	const localFormStateRef = useRef(localFormState);
	localFormStateRef.current = localFormState;

	const setState = useCallback(
		(value: SetStateValue<Partial<FormState>>) => {
			function writeStorage(key: string, value: Partial<FormState>) {
				sessionStorage.setItem(key, JSON.stringify(value));
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
		if (typeof sessionStorage === undefined) return;
		const value = sessionStorage.getItem(key);
		setHasStartedForm(Boolean(value));
	}, [key]);

	return hasStartedForm;
}
