import { Box } from '../box';
import { LinkProps } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarBackground,
} from '../_collapsing-side-bar';
import { SideNavTitle } from './SideNavTitle';
import { findBestMatch, useSideNavIds } from './utils';
import { SideNavLinkList } from './SideNavLinkList';

type SideNavMenuItemType = Omit<LinkProps, 'children'> & {
	label: string;
	items?: SideNavMenuItemType[];
};

export type SideNavProps = {
	/** Used for highlighting the active element. */
	activePath: string;
	/** Used as the title of the expand/collapse trigger on smaller screen sizes. */
	collapseTitle: string;
	/** The list of links. */
	items: SideNavMenuItemType[];
	/** The title is placed at the top of the list of links. */
	title: string;
	/** If SideNav is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: CollapsingSideBarBackground;
	/** The variant to use for nested navigation items. */
	nestedItemsVariant?: 'alwaysOpen' | 'openOnNav';
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
};

export function SideNav({
	activePath,
	background = 'body',
	collapseTitle,
	items,
	nestedItemsVariant = 'alwaysOpen',
	title,
	titleLink,
}: SideNavProps) {
	const { navId, titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			collapseButtonLabel={collapseTitle}
			background={background}
		>
			<Box
				as="nav"
				aria-labelledby={titleId}
				id={navId}
				fontFamily="body"
				fontSize="sm"
				lineHeight="default"
			>
				<SideNavTitle
					id={titleId}
					href={titleLink}
					isCurrentPage={activePath === titleLink}
				>
					{title}
				</SideNavTitle>
				<SideNavLinkList
					activePath={bestMatch}
					items={items}
					nestedItemsVariant={nestedItemsVariant}
				/>
			</Box>
		</CollapsingSideBar>
	);
}
