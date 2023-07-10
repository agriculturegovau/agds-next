import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { tokens } from '../core';
import { useTabPanelsContext } from './TabPanelsContext';
import { useTabsContext } from './TabsContext';
import { useTabIds } from './utils';
import { localPalette } from './localPalette';

export type TabPanelProps = PropsWithChildren<{}>;

export function TabPanel({ children }: TabPanelProps) {
	const { tabsId, activeIndex, contained } = useTabsContext();
	const { panelIndex } = useTabPanelsContext();
	const { tabButtonId, panelId } = useTabIds(tabsId, panelIndex);
	const isSelected = activeIndex === panelIndex;
	return (
		<Box
			id={panelId}
			role="tabpanel"
			aria-labelledby={tabButtonId}
			display={isSelected ? undefined : 'none'}
			tabIndex={isSelected ? 0 : -1}
			focus
			border
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={{ xs: 0.75, md: 1.5 }}
			css={{
				background: localPalette.panelBg,
				color: localPalette.panelFg,
				// Border styles
				borderTopWidth: 0,
				borderRadius: `0 0 ${tokens.borderRadius}px ${tokens.borderRadius}px`,
				[tokens.mediaQuery.min.sm]: {
					borderTopWidth: tokens.borderWidth.sm,
					...(contained
						? {
								borderRadius: `0 ${tokens.borderRadius}px ${tokens.borderRadius}px`,
						  }
						: {
								paddingLeft: 0,
								paddingRight: 0,
								borderLeftWidth: 0,
								borderRightWidth: 0,
								borderRadius: 0,
						  }),
				},
			}}
		>
			{children}
		</Box>
	);
}
