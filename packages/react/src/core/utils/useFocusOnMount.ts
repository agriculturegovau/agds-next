import { LegacyRef, MutableRefObject, useEffect, useRef } from 'react';
import { mergeRefs } from './mergeRefs';

/**
 * useFocusOnMount
 *
 * Optionally takes a React.Ref (or creates a fallback) to be assigned
 * to an element you wish to be focused when it is mounted.
 *
 * @param forwardedRef
 * @returns React.Ref to be assigned to the element to be focused.
 */

export function useFocusOnMount<T extends HTMLElement>({
	disabled,
	forwardedRef,
}: {
	disabled?: boolean;
	forwardedRef?: MutableRefObject<T> | LegacyRef<T>;
} = {}) {
	const fallbackRef = useRef<T>(null);
	const ref = forwardedRef
		? mergeRefs<T>([fallbackRef, forwardedRef])
		: fallbackRef;

	useEffect(() => {
		if (disabled || !('current' in ref)) {
			return;
		}

		ref?.current?.focus?.();

		// We only want to focus once on mount, so we keep the dependency array empty.
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return ref;
}
