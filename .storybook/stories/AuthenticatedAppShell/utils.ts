import { tokens, useTernaryState, useWindowSize } from '@ag.ds-next/react/core';
import { useEffect, useRef } from 'react';

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

export function useManageSidebarTriggerFocus({
	isMenuOpen,
	isMobile,
}: {
	isMenuOpen: boolean;
	isMobile: boolean | undefined;
}) {
	const showMenuButtonRef = useRef<HTMLButtonElement>(null);
	const hideMenuButtonRef = useRef<HTMLButtonElement>(null);

	// This effect ensures the correct trigger is first when the menu opens and closes
	// This should not happen on first render — only when the state changes
	const isFirstRenderRef = useRef(true);
	const isMobileRef = useRef(isMobile);
	useEffect(() => {
		// Prevents the mobile menu trigger from focusing on first render
		if (typeof isMobileRef.current === 'undefined') return;
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
