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

export const localVars = {
	linkHoverBg: '--sideNav-linkHoverBg',
	linkActiveBg: '--sideNav-linkActiveBg',
	bottomBar: '--sideNav-bottomBar',
};

export const localValues = {
	linkHoverBg: `var(${localVars.linkHoverBg})`,
	linkActiveBg: `var(${localVars.linkActiveBg})`,
	bottomBar: `var(${localVars.bottomBar})`,
};
