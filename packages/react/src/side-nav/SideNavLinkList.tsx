import { useCallback, useMemo } from 'react';
import { SideNavUnorderedList } from './SideNavUnorderedList';
import { SideNavListItem } from './SideNavListItem';
import { SideNavProps } from './SideNav';
import { hasNestedActiveItem } from './utils';
import { SideNavLink } from './SideNavLink';

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
	showSubLevel: SideNavProps['showSubLevel'];
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
			hasNestedActiveItem(items, activePath),
		[activePath, showSubLevel]
	);

	return (
		<SideNavUnorderedList isOpen={isOpen(items, isListOpen)}>
			{items.map(({ isActive, items, ...item }) => {
				const hasNestedItemsIndicator =
					items && 'length' in items && showSubLevel === 'whenActive';

				return (
					<SideNavListItem
						isActive={isActive || hasNestedActiveItem(items, activePath)}
						key={item.href}
					>
						<SideNavLink
							hasNestedItemsIndicator={hasNestedItemsIndicator}
							isCurrentPage={item.href === activePath}
							isOpen={isOpen(items, isActive)}
							key={item.href}
							nestedItemsIndicatorLabel={
								hasNestedItemsIndicator
									? `. Has ${items.length} sub-level links.`
									: undefined
							}
							{...item}
						/>

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
