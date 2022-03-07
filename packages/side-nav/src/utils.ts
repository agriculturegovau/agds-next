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

export const useSideNavIds = (initialId?: string | undefined) => {
	const id = useId(initialId);
	return {
		buttonId: `${id}-button`,
		bodyId: `${id}-default`,
		navId: `${id}-nav`,
		titleId: `${id}-title`,
	};
};

const defaultStyles = {
	background: { xs: 'bodyAlt', md: 'body' },
	hover: { xs: 'shadeAlt', md: 'shade' },
} as const;

const altStyles = {
	background: { xs: 'body', md: 'bodyAlt' },
	hover: { xs: 'shade', md: 'shadeAlt' },
} as const;

export const variantMap = {
	light: {
		palette: 'light',
		...defaultStyles,
	},
	lightAlt: {
		palette: 'light',
		...altStyles,
	},
	dark: {
		palette: 'dark',
		...defaultStyles,
	},
	darkAlt: {
		palette: 'dark',
		...altStyles,
	},
} as const;

export type SideNavVariant = keyof typeof variantMap;
