import { ComponentType, Fragment, PropsWithChildren, ReactNode } from 'react';
import {
	boxPalette,
	fontGrid,
	LinkProps,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { VisuallyHidden } from '../a11y';
import { Box, Flex } from '../box';
import { BaseButton, BaseButtonProps } from '../button';
import { createIcon, IconProps } from '../icon';
import { useAppLayoutContext } from './AppLayoutContext';
import { HEADER_HEIGHT } from './utils';

type NavLink = Omit<LinkProps, 'children'>;

type NavButton = Omit<BaseButtonProps, 'children'>;

export type NavItem = (NavLink | NavButton) & {
	label: ReactNode;
	icon?: ComponentType<IconProps>;
	endElement?: ReactNode;
};

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	items: NavItem[][];
};

export function AppLayoutSidebarNav({
	activePath,
	items,
}: AppLayoutSidebarNavProps) {
	return (
		<Fragment>
			<HideMenuButton />
			<Flex as="nav" flexDirection="column" aria-label="main">
				<Flex as="ul" flexDirection="column">
					{items.map((group, idx, arr) => {
						const isLastItem = idx === arr.length - 1;
						return (
							<Fragment key={idx}>
								{group.map((item, idx) => (
									<AppLayoutSidebarNavListItem
										key={idx}
										item={item}
										activePath={activePath}
									/>
								))}
								{!isLastItem ? <AppLayoutSidebarNavDivider /> : null}
							</Fragment>
						);
					})}
				</Flex>
			</Flex>
		</Fragment>
	);
}

type AppLayoutSidebarNavListItemProps = {
	activePath?: string;
	item: NavItem;
};

function AppLayoutSidebarNavListItem({
	activePath,
	item,
}: AppLayoutSidebarNavListItemProps) {
	const Link = useLinkComponent();
	const { endElement, icon: Icon, label, ...restItemProps } = item;

	if ('href' in item) {
		const active = item.href === activePath;
		return (
			<AppLayoutSidebarNavItemInner
				isActive={activePath === item.href}
				hasEndElement={Boolean(endElement)}
			>
				<Link aria-current={active ? 'page' : undefined} {...restItemProps}>
					{Icon ? <Icon /> : null}
					<span>{label}</span>
					{endElement}
				</Link>
			</AppLayoutSidebarNavItemInner>
		);
	}

	return (
		<AppLayoutSidebarNavItemInner
			isActive={false}
			hasEndElement={Boolean(endElement)}
		>
			<BaseButton {...restItemProps}>
				{Icon ? <Icon /> : null}
				<span>{label}</span>
				{endElement}
			</BaseButton>
		</AppLayoutSidebarNavItemInner>
	);
}

type AppLayoutSidebarNavItemInnerProps = PropsWithChildren<{
	isActive: boolean;
	hasEndElement: boolean;
}>;

function AppLayoutSidebarNavItemInner({
	isActive,
	children,
	hasEndElement,
}: AppLayoutSidebarNavItemInnerProps) {
	return (
		<li
			css={{
				' a': {
					textDecoration: 'none',
				},

				' a, button': {
					display: 'flex',
					alignItems: 'center',
					gap: mapSpacing(1),
					width: '100%',
					boxSizing: 'border-box',
					paddingLeft: mapSpacing(1.5),
					paddingRight: mapSpacing(1.5),
					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],

					...(isActive && {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
					}),

					...(hasEndElement && {
						'& > :last-child': {
							marginLeft: 'auto',
						},
					}),

					'&:focus': packs.outline,

					'&:hover': {
						background: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
						'& span:first-of-type': {
							textDecoration: 'underline',
						},
					},
				},
			}}
		>
			{children}
		</li>
	);
}

function AppLayoutSidebarNavDivider() {
	return (
		<Box as="li" paddingY={1} paddingX={1.5} aria-hidden="true">
			<hr
				css={{
					boxSizing: 'content-box',
					height: 0,
					margin: 0,
					overflow: 'visible',
					border: 'none',
					borderTopWidth: tokens.borderWidth.sm,
					borderTopStyle: 'solid',
					borderColor: boxPalette.borderMuted,
					width: '100%',
				}}
			/>
		</Box>
	);
}

function HideMenuButton() {
	const { hideMenu, hideMenuButtonRef } = useAppLayoutContext();
	return (
		<Flex
			height={HEADER_HEIGHT.md}
			alignItems="center"
			borderBottom
			borderColor="muted"
			paddingLeft={{ xs: 1, lg: 0 }}
			flexShrink={0}
		>
			<BaseButton
				ref={hideMenuButtonRef}
				onClick={hideMenu}
				css={{
					// Mobile button styles
					'> span:first-of-type': {
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: mapSpacing(0.5),
						boxSizing: 'border-box',
						padding: mapSpacing(1),
						color: boxPalette.foregroundAction,
						...fontGrid('xs', 'default'),
					},

					// Desktop button styles
					'> span:last-of-type': {
						display: 'none', // Hide on mobile
						width: '100%',
						alignItems: 'center',
						gap: mapSpacing(1),
						boxSizing: 'border-box',
						paddingLeft: mapSpacing(1.5),
						paddingRight: mapSpacing(1.5),
						paddingTop: mapSpacing(0.5),
						paddingBottom: mapSpacing(0.5),
						color: boxPalette.foregroundAction,
						...fontGrid('xs', 'default'),

						'&:hover': {
							background: boxPalette.backgroundShade,
							color: boxPalette.foregroundText,
						},
					},

					'&:focus': packs.outline,

					[tokens.mediaQuery.min.lg]: {
						width: '100%',
						// Hide mobile button
						'> span:first-of-type': { display: 'none' },
						// Show desktop button
						'> span:last-of-type': { display: 'flex' },
					},
				}}
			>
				{/** Mobile button content */}
				<span>
					<CloseIcon />
					<span aria-hidden="true">Close</span>
					<VisuallyHidden>Close Menu</VisuallyHidden>
				</span>
				{/** Desktop button content */}
				<span>
					<ChevronsLeftIcon />
					<span>Hide menu</span>
				</span>
			</BaseButton>
		</Flex>
	);
}

const ChevronsLeftIcon = createIcon(
	<Fragment>
		<path d="M18.5 7.5L14.1179 11.8821C14.0528 11.9472 14.0528 12.0528 14.1179 12.1179L18.5 16.5" />
		<path d="M9.5 7.5L5.11785 11.8821C5.05276 11.9472 5.05276 12.0528 5.11785 12.1179L9.5 16.5" />
	</Fragment>,
	'ChevronsLeftIcon'
);

// TODO This icon has been copied+pasted from `MainNav`
// This should be a design system icon
function CloseIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentcolor"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<rect
				x="6"
				y="17.3137"
				width="16"
				height="2"
				transform="rotate(-45 6 17.3137)"
			/>
			<rect
				x="7.41406"
				y="6"
				width="16"
				height="2"
				transform="rotate(45 7.41406 6)"
			/>
		</svg>
	);
}
