import { createContext, useContext } from 'react';
import { findBestMatch, tokens } from '../core';
import { Stack } from '../stack';
import { AppLayoutSidebarNav, NavItem } from './AppLayoutSidebarNav';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarDialog } from './AppLayoutSidebarDialog';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
} from './utils';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display. */
	items: NavItem[][];
	/** TODO naming seems wrong */
	width?: 'slim' | 'default';
};

export function AppLayoutSidebar({
	activePath,
	items,
	width = 'default',
}: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(items.flat(), activePath);
	return (
		<AppLayoutSidebarWidthContext.Provider value={width}>
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
					width: APP_LAYOUT_SIDEBAR_WIDTH[width],
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
		</AppLayoutSidebarWidthContext.Provider>
	);
}

// Sidebar width context
export const AppLayoutSidebarWidthContext = createContext<
	'slim' | 'default' | undefined
>(undefined);

export function useAppLayoutSidebarWidth() {
	const value = useContext(AppLayoutSidebarWidthContext);
	return value || 'default';
}
