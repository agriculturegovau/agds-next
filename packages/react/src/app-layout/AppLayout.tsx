import { PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { tokens, useTernaryState, useWindowSize } from '../core';
import { AppLayoutContext } from './AppLayoutContext';

export type AppLayoutProps = PropsWithChildren<{
	/** When true, the side bar will be collapsed by default. This should be used in screens where a user is focusing on a task, such as multi-page forms. */
	focusMode?: boolean;
}>;

export function AppLayout({ children, focusMode = false }: AppLayoutProps) {
	const isMobile = useIsMobile();

	const [isMenuOpen, _showMenu, _hideMenu] = useSidebarMenuState({
		focusMode,
		isMobile,
	});

	const { showMenu, showMenuButtonRef, hideMenu, hideMenuButtonRef } =
		useSidebarMenuToggles({
			showMenu: _showMenu,
			hideMenu: _hideMenu,
		});

	return (
		<AppLayoutContext.Provider
			value={{
				isMobile,
				isMenuOpen,
				showMenu,
				hideMenu,
				showMenuButtonRef,
				hideMenuButtonRef,
			}}
		>
			{children}
		</AppLayoutContext.Provider>
	);
}

/**
 * Used to calculate whether the menu should be shown as a modal
 */
function useIsMobile() {
	const { windowWidth } = useWindowSize();
	if (typeof windowWidth === 'undefined') return;
	return windowWidth <= tokens.breakpoint.lg - 1;
}

/**
 * State to manage the collapsed state of the sidebar menu
 */
function useSidebarMenuState({
	isMobile,
	focusMode,
}: {
	isMobile: boolean | undefined;
	focusMode: boolean;
}) {
	// Mobile menu should be hidden by default
	const mobileState = useTernaryState(false);

	// Desktop menu should by visible by default, unless in focus mode
	const desktopState = useTernaryState(!focusMode);

	// This effect syncs the `focusMode` prop with this state
	// Note: Focus mode has no effect on mobile devices
	const openDesktopMenu = desktopState[1];
	const closeDesktopMenu = desktopState[2];
	useEffect(() => {
		if (isMobile) return;
		focusMode ? closeDesktopMenu() : openDesktopMenu();
	}, [isMobile, focusMode, openDesktopMenu, closeDesktopMenu]);

	return isMobile ? mobileState : desktopState;
}

/**
 * Ensures the the open/close buttons are focused when the menu opens/closes
 */
function useSidebarMenuToggles({
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
