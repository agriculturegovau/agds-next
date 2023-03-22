import { tokens, useTernaryState, useWindowSize } from '@ag.ds-next/react/core';

export const authenticatedAppShellHeaderHeight = { xs: '5rem', lg: '6rem' };

/** Used to calculate whether the menu should be shown as a modal */
export function useIsMobile() {
	const { windowWidth } = useWindowSize();

	if (typeof windowWidth === 'undefined') return;

	return windowWidth <= tokens.breakpoint.lg - 1;
}

export function useSidebarMenuState({
	isMobile,
	isFocusMode,
}: {
	isMobile: boolean | undefined;
	isFocusMode: boolean;
}) {
	// Mobile menu should be hidden by default
	const mobileState = useTernaryState(false);

	// Desktop menu should by visible by default, unless in focus mode
	const desktopState = useTernaryState(!isFocusMode);

	return isMobile ? mobileState : desktopState;
}
