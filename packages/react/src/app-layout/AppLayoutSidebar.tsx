import { Fragment } from 'react';
import { tokens, type BoxPalette, type ResponsiveProp } from '../core';
import { Stack } from '../stack';
import { AppLayoutSidebarNav, NavItem } from './AppLayoutSidebarNav';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarDialog } from './AppLayoutSidebarDialog';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
	findBestMatch,
} from './utils';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	background?: 'body' | 'bodyAlt';
	/** Groups of navigation items to display. */
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
	palette?: ResponsiveProp<BoxPalette>;
};

export function AppLayoutSidebar({
	activePath,
	background = 'bodyAlt',
	items,
	palette,
}: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(items, activePath);

	console.log({ activePath, bestMatch });

	return (
		<Fragment>
			{/* Desktop */}
			<Stack
				background={background}
				borderColor="muted"
				borderRight
				css={{
					display: 'none',
					width: APP_LAYOUT_SIDEBAR_WIDTH,
					[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
						display: focusMode ? 'none' : 'flex',
					},
				}}
				flexGrow={1}
				gap={1}
				palette={palette}
			>
				<AppLayoutSidebarNav
					activePath={bestMatch}
					background={background}
					items={items}
				/>
			</Stack>
			{/* Mobile */}
			<AppLayoutSidebarDialog palette={palette}>
				<AppLayoutSidebarNav
					activePath={bestMatch}
					// This is hardcoded as bodyAlt because the dialog is hardcoded as shade
					background="bodyAlt"
					items={items}
				/>
			</AppLayoutSidebarDialog>
		</Fragment>
	);
}
