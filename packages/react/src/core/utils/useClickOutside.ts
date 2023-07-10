import { RefObject, useEffect } from 'react';

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

			handler(event);
		};

		window.addEventListener('mousedown', listener);

		return () => window.removeEventListener('mousedown', listener);
	}, [refs, handler]);
}
