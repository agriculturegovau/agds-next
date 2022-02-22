import { useId } from '@reach/auto-id';

export function findBestMatch(items: { href: string }[], activePath?: string) {
	if (!activePath) return '';
	let bestMatch = '';

	for (const link of items) {
		if (link.href === activePath) return link.href;
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
	background: '--sideNav-background',
	linkHoverBg: '--sideNav-linkHoverBg',
	linkActiveBg: '--sideNav-linkActiveBg',
};

export const localPalette = {
	background: `var(${localPaletteVars.background})`,
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
};

export const useSideNavIds = (initialId?: string | undefined) => {
	const id = useId(initialId);
	return {
		titleId: `${id}-title`,
		bodyId: `${id}-default`,
	};
};

const normalStyles = {
	background: { xs: 'bodyAlt', md: 'body' },
	hover: { xs: 'shadeAlt', md: 'shade' },
};

const altStyles = {
	background: { xs: 'body', md: 'bodyAlt' },
	hover: { xs: 'shade', md: 'shadeAlt' },
};

export const variantMap = {
	light: {
		palette: 'light',
		...normalStyles,
	},
	lightAlt: {
		palette: 'light',
		...altStyles,
	},
	dark: {
		palette: 'dark',
		...normalStyles,
	},
	darkAlt: {
		palette: 'dark',
		...altStyles,
	},
} as const;

export type SideNavVariant = keyof typeof variantMap;
