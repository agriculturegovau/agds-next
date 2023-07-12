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
		tabButtonId: `${tabsId}-tab-button-${index}`,
		panelId: `${tabsId}-tab-panel-${index}`,
	};
}

/**
 * Gets the orientation of the tabs based on the window size.
 * Tabs are stacked vertically on desktop and horizontally on desktop
 */
export function useTabsOrientation() {
	const { windowWidth = 0 } = useWindowSize();
	return windowWidth >= tokens.breakpoint.sm ? 'horizontal' : 'vertical';
}
