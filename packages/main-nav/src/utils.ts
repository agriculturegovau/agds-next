import { boxPalette } from '@ag.ds-next/core';
import { NavListLink } from './NavList';

export const bottomBarPadding = 0.5;

export const variantMap = {
	light: {
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.accent,
	},
	lightAlt: {
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.accent,
	},
	dark: {
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.accent,
	},
	darkAlt: {
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.accent,
	},
	agriculture: {
		background: 'body',
		hover: 'bodyAlt',
		bottomBar: boxPalette.accent,
	},
} as const;

export const hoverMap = {
	body: 'shade',
	bodyAlt: 'shadeAlt',
} as const;

export type MainNavVariant = keyof typeof variantMap;

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

export function findBestMatch(
	links: NavListLink[] | undefined,
	activePath?: string
) {
	if (!activePath || !links) return '';
	let bestMatch = '';

	for (const link of links) {
		if (!link.href || link.href === activePath) return link.href;
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
