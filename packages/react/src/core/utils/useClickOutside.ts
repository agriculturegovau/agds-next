import { RefObject, useEffect } from 'react';

/**
 * Utility hook for detecting when a user has clicked outside of a element
 */
export function useClickOutside(
	refs: RefObject<HTMLElement>[],
	handler: (event: MouseEvent) => void
) {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			const anyRefContainsTarget = refs.some((ref) => {
				const el = ref?.current;
				return el && el.contains(event.target as Node);
			});

			// Do nothing if clicking any of ref elements or descendent elements
			if (anyRefContainsTarget) return;

			event.preventDefault();
			handler(event);
		};

		window.addEventListener('mousedown', listener);

		return () => window.removeEventListener('mousedown', listener);
	}, [refs, handler]);
}
