import { useMemo } from 'react';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { SideNavProps } from './SideNav';
import { hasNestedActiveItem } from './utils';

export type SideNavLinkListProps = {
	activePath: string | undefined;
	items: SideNavProps['items'];
};

export function SideNavLinkList({
	activePath,
	items: itemsProp,
}: SideNavLinkListProps) {
	const items = useMemo(() => {
		return itemsProp.map((item) => ({
			...item,
			isActive:
				item.href === activePath || hasNestedActiveItem(item.items, activePath),
		}));
	}, [activePath, itemsProp]);

	return <LinkList activePath={activePath} items={items} />;
}

type LinkListProps = {
	activePath: string | undefined;
	items: (SideNavProps['items'][number] & { isActive?: boolean })[];
};

function LinkList({ activePath, items }: LinkListProps) {
	return (
		<SideNavGroup>
			{items.map(({ isActive, items, ...item }, idx) => {
				return (
					<SideNavLink
						key={idx}
						isActive={isActive}
						isCurrentPage={item.href === activePath}
						{...item}
					>
						{items?.length ? (
							<LinkList items={items} activePath={activePath} />
						) : null}
					</SideNavLink>
				);
			})}
		</SideNavGroup>
	);
}
