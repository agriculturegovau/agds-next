import { useState, useEffect } from 'react';

export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		if (!window.matchMedia) {
			setPrefersReducedMotion(false);
			return;
		}

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		setPrefersReducedMotion(mediaQuery.matches);

		const listener = (event: MediaQueryListEvent) =>
			setPrefersReducedMotion(event.matches);

		mediaQuery.addEventListener('change', listener);

		return () => mediaQuery.removeEventListener('change', listener);
	}, []);

	return prefersReducedMotion;
}
