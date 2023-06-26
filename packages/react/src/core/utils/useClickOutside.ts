import { RefObject, useEffect } from 'react';

export function useClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>,
	handler: (event: MouseEvent) => void
) {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			const el = ref?.current;

			// Do nothing if clicking ref's element or descendent elements
			if (!el || el.contains(event.target as Node)) {
				return;
			}

			handler(event);
		};

		window.addEventListener('mousedown', listener);

		return () => window.removeEventListener('mousedown', listener);
	}, [handler, ref]);
}
