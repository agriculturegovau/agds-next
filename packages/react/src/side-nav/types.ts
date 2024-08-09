import {
	type ReactNode,
	type ElementType,
	type PropsWithChildren,
} from 'react';
import { CollapsingSideBarBackground } from '../_collapsing-side-bar';
import { type LinkProps } from '../core';
import { type BoxProps } from '../box';

type SideNavMenuItem = Omit<LinkProps, 'children'> & {
	label: string;
	items?: SideNavMenuItem[];
};

export type SideNavProps = {
	/** Used for highlighting the active element. */
	activePath: string;
	/** If SideNav is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: CollapsingSideBarBackground;
	/** @deprecated Unused. The title is now always used, even when collapsed. */
	collapseTitle?: string;
	/** The list of links. */
	items: SideNavMenuItem[];
	/** The title is placed at the top of the list of links. */
	title: string;
	/** When to show sub-level navigation items. */
	subLevelVisible?: 'always' | 'whenActive';
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
};

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
	subLevelVisible: SideNavProps['subLevelVisible'];
};

export type SideNavLinkProps = LinkProps & {
	isActive?: boolean;
};

export type SideNavTitleProps = PropsWithChildren<{
	as?: ElementType;
	/** The CSS class name generated from the `css` prop. */
	className?: string;
	display?: BoxProps['display'];
	href?: string;
	id?: string;
	isCurrentPage?: boolean;
}>;

export type SideNavUnorderedListProps = {
	children: ReactNode;
	isOpen: boolean;
};
