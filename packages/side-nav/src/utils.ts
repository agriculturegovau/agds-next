import { useId } from '@reach/auto-id';
import { LinkProps } from '@ag.ds-next/core';

export function findBestMatch(items: LinkProps[], activePath?: string) {
	if (!activePath) return '';
	let bestMatch = '';

	for (const link of items) {
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

export const localPaletteVars = {
	hover: '--sideNav-hover',
};

export const localPalette = {
	hover: `var(${localPaletteVars.hover})`,
};

export const useSideNavIds = () => {
	const autoId = useId();
	return {
		buttonId: `sideNav-${autoId}-button`,
		bodyId: `sideNav-${autoId}-body`,
		navId: `sideNav-${autoId}-nav`,
		titleId: `sideNav-${autoId}-title`,
	};
};

export const variantMap = {
	default: {
		background: 'body',
		hover: 'shade',
	},
	alt: {
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
} as const;

export type SideNavVariant = keyof typeof variantMap;
