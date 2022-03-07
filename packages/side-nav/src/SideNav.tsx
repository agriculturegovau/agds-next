import { ReactNode, ComponentProps } from 'react';

import { SideNavContainer } from './SideNavContainer';
import { SideNavTitle } from './SideNavTitle';
import { SideNavGroup } from './SideNavGroup';
import { SideNavLink } from './SideNavLink';
import { findBestMatch, useSideNavIds } from './utils';
import { LinkProps } from '@ag.ds-next/core';

export type SideNavProps = LinkListProps & {
	'aria-label'?: string;
	collapseTitle: string;
	variant?: ComponentProps<typeof SideNavContainer>['variant'];
	title: ReactNode;
	titleLink: string; // TODO: should this be optional
};

export function SideNav({
	'aria-label': ariaLabel = 'side navigation',
	activePath,
	collapseTitle,
	items,
	variant = 'light',
	titleLink,
	title,
}: SideNavProps) {
	const sideNavIds = useSideNavIds();
	return (
		<SideNavContainer
			aria-label={ariaLabel}
			ids={sideNavIds}
			variant={variant}
			collapseTitle={collapseTitle}
		>
			<SideNavTitle
				isCurrentPage={activePath === titleLink}
				id={sideNavIds.titleId}
				href={titleLink}
			>
				{title}
			</SideNavTitle>
			<LinkList activePath={activePath} items={items} />
		</SideNavContainer>
	);
}

type SideNavMenuItemType = Omit<LinkProps, 'children'> & {
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
				<SideNavLink
					key={index}
					active={item.href === bestMatch}
					aria-current={item.href === activePath ? 'page' : undefined}
					{...item}
				>
					{subItems?.length ? (
						<LinkList items={subItems} activePath={activePath} />
					) : null}
				</SideNavLink>
			))}
		</SideNavGroup>
	);
}
