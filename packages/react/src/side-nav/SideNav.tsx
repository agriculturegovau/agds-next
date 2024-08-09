import { Box } from '../box';
import { tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import { CollapsingSideBar } from '../_collapsing-side-bar';
import { SideNavTitle } from './SideNavTitle';
import { findBestMatch, useSideNavIds } from './utils';
import { SideNavLinkList } from './SideNavLinkList';
import { type SideNavProps } from './types';

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

	const { titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);

	return (
		<CollapsingSideBar
			background={background}
			customTitleElement={
				<SideNavTitle
					as="h2"
					css={{
						[tokens.mediaQuery.min.md]: visuallyHiddenStyles,
					}}
					id={titleId}
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
				lineHeight="default"
			>
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
