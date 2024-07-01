import { useCallback, useMemo } from 'react';
import { SideNavUnorderedList } from './SideNavUnorderedList';
import { SideNavListItem } from './SideNavListItem';
import { SideNavProps } from './SideNav';
import { hasNestedActiveItem } from './utils';
import { SideNavLink } from './SideNavLink';

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
	nestedItemsVariant: SideNavProps['nestedItemsVariant'];
};

type ItemWithIsActive = Omit<SideNavLinkListProps['items'][number], 'items'> & {
	isActive: boolean;
	items?: ItemWithIsActive[];
};

const addIsActive =
	(activePath: SideNavLinkListProps['activePath']) =>
	(
		item: SideNavProps['items'][number] | ItemWithIsActive
	): ItemWithIsActive => ({
		...item,
		isActive:
			item.href === activePath || hasNestedActiveItem(item.items, activePath),
		items: item.items?.length
			? item.items.map(addIsActive(activePath))
			: undefined,
	});

export const SideNavLinkList = ({
	activePath,
	items,
	nestedItemsVariant,
}: SideNavLinkListProps) => {
	const itemsWithIsActive = useMemo(() => {
		return items.map(addIsActive(activePath));
	}, [activePath, items]);

	const isTopLevelItemActive =
		itemsWithIsActive.find((item) => item.isActive)?.href === activePath;

	return (
		<LinkList
			activePath={activePath}
			isListOpen={isTopLevelItemActive}
			items={itemsWithIsActive}
			nestedItemsVariant={nestedItemsVariant}
		/>
	);
};

type LinkListProps = {
	activePath: string | undefined;
	isListOpen: boolean;
	items: ItemWithIsActive[];
	nestedItemsVariant: SideNavProps['nestedItemsVariant'];
};

const LinkList = ({
	activePath,
	isListOpen,
	items,
	nestedItemsVariant,
}: LinkListProps) => {
	const isOpen = useCallback(
		(
			items?: SideNavLinkListProps['items'] | ItemWithIsActive[],
			isActive?: boolean
		) =>
			isActive ||
			nestedItemsVariant === 'alwaysOpen' ||
			hasNestedActiveItem(items, activePath),
		[activePath, nestedItemsVariant]
	);

	return (
		<SideNavUnorderedList isOpen={isOpen(items, isListOpen)}>
			{items.map(({ isActive, items, ...item }) => {
				const hasNestedItemsIndicator =
					Boolean(items?.length) && nestedItemsVariant === 'openOnNav';

				return (
					<SideNavListItem
						isActive={isActive || hasNestedActiveItem(items, activePath)}
						key={item.href}
						{...item}
					>
						<SideNavLink
							isActive={isActive || hasNestedActiveItem(items, activePath)}
							isCurrentPage={item.href === activePath}
							isOpen={isOpen(items, isActive)}
							key={item.href}
							hasNestedItemsIndicator={hasNestedItemsIndicator}
							{...item}
						/>

						{items?.length ? (
							<LinkList
								activePath={activePath}
								isListOpen={isOpen(items, item.href === activePath)}
								items={items}
								nestedItemsVariant={nestedItemsVariant}
							/>
						) : null}
					</SideNavListItem>
				);
			})}
		</SideNavUnorderedList>
	);
};
