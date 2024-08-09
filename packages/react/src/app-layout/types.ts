import { type ComponentType, type ReactElement, type ReactNode } from 'react';
import { type BaseButtonProps } from '../button';
import { type BoxPalette, type LinkProps, type ResponsiveProp } from '../core';
import { type IconProps } from '../icon';
import { type BorderColor } from '../box';

export type AppLayoutHeaderProps = {
	/** Details for the authenticated account. */
	accountDetails?: {
		/** The name of the authenticated user. */
		name: string;
		/** Displayed under the users name if needed e.g. to show the business name. */
		secondaryText?: string;
		/** The href to link to, for example "/account". */
		href?: string;
		/** Dropdown menu for account switching. */
		dropdown?: ReactNode;
	};
	background?: 'body' | 'bodyAlt';
	/** Used to indicate if an application is in a prerelease state. */
	badgeLabel?: string;
	borderColor?: ResponsiveProp<BorderColor>;
	/** When using two logos, position the horizontal dividing line 'between' the logos or 'after' them. */
	dividerPosition?: 'after' | 'between';
	/** The heading should be set to the website or service title. */
	heading: string;
	/**  The href to link to, for example "/". */
	href: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The logo to display. */
	logo: ReactElement;
	palette?: ResponsiveProp<BoxPalette>;
	/** The href to link to, for example "/". */
	secondHref?: string;
	/** The second logo to display for co-branding. */
	secondLogo?: ReactElement;
	/** Used to provide additional information to describe your website or service. */
	subLine?: string;
};

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

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	background: 'body' | 'bodyAlt';
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
	subLevelVisible?: AppLayoutSidebarProps['subLevelVisible'];
};

type NavLink = Omit<LinkProps, 'children'>;

type NavButton = Omit<BaseButtonProps, 'children'>;

export type NavItem = (NavLink | NavButton) & {
	label: ReactNode;
	endElement?: ReactNode;
	icon?: ComponentType<IconProps>;
	isActive?: boolean;
	items?: NavItem[];
	level?: number;
};
