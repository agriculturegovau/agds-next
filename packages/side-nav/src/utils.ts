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
	linkHoverBg: '--sideNav-linkHoverBg',
	linkActiveBg: '--sideNav-linkActiveBg',
};

export const localPalette = {
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
};
