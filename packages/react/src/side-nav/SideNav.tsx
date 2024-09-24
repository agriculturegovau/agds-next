import { Box } from '../box';
import { LinkProps, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import {
	CollapsingSideBar,
	CollapsingSideBarBackground,
} from '../_collapsing-side-bar';
import { SideNavTitle } from './SideNavTitle';
import { findBestMatch } from './utils';
import { SideNavLinkList } from './SideNavLinkList';

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

export function SideNav({
	activePath,
	background = 'body',
	collapseTitle,
	items,
	subLevelVisible = 'whenActive',
	title,
	titleLink,
}: SideNavProps) {
	// deprecation warnings
	if (process.env.NODE_ENV !== 'production' && collapseTitle) {
		console.warn('SideNav: The `collapseTitle` prop is now unused.');
	}

	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			as="nav"
			background={background}
			customTitleElement={
				<SideNavTitle
					as="h2"
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
			<Box fontFamily="body" fontSize="sm" lineHeight="default">
				<SideNavTitle
					as="span"
					// Don't render the title on small screen if there is no link as it's unnecessary double-up of headings
					display={{ xs: titleLink ? 'block' : 'none', md: 'block' }}
					href={titleLink}
					isCurrentPage={activePath === titleLink}
				>
					{title}
				</SideNavTitle>

				<SideNavLinkList
					activePath={bestMatch}
					items={items}
					subLevelVisible={subLevelVisible}
				/>
			</Box>
		</CollapsingSideBar>
	);
}
