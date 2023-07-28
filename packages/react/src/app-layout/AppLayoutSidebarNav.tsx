import { ComponentType, Fragment, PropsWithChildren, ReactNode } from 'react';
import {
	boxPalette,
	LinkProps,
	mapSpacing,
	tokens,
	useLinkComponent,
} from '../core';
import { Box, focusStyles } from '../box';
import { Flex } from '../flex';
import { BaseButton, BaseButtonProps } from '../button';
import { IconProps } from '../icon';

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
	className?: string;
};

export function AppLayoutSidebarNav({
	activePath,
	items,
}: AppLayoutSidebarNavProps) {
	return (
		<Flex as="nav" flexDirection="column" aria-label="main" paddingY={1.5}>
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
					{Icon ? <Icon color="inherit" /> : null}
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
				{Icon ? <Icon color="inherit" /> : null}
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
					gap: mapSpacing(0.75),
					width: '100%',
					boxSizing: 'border-box',
					paddingLeft: mapSpacing(1.5),
					paddingRight: mapSpacing(1.5),
					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],

					...(isActive && {
						position: 'relative',
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShadeAlt,
						color: boxPalette.foregroundText,
						'&:before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftWidth: tokens.borderWidth.xxl,
							borderLeftStyle: 'solid',
							borderLeftColor: boxPalette.foregroundAction,
						},
					}),

					...(hasEndElement && {
						'& > :last-child': {
							marginLeft: 'auto',
						},
					}),

					'&:hover': {
						background: boxPalette.backgroundShadeAlt,
						color: boxPalette.foregroundText,
						'& span:first-of-type': {
							textDecoration: 'underline',
						},
					},

					...focusStyles,
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
