export const BORDER_WIDTH_XXL = 8;

export const HEADER_HEIGHT = { md: '6rem' };

// Ported from main-nav/utils
export function findBestMatch(links: { href: string }[], activePath: string) {
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
