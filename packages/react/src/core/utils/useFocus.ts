import { ForwardedRef, useEffect, useRef } from 'react';

export type UseFocusParams<T> = {
	focusOnMount?: boolean;
	focusOnUpdate?: unknown;
	forwardedRef?: ForwardedRef<T>;
};

/**
 * useFocus
 *
 * Optionally takes a React.Ref (or creates a fallback) to be assigned
 * to an element you wish to be focused when an array of values are
 * updated or once when it is mounted.
 *
 * @param focusOnMount - Optionally set focus to occur once on mount.
 * @param focusOnUpdate - Optionally set a value, that when changed, will trigger focus. Note: by leaving this undefined no focusing will occur.
 * @param forwardedRef - Optionally use a forwarded ref. If a ref isn't provided, a fallback ref will be created.
 * @returns React.Ref to be assigned to the element to be focused.
 */

export function useFocus<T extends HTMLElement>({
	focusOnMount,
	focusOnUpdate,
	forwardedRef,
}: UseFocusParams<T> = {}) {
	const fallbackRef = useRef<T>(null);
	const ref = forwardedRef || fallbackRef;

	useEffect(
		() => {
			if (
				(!focusOnUpdate && !focusOnMount) ||
				!('current' in ref) ||
				(Array.isArray(focusOnUpdate) &&
					focusOnUpdate.filter(Boolean).length === 0)
			) {
				return;
			}

			setTimeout(() => {
				ref?.current?.focus?.();
			}, 0);
		},
		// We are allowing a non-literal array of dependencies to enable consumers to trigger focus updates based on a list of their own trigger-values.
		[focusOnUpdate] // eslint-disable-line react-hooks/exhaustive-deps
	);

	return ref;
}
