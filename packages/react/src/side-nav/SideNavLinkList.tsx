import { useCallback, useMemo } from 'react';
import { SideNavUnorderedList } from './SideNavUnorderedList';
import { SideNavListItem } from './SideNavListItem';
import { SideNavProps } from './SideNav';
import { hasSubLevelActiveItem } from './utils';
import { SideNavLink } from './SideNavLink';

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
	showSubLevel: SideNavProps['showSubLevel'];
};

type ItemWithIsActive = Omit<SideNavLinkListProps['items'][number], 'items'> & {
	isActive?: boolean;
	items?: ItemWithIsActive[];
};

// Recursively add `isActive` to any sub-level items
const addIsActive =
	(activePath: SideNavLinkListProps['activePath']) =>
	(item: ItemWithIsActive): ItemWithIsActive => {
		const withNestedActiveItems = hasSubLevelActiveItem(item.items, activePath);
		const isCurrentPage = item.href === activePath;
		const isActive = isCurrentPage || withNestedActiveItems;

		return {
			...item,
			isActive,
			items:
				item.items?.length || isActive
					? item?.items?.map(addIsActive(activePath))
					: item.items,
		};
	};

export const SideNavLinkList = ({
	activePath,
	items,
	showSubLevel,
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
			showSubLevel={showSubLevel}
		/>
	);
};

type LinkListProps = {
	activePath: string | undefined;
	isListOpen: boolean;
	items: ItemWithIsActive[];
	showSubLevel: SideNavProps['showSubLevel'];
};

const LinkList = ({
	activePath,
	isListOpen,
	items,
	showSubLevel,
}: LinkListProps) => {
	const isOpen = useCallback(
		(
			items?: SideNavLinkListProps['items'] | ItemWithIsActive[],
			isActive?: boolean
		) =>
			isActive ||
			showSubLevel === 'always' ||
			hasSubLevelActiveItem(items, activePath),
		[activePath, showSubLevel]
	);

	return (
		<SideNavUnorderedList isOpen={isOpen(items, isListOpen)}>
			{items.map(({ isActive, items, ...item }) => {
				const numberOfItems = items?.length || 0;
				const hasNestedItemsIndicator =
					numberOfItems > 0 && showSubLevel === 'whenActive';

				return (
					<SideNavListItem
						isActive={isActive || hasSubLevelActiveItem(items, activePath)}
						key={item.href}
					>
						<SideNavLink
							hasNestedItemsIndicator={hasNestedItemsIndicator}
							isCurrentPage={item.href === activePath}
							isOpen={isOpen(items, isActive)}
							key={item.href}
							numberOfItems={numberOfItems}
							{...item}
						/>

						{/* Recursively add the `LinkList` for sub-level items */}
						{items?.length ? (
							<LinkList
								activePath={activePath}
								isListOpen={isOpen(items, item.href === activePath)}
								items={items}
								showSubLevel={showSubLevel}
							/>
						) : null}
					</SideNavListItem>
				);
			})}
		</SideNavUnorderedList>
	);
};
