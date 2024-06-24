import { useCallback, useMemo } from 'react';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { SideNavProps } from './SideNav';
import { hasNestedActiveItem } from './utils';

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
	nestedItemsVariant: SideNavProps['nestedItemsVariant'];
};

export function SideNavLinkList({
	activePath,
	items: itemsProp,
	nestedItemsVariant,
}: SideNavLinkListProps) {
	const items = useMemo(() => {
		return itemsProp.map((item) => ({
			...item,
			isActive:
				item.href === activePath || hasNestedActiveItem(item.items, activePath),
		}));
	}, [activePath, itemsProp]);

	return (
		<LinkList
			activePath={activePath}
			items={items}
			nestedItemsVariant={nestedItemsVariant}
		/>
	);
}

type LinkListProps = {
	activePath: string | undefined;
	items: (SideNavProps['items'][number] & { isActive?: boolean })[];
	nestedItemsVariant: SideNavProps['nestedItemsVariant'];
};

function LinkList({ activePath, items, nestedItemsVariant }: LinkListProps) {
	const isOpen = useCallback(
		(items?: LinkListProps['items']) =>
			nestedItemsVariant === 'always-open' ||
			hasNestedActiveItem(items, activePath),
		[activePath, nestedItemsVariant]
	);

	return (
		<SideNavGroup isOpen={isOpen(items)}>
			{items.map(({ isActive, items, ...item }, index) => {
				return (
					<SideNavLink
						isActive={isActive}
						isCurrentPage={item.href === activePath}
						isOpen={isOpen(items)}
						key={index}
						{...item}
					>
						{items?.length ? (
							<LinkList
								activePath={activePath}
								items={items}
								nestedItemsVariant={nestedItemsVariant}
							/>
						) : null}
					</SideNavLink>
				);
			})}
		</SideNavGroup>
	);
}
