import { useId } from '../core';
import { type SideNavProps } from './types';

export function findBestMatch(
	items: SideNavProps['items'],
	activePath?: string
) {
	if (!activePath) return '';
	let bestMatch = '';
	const allItems = flattenItems(items);

	for (const link of allItems) {
		if (!link.href || link.href === activePath) return link.href;
		if (
			activePath?.startsWith(link.href) &&
			link.href.length > bestMatch.length
		) {
			bestMatch = link.href;
		}
	}

	return bestMatch;
}

export function flattenItems(items: SideNavProps['items']) {
	const allItems: SideNavProps['items'] = [];

	for (const item of items) {
		const { items, ...restItem } = item;
		allItems.push(restItem);
		if (items?.length) allItems.push(...flattenItems(items));
	}

	return allItems;
}

export function hasSubLevelActiveItem(
	items: SideNavProps['items'] | undefined,
	bestMatch: string | undefined
): boolean {
	if (!(items?.length && bestMatch)) return false;
	return items.some(
		(item) =>
			item.href === bestMatch ||
			(item.items?.length && hasSubLevelActiveItem(item.items, bestMatch))
	);
}

export function useSideNavIds() {
	const autoId = useId();
	return {
		titleId: `sideNav-${autoId}-title`,
	};
}
