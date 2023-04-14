import { useRef } from 'react';
import { Box } from '../box';
import { LinkProps, tokens, useToggleState, useWindowSize } from '../core';
import { SideNavContainer } from './SideNavContainer';
import { SideNavTitle } from './SideNavTitle';
import { SideNavCollapseButton } from './SideNavCollapseButton';
import { findBestMatch, SideNavBackground, useSideNavIds } from './utils';
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
	background?: SideNavBackground;
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
	const { bodyId, buttonId, navId, titleId } = useSideNavIds();
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);

	const { windowWidth } = useWindowSize();
	const isMobile = (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	const bestMatch = findBestMatch(items, activePath);

	return (
		<SideNavContainer background={background}>
			<SideNavCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={buttonId}
			>
				{collapseTitle}
			</SideNavCollapseButton>
			<div
				id={bodyId}
				// As this component looks similar to an accordion in smaller screen sizes, we need to conditionally add some aria attributes
				{...(isMobile && { role: 'region', 'aria-labelledby': buttonId })}
				css={{
					display: isOpen ? 'block' : 'none',
					// Overwrite the animated height for tablet/desktop sizes.
					[tokens.mediaQuery.min.md]: {
						overflow: 'unset',
						display: 'block !important',
						height: 'auto !important',
					},
				}}
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
			</div>
		</SideNavContainer>
	);
}
