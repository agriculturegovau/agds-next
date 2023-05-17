import { useEffect, useRef, useState } from 'react';

export function useDebounceValue<T>(value: T, waitMS: number): T {
	const [internalState, setInternalState] = useState<T>(value);
	const storedValue = useRef<T>(value);

	useEffect(() => {
		if (value !== storedValue.current) {
			const t = setTimeout(() => {
				setInternalState(value);
			}, waitMS);
			return () => clearTimeout(t);
		}
	}, [value, waitMS]);

	return internalState;
}
