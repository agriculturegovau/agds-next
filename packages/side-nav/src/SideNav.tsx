import { ReactNode, ComponentProps } from 'react';

import { SideNavContainer } from './SideNavContainer';
import { SideNavTitle } from './SideNavTitle';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { findBestMatch } from './utils';

type SideNavProps = LinkListProps & {
	variant?: ComponentProps<typeof SideNavContainer>['variant'];
	title: ReactNode;
	titleLink: string; // TODO: should this be optional
};

export function SideNav({
	activePath,
	items,
	variant = 'light',
	titleLink,
	title,
	...props
}: SideNavProps) {
	return (
		<SideNavContainer variant={variant} {...props}>
			<SideNavTitle href={titleLink}>{title}</SideNavTitle>
			<LinkList activePath={activePath} items={items} />
		</SideNavContainer>
	);
}

type SideNavMenuItemType = {
	href: string;
	label: string;
	items?: SideNavMenuItemType[];
};

type LinkListProps = {
	activePath: string;
	items: SideNavMenuItemType[];
};

// QUESTION: Should this be public api
function LinkList({ activePath, items }: LinkListProps) {
	const bestMatch = findBestMatch(items, activePath);
	return (
		<SideNavGroup>
			{items.map(({ items: subItems, ...item }, index) => (
				<SideNavLink key={index} active={item.href === bestMatch} {...item}>
					{subItems?.length ? (
						<LinkList items={subItems} activePath={activePath} />
					) : null}
				</SideNavLink>
			))}
		</SideNavGroup>
	);
}
