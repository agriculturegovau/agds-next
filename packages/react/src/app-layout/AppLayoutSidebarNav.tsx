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
import { BaseButton, BaseButtonProps } from '../button';
import { ChevronRightIcon, IconProps } from '../icon';
import { Stack } from '../stack';
import { useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarProps } from './AppLayoutSidebar';

type NavLink = Omit<LinkProps, 'children'>;

type NavButton = Omit<BaseButtonProps, 'children'>;

export type NavItem<
	T extends HTMLElement = HTMLAnchorElement | HTMLButtonElement,
> = (T extends HTMLAnchorElement ? NavLink : NavButton) & {
	label: ReactNode;
	endElement?: ReactNode;
	icon?: ComponentType<IconProps>;
	isActive?: boolean;
	items?: NavItem[];
	level?: number;
};

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	background: 'body' | 'bodyAlt';
	items: (
		| NavItem[]
		| { items: NavItem[]; options?: { disableGroupPadding: boolean } }
	)[];
	subLevelVisible?: AppLayoutSidebarProps['subLevelVisible'];
};

// Recursively add `isActive` to any sub-level items
const addIsActive =
	(activePath: AppLayoutSidebarNavProps['activePath'], level = 0) =>
	(item: NavItem): NavItem => {
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
	subLevelVisible,
}: AppLayoutSidebarNavProps) => {
	return (
		<Stack aria-label="main" as="nav" paddingBottom={1.5}>
			<Stack as="ul">
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
									disablePaddingBottom={disableGroupPadding}
									disablePaddingTop={prevGroupDisableGroupPadding}
								/>
							) : null}
							{groupItems.map((item, index) => {
								const isActiveGroup = hasSubLevelActiveItem(
									item.items,
									activePath
								);
								const isOpen = subLevelVisible === 'always' || isActiveGroup;

								return (
									<AppLayoutSidebarNavListItem
										activePath={activePath}
										background={background}
										isActiveGroup={isActiveGroup}
										isOpen={isOpen}
										item={item}
										key={index}
										subLevelVisible={subLevelVisible}
									/>
								);
							})}
						</Fragment>
					);
				})}
			</Stack>
		</Stack>
	);
};

type AppLayoutSidebarNavListItemProps = {
	activePath?: string;
	background: AppLayoutSidebarNavProps['background'];
	isActiveGroup: boolean;
	isOpen: boolean;
	item: NavItem;
	subLevelVisible: AppLayoutSidebarNavProps['subLevelVisible'];
};

function AppLayoutSidebarNavListItem({
	activePath,
	background,
	isActiveGroup,
	isOpen,
	item,
	subLevelVisible,
}: AppLayoutSidebarNavListItemProps) {
	const Link = useLinkComponent();
	const {
		endElement,
		icon: Icon,
		isActive,
		items,
		label,
		level,
		...restItemProps
	} = item;
	const { closeMobileMenu } = useAppLayoutContext();
	const numberOfItems = items?.length || 0;
	const hasSubLevelItemsIndicator =
		numberOfItems > 0 && subLevelVisible !== 'always';

	// Link list item
	if ('href' in item) {
		const isCurrentPage = item.href === activePath;
		return (
			<AppLayoutSidebarNavItemInner
				background={background}
				hasEndElement={Boolean(endElement)}
				isActive={isActiveGroup}
				isCurrentPage={isCurrentPage}
				isOpen={isOpen}
				level={item.level}
				onClick={closeMobileMenu} // Let the click event bubble up and close the menu on press of interactive item
			>
				<Link
					aria-current={isCurrentPage ? 'page' : undefined}
					aria-label={
						hasSubLevelItemsIndicator
							? `${label}${
									isActive ? ', has expanded sub links' : ', has sub links'
							  }`
							: undefined
					}
					{...(restItemProps as NavLink)}
				>
					{Icon && level === 1 && <Icon color="inherit" />}

					{level === 2 && <span aria-hidden>&ndash;</span>}

					<span css={{ flexGrow: 1 }}>{label}</span>

					{endElement}

					{hasSubLevelItemsIndicator && (
						<ChevronRightIcon
							css={{ transform: isActive ? 'rotate(90deg)' : undefined }}
							size="md"
						/>
					)}
				</Link>

				{Boolean(item.items?.length) && (isOpen || isCurrentPage) && (
					<Stack as="ul">
						{item.items?.map?.((item) => (
							<AppLayoutSidebarNavListItem
								activePath={activePath}
								background={background}
								isActiveGroup={Boolean(isActive)}
								isOpen={isOpen}
								item={item}
								key={item.label?.toString()}
								subLevelVisible={subLevelVisible}
							/>
						))}
					</Stack>
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
				isOpen={false}
				onClick={closeMobileMenu} // Let the click event bubble up and close the menu on press of interactive item
			>
				<BaseButton {...(restItemProps as NavButton)}>
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
			hasEndElement={false}
			isActive={false}
			isCurrentPage={false}
			isOpen={false}
		>
			<Stack as="span" gap={0.25}>
				{label}
			</Stack>
		</AppLayoutSidebarNavItemInner>
	);
}

type AppLayoutSidebarNavItemInnerProps = PropsWithChildren<{
	background: AppLayoutSidebarNavProps['background'];
	hasEndElement: boolean;
	isActive: boolean;
	isCurrentPage: boolean;
	isOpen: boolean;
	level?: number;
	onClick?: () => void;
}>;

function AppLayoutSidebarNavItemInner({
	background,
	children,
	hasEndElement,
	isCurrentPage,
	isActive,
	isOpen,
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
					paddingRight: mapSpacing(1),

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
					color:
						(isActive && level !== 2) || isCurrentPage
							? boxPalette.foregroundText
							: boxPalette.foregroundAction,
					...((isActive || isCurrentPage || isOpen) && {
						fontWeight: isCurrentPage
							? tokens.fontWeight.bold
							: tokens.fontWeight.normal,
						background: isCurrentPage ? boxPalette.selectedMuted : undefined,
						'&::before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftStyle: 'solid',
							borderLeftWidth: tokens.borderWidth.xl,
							...(isCurrentPage && { borderLeftColor: boxPalette.selected }),
							...(!isCurrentPage &&
								isActive && { borderLeftColor: boxPalette.borderMuted }),
							...(!isCurrentPage &&
								!isActive &&
								isOpen && { borderLeft: 'none' }),
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
						[`& > span:nth-of-type(${level})`]: packs.underline,
					},

					...focusStyles,
					':focus-visible': {
						// Elevate focused item above next sibling
						zIndex: tokens.zIndex.elevated,
						// Bring the focus ring inside the element so that it remains on screen and sibling element borders don't show in the offset
						outlineOffset: `-${packs.outline.outlineWidth}`,

						// Make the left border sit below the constrained focus ring
						'&::before': {
							zIndex: -1,
						},
					},
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
			aria-hidden
			as="li"
			paddingBottom={disablePaddingBottom ? 0 : 1}
			paddingTop={disablePaddingTop ? 0 : 1}
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
	items: NavItem[] | undefined,
	bestMatch: string | undefined
): boolean {
	if (!(items?.length && bestMatch)) return false;
	return items.some(
		(item) =>
			('href' in item && item.href === bestMatch) ||
			('items' in item && hasSubLevelActiveItem(item.items, bestMatch))
	);
}
