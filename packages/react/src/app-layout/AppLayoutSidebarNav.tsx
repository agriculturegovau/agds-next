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
import { useAppLayoutContext } from './AppLayoutContext';

type NavLink = Omit<LinkProps, 'children'>;

type NavButton = Omit<BaseButtonProps, 'children'>;

export type NavItem = (NavLink | NavButton) & {
	label: ReactNode;
	icon?: ComponentType<IconProps>;
	endElement?: ReactNode;
};

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
	className?: string;
};

export function AppLayoutSidebarNav({
	activePath,
	items,
}: AppLayoutSidebarNavProps) {
	return (
		<Flex as="nav" flexDirection="column" aria-label="main" paddingBottom={1.5}>
			<Flex as="ul" flexDirection="column">
				{items.map((group, idx) => {
					const isFirstItem = idx === 0;
					const groupItems = Array.isArray(group) ? group : group.items;

					const disableGroupPadding = Array.isArray(group)
						? false
						: Boolean(group.options?.disableGroupPadding);

					const prevGroup = items[idx - 1];
					const prevGroupDisableGroupPadding = prevGroup
						? Array.isArray(prevGroup)
							? false
							: Boolean(prevGroup.options?.disableGroupPadding)
						: false;

					return (
						<Fragment key={idx}>
							{!isFirstItem ? (
								<AppLayoutSidebarNavDivider
									// As the divider is placed at the start of each group, padding top is determined by the previous group
									disablePaddingTop={prevGroupDisableGroupPadding}
									disablePaddingBottom={disableGroupPadding}
								/>
							) : null}
							{groupItems.map((item, idx) => (
								<AppLayoutSidebarNavListItem
									key={idx}
									item={item}
									activePath={activePath}
								/>
							))}
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
	const { closeMobileMenu } = useAppLayoutContext();

	// Link list item
	if ('href' in item) {
		const active = item.href === activePath;
		return (
			<AppLayoutSidebarNavItemInner
				hasEndElement={Boolean(endElement)}
				isActive={activePath === item.href}
				onClick={closeMobileMenu} // Let the click event bubble up and close the menu on press of interactive item
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
				hasEndElement={Boolean(endElement)}
				isActive={false}
				onClick={closeMobileMenu} // Let the click event bubble up and close the menu on press of interactive item
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
	hasEndElement: boolean;
	isActive: boolean;
	onClick?: () => void;
}>;

function AppLayoutSidebarNavItemInner({
	children,
	hasEndElement,
	isActive,
	onClick,
}: AppLayoutSidebarNavItemInnerProps) {
	return (
		<li
			css={{
				// Styles shared between all list items (links, buttons and text)
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

				// Styles shared between interactive list items (links and buttons)
				'> a, > button': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',

					gap: mapSpacing(0.75),
					color: boxPalette[isActive ? 'foregroundText' : 'foregroundAction'],
					...(isActive && {
						fontWeight: tokens.fontWeight.bold,
						background: boxPalette.backgroundShadeAlt,
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

				// Styles specific to text list items
				'> span': {
					color: boxPalette.foregroundText,
				},

				// Styles specific to link list items
				'> a': {
					textDecoration: 'none',
				},
			}}
			onClick={onClick}
		>
			{children}
		</li>
	);
}

function AppLayoutSidebarNavDivider({
	disablePaddingTop,
	disablePaddingBottom,
}: {
	disablePaddingTop: boolean;
	disablePaddingBottom: boolean;
}) {
	return (
		<Box
			as="li"
			paddingTop={disablePaddingTop ? 0 : 1}
			paddingBottom={disablePaddingBottom ? 0 : 1}
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
