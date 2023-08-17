import { Fragment } from 'react';
import { findBestMatch, tokens } from '../core';
import { Stack } from '../stack';
import { AppLayoutSidebarNav } from './AppLayoutSidebarNav';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarDialog } from './AppLayoutSidebarDialog';
import { NavItem } from './AppLayoutSidebarNavListItem';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
} from './utils';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display. */
	items: NavItem[][];
};

export function AppLayoutSidebar({ activePath, items }: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(items.flat(), activePath);
	return (
		<Fragment>
			{/* Desktop */}
			<Stack
				as="aside"
				gap={1}
				background="bodyAlt"
				borderRight
				borderColor="muted"
				flexGrow={1}
				css={{
					display: 'none',
					width: APP_LAYOUT_SIDEBAR_WIDTH,
					[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
						display: focusMode ? 'none' : 'flex',
					},
				}}
			>
				<AppLayoutSidebarNav
					activePath={bestMatch}
					items={items}
					css={{ position: 'sticky', top: 0 }}
				/>
			</Stack>
			{/* Mobile */}
			<AppLayoutSidebarDialog>
				<AppLayoutSidebarNav activePath={bestMatch} items={items} />
			</AppLayoutSidebarDialog>
		</Fragment>
	);
}
