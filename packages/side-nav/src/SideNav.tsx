import { ReactNode, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box } from '@ag.ds-next/box';
import {
	LinkProps,
	tokens,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/core';
import { SideNavContainer } from './SideNavContainer';
import { SideNavTitle } from './SideNavTitle';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { SideNavCollapseButton } from './SideNavCollapseButton';
import { SideNavBackground, findBestMatch, useSideNavIds } from './utils';

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
	title: ReactNode;
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
};

export function SideNav({
	activePath,
	collapseTitle,
	items,
	background = 'body',
	titleLink,
	title,
}: SideNavProps) {
	const { bodyId, buttonId, navId, titleId } = useSideNavIds();
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			// Show the element so it's height can be animated
			if (isOpen) await next({ display: 'block', overflow: 'hidden' });
			// Animate the elements height
			await next({
				overflow: 'hidden',
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			// Animation end state
			await next(
				isOpen
					? { height: 'auto', overflow: 'initial' }
					: { display: 'none', overflow: 'initial' }
			);
		},
	});

	const { windowWidth } = useWindowSize();
	const isMobile = (windowWidth || 0) <= tokens.breakpoint.lg - 1;

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
			<animated.div
				id={bodyId}
				// As this component looks similar to an accordion in smaller screen sizes, we need to conditionally add some aria attributes
				{...(isMobile && { role: 'region', 'aria-labelledby': buttonId })}
				style={animatedHeight}
				css={{
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
					<LinkList activePath={activePath} items={items} />
				</Box>
			</animated.div>
		</SideNavContainer>
	);
}

type SideNavMenuItemType = Omit<LinkProps, 'children'> & {
	label: string;
	items?: SideNavMenuItemType[];
};

type LinkListProps = {
	activePath: string;
	items: SideNavMenuItemType[];
};

// QUESTION: Should this be public api
function LinkList({ activePath, items }: LinkListProps) {
	const bestMatch = findBestMatch(items, activePath);
	return (
		<SideNavGroup>
			{items.map(({ items: subItems, ...item }, index) => (
				<SideNavLink
					key={index}
					active={item.href === bestMatch}
					isCurrentPage={item.href === activePath}
					{...item}
				>
					{subItems?.length ? (
						<LinkList items={subItems} activePath={activePath} />
					) : null}
				</SideNavLink>
			))}
		</SideNavGroup>
	);
}
