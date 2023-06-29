import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { useTabPanelsContext } from './TabPanelsContext';
import { useTabsContext } from './TabsContext';
import { useTabIds } from './utils';

export type TabPanelProps = PropsWithChildren<{}>;

export function TabPanel({ children }: TabPanelProps) {
	const { tabsId, activeIndex } = useTabsContext();
	const { panelIndex } = useTabPanelsContext();
	const { tabId, panelId } = useTabIds(tabsId, panelIndex);

	const isSelected = activeIndex === panelIndex;

	return (
		<Box
			id={panelId}
			role="tabpanel"
			tabIndex={isSelected ? 0 : -1}
			aria-labelledby={tabId}
			display={isSelected ? undefined : 'none'}
			padding={1}
			rounded
			border
			focus
		>
			{children}
		</Box>
	);
}
