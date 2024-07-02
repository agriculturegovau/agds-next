import { Box } from '../box';
import { LinkProps, tokens } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarBackground,
} from '../_collapsing-side-bar';
import { SideNavTitle } from './SideNavTitle';
import { findBestMatch, useSideNavIds } from './utils';
import { SideNavLinkList } from './SideNavLinkList';
import { visuallyHiddenStyles } from '../a11y';

type SideNavMenuItemType = Omit<LinkProps, 'children'> & {
	label: string;
	items?: SideNavMenuItemType[];
};

export type SideNavProps = {
	/** Used for highlighting the active element. */
	activePath: string;
	/** @deprecated title is now always used even when collapsed. */
	collapseTitle: string;
	/** If SideNav is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: CollapsingSideBarBackground;
	/** The list of links. */
	items: SideNavMenuItemType[];
	/** The title is placed at the top of the list of links. */
	title: string;
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
};

export function SideNav({
	activePath,
	items,
	background = 'body',
	title,
	titleLink,
}: SideNavProps) {
	const { navId, titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			background={background}
			gap={0}
			titlez={title}
			customTitle={
				<SideNavTitle
					as="h2"
					id={titleId}
					css={{
						[tokens.mediaQuery.min.md]: visuallyHiddenStyles,
					}}
				>
					{title}
				</SideNavTitle>
			}
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
					as="span"
					display={{ xs: titleLink ? 'block' : 'none', md: 'block' }}
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
