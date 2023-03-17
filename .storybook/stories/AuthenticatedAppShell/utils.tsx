import { tokens, useWindowSize } from '@ag.ds-next/react/core';

export const authenticatedAppShellHeaderHeight = { xs: '5rem', lg: '6rem' };

export const useIsMobile = () => {
	const { windowWidth } = useWindowSize();
	// Whether the menu should be shown as a modal
	const isModal = (windowWidth || 0) <= tokens.breakpoint.lg - 1;
	return isModal;
};
