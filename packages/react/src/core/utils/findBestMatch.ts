export function findBestMatch(
	items: Record<string, unknown>[],
	activePath: string | undefined
) {
	if (!activePath) return '';

	let bestMatch = '';

	const filteredLinks = items.filter((item) => 'href' in item && item.href) as {
		href: string;
	}[];

	for (const link of filteredLinks) {
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
