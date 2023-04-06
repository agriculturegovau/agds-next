import { useCallback, useEffect, useRef, useState } from 'react';
import { tokens, useTernaryState, useWindowSize } from '@ag.ds-next/react/core';

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
export function useSidebarMenuToggles({
	showMenu: _showMenu,
	hideMenu: _hideMenu,
}: {
	showMenu: () => void;
	hideMenu: () => void;
}) {
	const showMenuButtonRef = useRef<HTMLButtonElement>(null);
	const hideMenuButtonRef = useRef<HTMLButtonElement>(null);

	const [shouldFocusShowMenuButton, setShouldFocusShowMenuButton] =
		useState(false);
	const [shouldFocusHideMenuButton, setShouldFocusHideMenuButton] =
		useState(false);

	// When the menu opens, focus the hide menu button
	const showMenu = useCallback(() => {
		_showMenu();
		setShouldFocusHideMenuButton(true);
	}, [_showMenu]);

	// When the menu closes, focus the show menu button
	const hideMenu = useCallback(() => {
		_hideMenu();
		setShouldFocusShowMenuButton(true);
	}, [_hideMenu]);

	useEffect(() => {
		if (!shouldFocusHideMenuButton) return;
		hideMenuButtonRef.current?.focus();
		setShouldFocusHideMenuButton(false);
	}, [shouldFocusHideMenuButton]);

	useEffect(() => {
		if (!shouldFocusShowMenuButton) return;
		showMenuButtonRef.current?.focus();
		setShouldFocusShowMenuButton(false);
	}, [shouldFocusShowMenuButton]);

	return { showMenuButtonRef, hideMenuButtonRef, showMenu, hideMenu };
}

// Ported from main-nav/utils
export function findBestMatch(links: { href: string }[], activePath: string) {
	let bestMatch = '';

	for (const link of links) {
		if (link.href === activePath) return link.href;
		if (
			activePath?.startsWith(link.href) &&
			link.href !== '/' &&
			link.href.length > bestMatch.length
		) {
			bestMatch = link.href;
		}
	}

	return bestMatch;
}
