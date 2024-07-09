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
	endElement?: ReactNode;
	icon?: ComponentType<IconProps>;
	items?: NavItem[];
	level?: number;
};

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	background?: 'body' | 'bodyAlt';
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
	/** When to show sub-level navigation items. */
	subLevelVisible?: 'always' | 'whenActive';
};

type ItemWithIsActive = NavItem & {
	isActive?: boolean;
	items?: ItemWithIsActive[];
};

// Recursively add `isActive` to any sub-level items
const addIsActive =
	(activePath: AppLayoutSidebarNavProps['activePath'], level = 0) =>
	(item: ItemWithIsActive): ItemWithIsActive => {
		const isCurrentPage = 'href' in item && item.href === activePath;
		const isActive =
			isCurrentPage || hasSubLevelActiveItem(item.items, activePath);

		return {
			...item,
			isActive,
			items:
				isActive || item.items?.length
					? item?.items?.map(addIsActive(activePath, level + 1))
					: undefined,
			level: level + 1,
		};
	};

export const AppLayoutSidebarNav = ({
	activePath,
	background,
	items,
	subLevelVisible = 'whenActive',
}: AppLayoutSidebarNavProps) => {
	return (
		<Flex as="nav" flexDirection="column" aria-label="main" paddingBottom={1.5}>
			<Flex as="ul" flexDirection="column">
				{items.map((group, index) => {
					const isFirstItem = index === 0;
					const groupItems = (Array.isArray(group) ? group : group.items).map(
						addIsActive(activePath)
					);

					const disableGroupPadding = Array.isArray(group)
						? false
						: Boolean(group.options?.disableGroupPadding);

					const prevGroup = items[index - 1];
					const prevGroupDisableGroupPadding = prevGroup
						? Array.isArray(prevGroup)
							? false
							: Boolean(prevGroup.options?.disableGroupPadding)
						: false;

					return (
						<Fragment key={index}>
							{!isFirstItem ? (
								<AppLayoutSidebarNavDivider
									// As the divider is placed at the start of each group, padding top is determined by the previous group
									disablePaddingTop={prevGroupDisableGroupPadding}
									disablePaddingBottom={disableGroupPadding}
								/>
							) : null}
							{groupItems.map((item, index) => {
								const isOpen =
									subLevelVisible === 'always' ||
									hasSubLevelActiveItem(item.items, activePath);

								return (
									<AppLayoutSidebarNavListItem
										activePath={activePath}
										background={background}
										isOpen={isOpen}
										item={item}
										key={index}
									/>
								);
							})}
						</Fragment>
					);
				})}
			</Flex>
		</Flex>
	);
};

type AppLayoutSidebarNavListItemProps = {
	activePath?: string;
	background?: 'body' | 'bodyAlt';
	isOpen: boolean;
	item: NavItem | ItemWithIsActive;
};

function AppLayoutSidebarNavListItem({
	activePath,
	background,
	isOpen,
	item,
}: AppLayoutSidebarNavListItemProps) {
	const Link = useLinkComponent();
	const {
		endElement,
		icon: Icon,
		label,
		level,
		items,
		...restItemProps
	} = item;
	const { closeMobileMenu } = useAppLayoutContext();

	// Link list item
	if ('href' in item) {
		const isCurrentPage = item.href === activePath;
		return (
			<AppLayoutSidebarNavItemInner
				background={background}
				hasEndElement={Boolean(endElement)}
				isCurrentPage={isCurrentPage}
				isActive={isOpen}
				level={'level' in item ? item.level : undefined}
				onClick={closeMobileMenu} // Let the click event bubble up and close the menu on press of interactive item
			>
				<Link
					aria-current={isCurrentPage ? 'page' : undefined}
					{...restItemProps}
				>
					{Icon ? <Icon color="inherit" /> : null}
					<span>{label}</span>
					{endElement}
				</Link>

				{isOpen && (
					<Flex as="ul" flexDirection="column">
						{item.items?.map?.((item) => (
							<AppLayoutSidebarNavListItem
								activePath={activePath}
								isOpen={isOpen}
								item={item}
								key={item.label?.toString()}
							/>
						))}
					</Flex>
				)}
			</AppLayoutSidebarNavItemInner>
		);
	}

	// Button list item
	if ('onClick' in item) {
		return (
			<AppLayoutSidebarNavItemInner
				background={background}
				hasEndElement={Boolean(endElement)}
				isActive={false}
				isCurrentPage={false}
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
		<AppLayoutSidebarNavItemInner
			background={background}
			isActive={false}
			isCurrentPage={false}
			hasEndElement={false}
		>
			<Stack as="span" gap={0.25}>
				{label}
			</Stack>
		</AppLayoutSidebarNavItemInner>
	);
}

type AppLayoutSidebarNavItemInnerProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	hasEndElement: boolean;
	isActive: boolean;
	isCurrentPage: boolean;
	level?: number;
	onClick?: () => void;
}>;

function AppLayoutSidebarNavItemInner({
	background,
	isCurrentPage,
	children,
	hasEndElement,
	isActive,
	level,
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
					paddingLeft: mapSpacing(level === 2 ? 3 : 1.5),
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
						fontWeight: isCurrentPage
							? tokens.fontWeight.bold
							: tokens.fontWeight.normal,
						background:
							boxPalette[
								isCurrentPage
									? 'selectedMuted'
									: background === 'body'
									? 'backgroundBody'
									: 'backgroundBodyAlt'
							],
						'&:before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftStyle: 'solid',
							borderLeftColor: isCurrentPage
								? boxPalette.selected
								: boxPalette.borderMuted,
							borderLeftWidth: tokens.borderWidth.xl,
						},
					}),

					...(hasEndElement && {
						'& > :last-child': {
							marginLeft: 'auto',
						},
					}),

					'&:hover': {
						background:
							boxPalette[
								background === 'body' ? 'backgroundShade' : 'backgroundShadeAlt'
							],
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

function hasSubLevelActiveItem(
	items: ItemWithIsActive[] | undefined,
	bestMatch: string | undefined
): boolean {
	if (!(items?.length && bestMatch)) return false;
	return items.some((item) => {
		if ('href' in item && item.href === bestMatch) {
			return true;
		}
		if (
			'items' in item &&
			item.items?.length &&
			hasSubLevelActiveItem(item.items, bestMatch)
		) {
			return true;
		}
	});
}
