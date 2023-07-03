import { tokens, useId, useWindowSize } from '../core';

/**
 * Generates the ID of the tabs container component
 */
export function useTabsId() {
	const autoId = useId();
	return `tabs-${autoId}`;
}

/**
 * Generates the IDs of the tab buttons and tab panels
 */
export function useTabIds(tabsId: string, index: number) {
	return {
		tabId: `${tabsId}-tab-${index}`,
		panelId: `${tabsId}-tab-panel-${index}`,
	};
}

/**
 * Gets the orientation of the tabs based on the window size.
 * On mobile tabs are stacked vertically. On desktop, tabs they are stacked horizontally.
 */
export function useTabsOrientation() {
	const { windowWidth } = useWindowSize();
	return (windowWidth ?? 0) > tokens.breakpoint.sm ? 'horizontal' : 'vertical';
}
