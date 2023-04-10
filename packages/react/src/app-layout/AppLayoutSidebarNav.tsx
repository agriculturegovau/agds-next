import { ComponentType, Fragment, PropsWithChildren, ReactNode } from 'react';
import {
	boxPalette,
	LinkProps,
	mapSpacing,
	tokens,
	useLinkComponent,
} from '../core';
import { Box, Flex } from '../box';
import { BaseButton, BaseButtonProps, Button } from '../button';
import { createIcon, IconProps } from '../icon';
import { useAppLayoutContext } from './AppLayoutContext';

type NavLink = Omit<LinkProps, 'children'>;

type NavButton = Omit<BaseButtonProps, 'children'>;

type NavItem = (NavLink | NavButton) & {
	label: ReactNode;
	icon?: ComponentType<IconProps>;
	endElement?: ReactNode;
};

export type AppLayoutSidebarNavProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display at the top of the sidebar. */
	items: NavItem[][];
	/** Navigation items to display at the bottom of the sidebar. */
	secondaryItems?: NavItem[];
};

export function AppLayoutSidebarNav({
	activePath,
	items,
	secondaryItems,
}: AppLayoutSidebarNavProps) {
	return (
		<Fragment>
			<Flex justifyContent="flex-end" paddingX={1.5}>
				<HideMenuButton />
			</Flex>
			<Flex as="nav" flexDirection="column" flexGrow={1} aria-label="main">
				<Flex as="ul" flexDirection="column" flexGrow={1}>
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
					{secondaryItems?.length ? (
						<Fragment>
							<li aria-hidden="true" css={{ marginTop: 'auto' }} />
							{secondaryItems?.map((item, idx) => (
								<AppLayoutSidebarNavListItem
									key={idx}
									item={item}
									activePath={activePath}
								/>
							))}
						</Fragment>
					) : null}
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
		<Button
			ref={hideMenuButtonRef}
			onClick={hideMenu}
			variant="text"
			iconBefore={ChevronsLeftIcon}
			css={{
				textDecoration: 'none',
			}}
		>
			Hide menu
		</Button>
	);
}

const ChevronsLeftIcon = createIcon(
	<Fragment>
		<path d="M18.5 7.5L14.1179 11.8821C14.0528 11.9472 14.0528 12.0528 14.1179 12.1179L18.5 16.5" />
		<path d="M9.5 7.5L5.11785 11.8821C5.05276 11.9472 5.05276 12.0528 5.11785 12.1179L9.5 16.5" />
	</Fragment>,
	'ChevronsLeftIcon'
);
