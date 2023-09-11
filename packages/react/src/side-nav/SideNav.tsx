import { Box } from '../box';
import { LinkProps } from '../core';
import { CollapsingSideBar } from '../_collapsing-side-bar';
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
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
};

export function SideNav({
	activePath,
	collapseTitle,
	items,
	title,
	titleLink,
}: SideNavProps) {
	const { navId, titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar as="aside" collapseButtonLabel={collapseTitle}>
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
				<SideNavLinkList activePath={bestMatch} items={items} />
			</Box>
		</CollapsingSideBar>
	);
}
