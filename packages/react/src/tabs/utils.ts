import { useId } from '../core';

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
