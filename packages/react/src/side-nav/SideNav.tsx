import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Box } from '../box';
import { LinkProps } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarBackground,
} from '../_collapsing-side-bar';
import { SearchInput } from '../search-input';
import { SideNavTitle } from './SideNavTitle';
import { findBestMatch, useSideNavIds } from './utils';
import { SideNavLinkList } from './SideNavLinkList';

type BasicSideNavMenuItemType = Omit<LinkProps, 'children'> & {
	label: ReactNode;
};

interface SideNavMenuItemType<
	ItemType extends BasicSideNavMenuItemType = BasicSideNavMenuItemType,
> extends BasicSideNavMenuItemType {
	items?: ItemType[];
}

export interface SideNavProps<ItemType extends SideNavMenuItemType> {
	/** Used for highlighting the active element. */
	activePath: string;
	/** Used as the title of the expand/collapse trigger on smaller screen sizes. */
	collapseTitle: string;
	/** If SideNav is placed on 'bodyAlt' background, please set this to 'bodyAlt'. */
	background?: CollapsingSideBarBackground;
	/** The list of links. */
	items: ItemType[];
	/** The title is placed at the top of the list of links. */
	title: string;
	/** If provided, the title will be rendered as an anchor element. */
	titleLink?: string;
	/** Determines if the nav can be filtered using a text box */
	isFilterable?: boolean;
	/** The function used to filter the values */
	filterFunction?: FilterFunction<ItemType>;
}

type FilterFunction<ItemType extends SideNavMenuItemType> = (
	item: ItemType,
	searchTerm: string
) => boolean;

export function SideNav<ItemType extends SideNavMenuItemType<ItemType>>({
	activePath,
	collapseTitle,
	items,
	background = 'body',
	title,
	titleLink,
	isFilterable,
	filterFunction,
}: SideNavProps<ItemType>) {
	const { navId, titleId } = useSideNavIds();
	const bestMatch = findBestMatch(items, activePath);
	const [searchTerm, setSearchTerm] = useState('');

	const filterFn: FilterFunction<ItemType> = useCallback(
		(item, searchTerm) => {
			if (filterFunction) {
				return filterFunction?.(item, searchTerm);
			} else {
				const filterTarget =
					typeof item.label === 'string' ? item.label : item.href;
				return searchTerm.trim()
					? Boolean(
							filterTarget?.includes(searchTerm.trim().toLowerCase()) ||
								item.items?.some((subItem) => filterFn(subItem, searchTerm))
					  )
					: true;
			}
		},
		[filterFunction]
	);

	const filteredItems =
		useMemo(
			() => items?.filter((item) => filterFn(item, searchTerm)),
			[searchTerm, items, filterFn]
		) || [];

	return (
		<CollapsingSideBar
			collapseButtonLabel={collapseTitle}
			background={background}
		>
			<Box
				as="nav"
				aria-labelledby={titleId}
				id={navId}
				fontFamily="body"
				fontSize="sm"
				lineHeight="default"
			>
				{isFilterable && (
					<Box role="search" aria-label="navigation" padding={1}>
						<SearchInput
							label="Filter navigation"
							value={searchTerm}
							onChange={setSearchTerm}
							maxWidth="xl"
							hideOptionalLabel
							id={title.replaceAll(' ', '-') + '-filter'}
						/>
					</Box>
				)}
				<SideNavTitle
					id={titleId}
					href={titleLink}
					isCurrentPage={activePath === titleLink}
				>
					{title}
				</SideNavTitle>
				<SideNavLinkList activePath={bestMatch} items={filteredItems} />
			</Box>
		</CollapsingSideBar>
	);
}
