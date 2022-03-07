import { ReactNode, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, backgroundColorMap } from '@ag.ds-next/box';
import {
	LinkProps,
	mapResponsiveProp,
	mq,
	tokens,
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/core';

import { SideNavContainer } from './SideNavContainer';
import { SideNavTitle } from './SideNavTitle';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { SideNavCollapseButton } from './SideNavCollapseButton';
import {
	localPaletteVars,
	variantMap,
	SideNavVariant,
	findBestMatch,
	useSideNavIds,
} from './utils';

export type SideNavProps = LinkListProps & {
	'aria-label'?: string;
	collapseTitle: string;
	variant?: SideNavVariant;
	title: ReactNode;
	titleLink: string; // TODO: should this be optional
};

export function SideNav({
	'aria-label': ariaLabel = 'side navigation',
	activePath,
	collapseTitle,
	items,
	variant = 'light',
	titleLink,
	title,
}: SideNavProps) {
	const { bodyId, buttonId, navId, titleId } = useSideNavIds();
	const { hover } = variantMap[variant];
	const [isOpen, onToggle] = useToggleState(false, true);
	const ref = useRef<HTMLDivElement>(null);
	const { height } = useElementSize(ref);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { height: 0 },
		to: { height: isOpen ? height : 0 },
		immediate: prefersReducedMotion,
	});
	return (
		<SideNavContainer aria-label={ariaLabel} variant={variant}>
			<SideNavCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				variant={variant}
				id={buttonId}
			>
				{collapseTitle}
			</SideNavCollapseButton>
			<animated.div
				id={bodyId}
				aria-labelledby={buttonId}
				style={animatedHeight}
				css={{
					overflow: 'hidden',
					[tokens.mediaQuery.min.md]: {
						// Overwrite the animated height
						// for tablet/desktop sizes.
						overflow: 'unset',
						height: 'auto !important',
					},
				}}
			>
				<Box
					ref={ref}
					as="nav"
					role="navigation"
					aria-labelledby={titleId}
					id={navId}
					fontFamily="body"
					paddingLeft={{ xs: 1, md: 0 }}
					paddingRight={{ xs: 1, md: 0 }}
					fontSize="sm"
					lineHeight="default"
					css={mq({
						[localPaletteVars.hover]: mapResponsiveProp(
							hover,
							(t) => backgroundColorMap[t]
						),
					})}
				>
					<SideNavTitle
						isCurrentPage={activePath === titleLink}
						id={titleId}
						href={titleLink}
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
					aria-current={item.href === activePath ? 'page' : undefined}
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
