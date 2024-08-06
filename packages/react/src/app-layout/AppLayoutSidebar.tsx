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
	/** When to show sub-level navigation items. */
	subLevelVisible?: 'always' | 'whenActive';
};

export function AppLayoutSidebar({
	activePath,
	background = 'bodyAlt',
	items,
	palette,
	subLevelVisible = 'whenActive',
}: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(items, activePath);

	const commonMobileAndDesktopNavProps = {
		activePath: bestMatch,
		items,
		subLevelVisible,
	};

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
					{...commonMobileAndDesktopNavProps}
					background={background}
				/>
			</Stack>
			{/* Mobile */}
			<AppLayoutSidebarDialog palette={palette}>
				<AppLayoutSidebarNav
					{...commonMobileAndDesktopNavProps}
					// This is hardcoded as bodyAlt because the dialog is hardcoded as shade
					background="bodyAlt"
				/>
			</AppLayoutSidebarDialog>
		</Fragment>
	);
}
