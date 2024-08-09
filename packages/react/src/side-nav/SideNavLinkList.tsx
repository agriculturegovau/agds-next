import { useCallback, useMemo } from 'react';
import { SideNavUnorderedList } from './SideNavUnorderedList';
import { SideNavListItem } from './SideNavListItem';
import { hasSubLevelActiveItem } from './utils';
import { SideNavLink } from './SideNavLink';
import { type SideNavLinkListProps, type SideNavProps } from './types';

type ItemWithIsActive = Omit<SideNavLinkListProps['items'][number], 'items'> & {
	isActive?: boolean;
	items?: ItemWithIsActive[];
};

// Recursively add `isActive` to any sub-level items
const addIsActive =
	(activePath: SideNavLinkListProps['activePath']) =>
	(item: ItemWithIsActive): ItemWithIsActive => {
		const isCurrentPage = item.href === activePath;
		const isActive =
			isCurrentPage || hasSubLevelActiveItem(item.items, activePath);

		return {
			...item,
			isActive,
			items:
				isActive || item.items?.length
					? item.items?.map(addIsActive(activePath))
					: item.items,
		};
	};

export const SideNavLinkList = ({
	activePath,
	items,
	subLevelVisible,
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
			subLevelVisible={subLevelVisible}
		/>
	);
};

type LinkListProps = {
	activePath: string | undefined;
	isListOpen: boolean;
	items: ItemWithIsActive[];
	subLevelVisible: SideNavProps['subLevelVisible'];
};

const LinkList = ({
	activePath,
	isListOpen,
	items,
	subLevelVisible,
}: LinkListProps) => {
	const isOpen = useCallback(
		(
			items?: SideNavLinkListProps['items'] | ItemWithIsActive[],
			isActive?: boolean
		) =>
			isActive ||
			subLevelVisible === 'always' ||
			hasSubLevelActiveItem(items, activePath),
		[activePath, subLevelVisible]
	);

	return (
		<SideNavUnorderedList isOpen={isOpen(items, isListOpen)}>
			{items.map(({ isActive, items, ...item }) => {
				const numberOfItems = items?.length || 0;
				const hasSubLevelItemsIndicator =
					numberOfItems > 0 && subLevelVisible === 'whenActive';

				return (
					<SideNavListItem
						isActive={isActive || hasSubLevelActiveItem(items, activePath)}
						key={item.href}
					>
						<SideNavLink
							hasSubLevelItemsIndicator={hasSubLevelItemsIndicator}
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
								subLevelVisible={subLevelVisible}
							/>
						) : null}
					</SideNavListItem>
				);
			})}
		</SideNavUnorderedList>
	);
};
