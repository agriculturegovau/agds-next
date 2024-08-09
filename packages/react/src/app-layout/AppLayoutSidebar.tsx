import { Fragment } from 'react';
import { tokens } from '../core';
import { Stack } from '../stack';
import { AppLayoutSidebarNav } from './AppLayoutSidebarNav';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarDialog } from './AppLayoutSidebarDialog';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
	findBestMatch,
} from './utils';
import { type AppLayoutSidebarProps } from './types';

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
