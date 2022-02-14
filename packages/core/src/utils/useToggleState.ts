import { useState, useCallback } from 'react';
/**
 * useToggleState
 *
 *
 * @param initialValue
 * @returns
 */

type ValueTypes = boolean | string;
type Toggle = () => void;
export function useToggleState<T extends ValueTypes>(
	initialValue: T | (() => T),
	alternateValue: T
): [T, Toggle] {
	const [state, setState] = useState(initialValue);

	const toggle = useCallback(
		function toggle() {
			const __orig =
				typeof initialValue === 'function' ? initialValue() : initialValue;
			setState((s) => (s === __orig ? alternateValue : __orig));
		},
		[initialValue, alternateValue]
	);

	return [state, toggle];
}
