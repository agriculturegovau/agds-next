import { useId } from '../core';
import { SideNavProps } from './SideNav';

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

export function hasNestedActiveItem(
	items: SideNavProps['items'] | undefined,
	bestMatch: string | undefined
): boolean {
	if (!(items?.length && bestMatch)) return false;
	return items.some((item) => {
		if (item.href === bestMatch) {
			return true;
		}
		if (item.items?.length && hasNestedActiveItem(item.items, bestMatch)) {
			return true;
		}
	});
}

export const localPaletteVars = {
	hover: '--sideNav-hover',
};

export const localPalette = {
	hover: `var(${localPaletteVars.hover})`,
};

export const activeColorMap = {
	body: 'shade',
	bodyAlt: 'shadeAlt',
} as const;

export type SideNavBackground = keyof typeof activeColorMap;

export function useSideNavIds() {
	const autoId = useId();
	return {
		buttonId: `sideNav-${autoId}-button`,
		bodyId: `sideNav-${autoId}-body`,
		navId: `sideNav-${autoId}-nav`,
		titleId: `sideNav-${autoId}-title`,
	};
}
