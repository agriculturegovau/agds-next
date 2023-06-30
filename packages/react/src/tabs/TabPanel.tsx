import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { tokens } from '../core';
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
			aria-labelledby={tabId}
			display={isSelected ? undefined : 'none'}
			tabIndex={isSelected ? 0 : -1}
			background="body"
			padding={tokens.containerPadding}
			rounded
			border
			focus
			css={{
				borderTopLeftRadius: 0,
			}}
		>
			{children}
		</Box>
	);
}
