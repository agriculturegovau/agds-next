import { Fragment } from 'react';
import { findBestMatch, tokens } from '../core';
import { Stack } from '../stack';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarDialog } from './AppLayoutSidebarDialog';
import { AppLayoutSidebarNav, NavItem } from './AppLayoutSidebarNav';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
} from './utils';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display. */
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
};

export function AppLayoutSidebar({ activePath, items }: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(
		items.map((group) => (Array.isArray(group) ? group : group.items)).flat(),
		activePath
	);
	const { background } = useAppLayoutContext();

	const sidebarBackground = background === 'body' ? 'bodyAlt' : undefined;

	return (
		<Fragment>
			{/* Desktop */}
			<Stack
				gap={1}
				background={sidebarBackground}
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
				<AppLayoutSidebarNav activePath={bestMatch} items={items} />
			</Stack>
			{/* Mobile */}
			<AppLayoutSidebarDialog>
				<AppLayoutSidebarNav activePath={bestMatch} items={items} />
			</AppLayoutSidebarDialog>
		</Fragment>
	);
}
