import { PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { tokens, useTernaryState, useWindowSize } from '../core';
import { AppLayoutContent } from './AppLayoutContent';
import { AppLayoutContext } from './AppLayoutContext';

export type AppLayoutProps = PropsWithChildren<{
	/** When true, the side bar will be collapsed. This should be set to `false` in screens where a user is focusing on a task, such as multi-page forms. */
	isMenuOpen: boolean;
	/** Callback function for when a user opens the desktop menu. */
	openMenu: () => void;
	/** Callback function for when a user closer the desktop menu. */
	closeMenu: () => void;
}>;

export function AppLayout(props: AppLayoutProps) {
	const isMobile = useIsMobile();

	const [isMenuOpen, _showMenu, _hideMenu] = useSidebarMenuState(props);

	const {
		showMenu,
		hideMenu,
		mobileShowMenuButtonRef,
		desktopShowMenuButtonRef,
		hideMenuButtonRef,
	} = useSidebarMenuToggles({
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
				mobileShowMenuButtonRef,
				desktopShowMenuButtonRef,
				hideMenuButtonRef,
			}}
		>
			<AppLayoutContent>{props.children}</AppLayoutContent>
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
	isMenuOpen,
	openMenu,
	closeMenu,
}: AppLayoutProps) {
	const isMobile = useIsMobile();

	// Mobile menu should be hidden by default
	const mobileState = useTernaryState(false);

	// Desktop menu is configurable by consumers
	const desktopState = [isMenuOpen, openMenu, closeMenu] as const;

	return isMobile ? mobileState : desktopState;
}

/**
 * Ensures the the open/close buttons are correctly focused when the menu opens/closes
 */
function useSidebarMenuToggles({
	showMenu: _showMenu,
	hideMenu: _hideMenu,
}: {
	showMenu: () => void;
	hideMenu: () => void;
}) {
	const isMobile = useIsMobile();
	const mobileShowMenuButtonRef = useRef<HTMLButtonElement>(null);
	const desktopShowMenuButtonRef = useRef<HTMLButtonElement>(null);
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
		isMobile
			? mobileShowMenuButtonRef.current?.focus()
			: desktopShowMenuButtonRef.current?.focus();
		setShouldFocusShowMenuButton(false);
	}, [shouldFocusShowMenuButton, isMobile]);

	return {
		mobileShowMenuButtonRef,
		desktopShowMenuButtonRef,
		hideMenuButtonRef,
		showMenu,
		hideMenu,
	};
}
