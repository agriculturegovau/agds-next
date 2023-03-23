import { tokens, useTernaryState, useWindowSize } from '@ag.ds-next/react/core';
import { useEffect, useRef } from 'react';

export const authenticatedAppShellHeaderHeight = { xs: '5rem', lg: '6rem' };

/**
 * Used to calculate whether the menu should be shown as a modal
 */
export function useIsMobile() {
	const { windowWidth } = useWindowSize();

	if (typeof windowWidth === 'undefined') return;

	return windowWidth <= tokens.breakpoint.lg - 1;
}

/**
 * State to manage the collapsed state of the sidebar menu
 */
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

/**
 * Ensures the the open/close buttons are focused when the menu opens/closes
 */
export function useManageSidebarTriggerFocus({
	isMenuOpen,
	isMobile,
}: {
	isMenuOpen: boolean;
	isMobile: boolean | undefined;
}) {
	const showMenuButtonRef = useRef<HTMLButtonElement>(null);
	const hideMenuButtonRef = useRef<HTMLButtonElement>(null);

	const isFirstRenderRef = useRef(true);
	const isMobileRef = useRef(isMobile);
	useEffect(() => {
		// Prevents the mobile menu trigger from focusing on first render
		if (typeof isMobileRef.current === 'undefined') return;
		//This should not happen on first render — only when the state changes
		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			return;
		}
		isMenuOpen
			? hideMenuButtonRef.current?.focus()
			: showMenuButtonRef.current?.focus();
	}, [isMobile, isMenuOpen]);

	return { showMenuButtonRef, hideMenuButtonRef };
}
