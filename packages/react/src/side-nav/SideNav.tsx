import { useRef } from 'react';
import { Box } from '../box';
import { LinkProps } from '../core';
import { CollapsingSideBar, SideBarBackground } from '../_collapsing-side-bar';
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
	/** If SideNav is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: SideBarBackground;
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
	background = 'body',
	title,
	titleLink,
}: SideNavProps) {
	const { navId, titleId } = useSideNavIds();
	const ref = useRef<HTMLDivElement>(null);

	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			as="aside"
			collapseButtonLabel={collapseTitle}
			background={background}
		>
			<Box
				ref={ref}
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
