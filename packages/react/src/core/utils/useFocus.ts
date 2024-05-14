import { LegacyRef, MutableRefObject, useEffect, useRef } from 'react';
import { mergeRefs } from './mergeRefs';

/**
 * useFocus
 *
 * Optionally takes a React.Ref (or creates a fallback) to be assigned
 * to an element you wish to be focused when an array of values are
 * updated or once when it is mounted.
 *
 * @param disabled - Optionally disable the focusing.
 * @param focusOnUpdate - Optionally define an array of values, that when changed, will trigger focus. Note: by leaving this undefined focus will be called once on mount.
 * @param forwardedRef - Optionally use a forwarded ref. If a ref isn't provided, a fallback ref will be created.
 * @returns React.Ref to be assigned to the element to be focused.
 */

export function useFocus<T extends HTMLElement>({
	disabled,
	focusOnUpdate = [],
	forwardedRef,
}: {
	disabled?: boolean;
	focusOnUpdate?: ReadonlyArray<unknown>;
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
		// We are allowing a non-literal array of dependencies to enable consumers to trigger focus updates based on a list of their own trigger-values.
	}, [disabled, focusOnUpdate]); // eslint-disable-line react-hooks/exhaustive-deps

	return ref;
}
