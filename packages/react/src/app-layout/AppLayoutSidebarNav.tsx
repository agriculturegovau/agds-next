import { ComponentType, Fragment, PropsWithChildren, ReactNode } from 'react';
import {
	boxPalette,
	fontGrid,
	LinkProps,
	mapSpacing,
	tokens,
	useLinkComponent,
} from '../core';
import { Box, focusStyles } from '../box';
import { Flex } from '../flex';
import { BaseButton, BaseButtonProps } from '../button';
import { IconProps } from '../icon';
import { useAppLayoutSidebarWidth } from './AppLayoutSidebar';

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

	return (
		<AppLayoutSidebarNavItemInner isActive={false} hasEndElement={false}>
			{label}
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
	const width = useAppLayoutSidebarWidth();
	return (
		<li
			css={{
				'> a': {
					textDecoration: 'none',
				},

				'> a, > button, > span': {
					width: '100%',
					boxSizing: 'border-box',
					wordBreak: 'break-word',
					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					paddingLeft: mapSpacing(1.5),
					paddingRight: mapSpacing(1.5),

					...(width === 'slim' && {
						...fontGrid('xs', 'default'),

						paddingLeft: mapSpacing(0.75),
						paddingRight: mapSpacing(0.75),
					}),
				},

				'> a, > button': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					gap: mapSpacing(1),
					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],

					...(width === 'slim' && {
						gap: mapSpacing(0.5),
						flexDirection: 'column',
						textAlign: 'center',
					}),

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
							borderLeftWidth: tokens.borderWidth.xxl,
							borderLeftStyle: 'solid',
							borderLeftColor: boxPalette.selected,
						},
					}),

					...(hasEndElement && {
						...(width === 'default' && {
							'& > :last-child': {
								marginLeft: 'auto',
							},
						}),
						...(width === 'slim' && {
							'& > :last-child': {
								position: 'absolute',
								top: mapSpacing(1),
								right: mapSpacing(1),
							},
						}),
					}),

					'&:hover': {
						background: boxPalette.backgroundShadeAlt,
						color: boxPalette.foregroundText,
						'& > span:first-of-type': {
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
	const width = useAppLayoutSidebarWidth();
	return (
		<Box
			as="li"
			paddingY={0}
			paddingX={width === 'default' ? 1.5 : 0.75}
			aria-hidden="true"
		>
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
