import { AppLayoutSidebarNavProps } from './AppLayoutSidebarNav';

// The breakpoint where we show the sidebar in a two column layout
export const APP_LAYOUT_DESKTOP_BREAKPOINT = 'xl';

export const APP_LAYOUT_SIDEBAR_WIDTH = '16rem'; // 256 px

export const findBestMatch = (
	items: AppLayoutSidebarNavProps['items'],
	activePath?: string
) => {
	if (!activePath) return '';

	const allHrefs = items
		.flatMap((group) => (Array.isArray(group) ? group : group.items))
		.flatMap((group) => ('items' in group ? group.items : group))
		.map((item) =>
			item && 'href' in item && item.href !== undefined ? item.href : ''
		);

	let exactMatch,
		bestMatch = '';

	for (const href of allHrefs) {
		if (href === activePath) {
			exactMatch = href;
			break;
		}

		if (activePath?.startsWith(href) && href.length > bestMatch.length) {
			bestMatch = href;
		}
	}

	return exactMatch || bestMatch;
};
