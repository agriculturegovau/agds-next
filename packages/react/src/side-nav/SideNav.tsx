import { Box } from '../box';
import { LinkProps, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
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
	/** @deprecated The title is now always used, even when collapsed. */
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
	background = 'body',
	collapseTitle,
	items,
	title,
	titleLink,
}: SideNavProps) {
	// deprecation warnings
	if (process.env.NODE_ENV !== 'production' && collapseTitle) {
		console.warn(
			'SideNav: The `collapseTitle` prop is now unused and cannot be set.'
		);
	}

	const { navId, titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			background={background}
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
			gap={0}
			title={title}
		>
			<Box
				aria-labelledby={titleId}
				as="nav"
				fontFamily="body"
				fontSize="sm"
				id={navId}
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
