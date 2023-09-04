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
	variant?: 'slim' | 'regular';
	width?: string | number;
};

export function AppLayoutSidebar({
	activePath,
	items,
	variant = 'regular',
	width: widthProp,
}: AppLayoutSidebarProps) {
	const { focusMode } = useAppLayoutContext();
	const bestMatch = findBestMatch(items.flat(), activePath);
	return (
		<AppLayoutSidebarVariantContext.Provider value={variant}>
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
					width: widthProp || APP_LAYOUT_SIDEBAR_WIDTH[variant],
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
		</AppLayoutSidebarVariantContext.Provider>
	);
}

// Sidebar variant context
export const AppLayoutSidebarVariantContext = createContext<
	'slim' | 'regular' | undefined
>(undefined);

export function useAppLayoutSidebarVariant() {
	const value = useContext(AppLayoutSidebarVariantContext);
	return value || 'regular';
}
