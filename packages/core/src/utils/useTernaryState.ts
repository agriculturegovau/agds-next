import { useCallback, useState } from 'react';

/**
 * useTernaryState
 *
 * Useful for situations where you have separate buttons to open / close
 * or expand / collapse an element. This
 *
 * @param initialValue
 * @returns
 */

type SetTrue = () => void;
type SetFalse = () => void;
export function useTernaryState(
	initialValue: boolean | (() => boolean)
): [boolean, SetTrue, SetFalse] {
	const [state, setState] = useState(initialValue);
	const setTrue = useCallback(function setTrue() {
		return setState(true);
	}, []);
	const setFalse = useCallback(function setTrue() {
		return setState(false);
	}, []);
	return [state, setTrue, setFalse];
}
