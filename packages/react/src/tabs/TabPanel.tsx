import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { boxPalette, tokens } from '../core';
import { useTabPanelsContext } from './TabPanelsContext';
import { useTabsContext } from './TabsContext';
import { useTabIds } from './utils';
import { localPalette } from './localPalette';

export type TabPanelProps = PropsWithChildren<{}>;

export function TabPanel({ children }: TabPanelProps) {
	const { tabsId, activeIndex, contained } = useTabsContext();
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
			focus
			paddingX={contained ? { xs: 0.75, md: 1.5 } : 0}
			paddingY={{ xs: 0.75, md: 1.5 }}
			css={{
				background: localPalette.background,

				...(contained
					? {
							borderRadius: `0 0 ${tokens.borderRadius}px ${tokens.borderRadius}px`,
							borderWidth: tokens.borderWidth.sm,
							borderStyle: 'solid',
							borderColor: boxPalette.border,
							borderTopWidth: 0,

							[tokens.mediaQuery.min.sm]: {
								borderTopWidth: tokens.borderWidth.sm,
								borderRadius: `0 ${tokens.borderRadius}px ${tokens.borderRadius}px`,
							},
					  }
					: {
							borderBottomWidth: tokens.borderWidth.sm,
							borderStyle: 'solid',
							borderColor: boxPalette.border,

							[tokens.mediaQuery.min.sm]: {
								borderTopWidth: tokens.borderWidth.sm,
								borderStyle: 'solid',
								borderColor: boxPalette.border,
							},
					  }),
			}}
		>
			{children}
		</Box>
	);
}
