import { NavListLink, NavListItem } from './NavList';

export const bottomBarPadding = 0.5;

export const hoverMap = {
	body: 'shade',
	bodyAlt: 'shadeAlt',
} as const;

export type MainNavBackground = keyof typeof hoverMap;

export const localPaletteVars = {
	linkHoverBg: '--nav-linkHoverBg',
	linkActiveBg: '--nav-linkActiveBg',
	bottomBar: '--nav-bottomBar',
};
export const localPalette = {
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
	bottomBar: `var(${localPaletteVars.bottomBar})`,
};

export function findBestMatch(items: NavListItem[], activePath?: string) {
	if (!activePath) return '';

	const links = items.filter(
		(item) => 'href' in item && item.href
	) as (NavListLink & { href: string })[];

	let bestMatch = '';

	for (const link of links) {
		if (link.href === activePath) return link.href;
		if (
			activePath?.startsWith(link.href) &&
			link.href !== '/' &&
			link.href.length > bestMatch.length
		) {
			bestMatch = link.href;
		}
	}

	return bestMatch;
}
