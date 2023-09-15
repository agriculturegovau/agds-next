import { ComponentType, Fragment, PropsWithChildren, ReactNode } from 'react';
import {
	boxPalette,
	LinkProps,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { Box, focusStyles } from '../box';
import { Flex } from '../flex';
import { BaseButton, BaseButtonProps } from '../button';
import { IconProps } from '../icon';
import { Stack } from '../stack';

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
		<Flex as="nav" flexDirection="column" aria-label="main" paddingBottom={1.5}>
			<Flex as="ul" flexDirection="column">
				{items.map((group, idx, arr) => {
					const groupHasSingleItem = group.length === 1;
					const nextGroupHasSingleItem = items[idx + 1]?.length === 1;
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
							{!isLastItem ? (
								<AppLayoutSidebarNavDivider
									disablePaddingY={groupHasSingleItem || nextGroupHasSingleItem}
								/>
							) : null}
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

	// Link list item
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

	// Button list item
	if ('onClick' in item) {
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

	// Text-only list item
	return (
		<AppLayoutSidebarNavItemInner isActive={false} hasEndElement={false}>
			<Stack as="span" gap={0.25}>
				{label}
			</Stack>
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
				'> a': {
					textDecoration: 'none',
				},

				'> a, > button, > span': {
					width: '100%',
					boxSizing: 'border-box',
					wordBreak: 'break-word', // Prevent long labels from causing overflow
					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					paddingLeft: mapSpacing(1.5),
					paddingRight: mapSpacing(1.5),

					'& > svg': {
						flexShrink: 0,
					},
				},

				'> a, > button': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					gap: mapSpacing(0.75),
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],

					...(isActive && {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShadeAlt,
						color: boxPalette.foregroundText,
						'&:before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftStyle: 'solid',
							borderLeftColor: boxPalette.selected,
							borderLeftWidth: tokens.borderWidth.xl,
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
						'& > span:first-of-type': packs.underline,
					},

					...focusStyles,
				},
			}}
		>
			{children}
		</li>
	);
}

function AppLayoutSidebarNavDivider({
	disablePaddingY,
}: {
	disablePaddingY: boolean;
}) {
	return (
		<Box as="li" paddingY={disablePaddingY ? 0 : 1} aria-hidden="true">
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
