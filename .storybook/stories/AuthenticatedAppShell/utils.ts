import { tokens, useWindowSize } from '@ag.ds-next/react/core';

export const authenticatedAppShellHeaderHeight = { xs: '5rem', lg: '6rem' };

/** Used to calculate whether the menu should be shown as a modal */
export function useIsMobile() {
	const { windowWidth } = useWindowSize();

	if (typeof windowWidth === 'undefined') return;

	return windowWidth <= tokens.breakpoint.lg - 1;
}
