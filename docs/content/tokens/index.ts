export const TOKEN_PAGES = {
	border: {
		slug: 'border',
		label: 'Border',
		pageTitle: 'Border tokens',
		description: 'Guidelines for using borders across the Design System.',
	},
	breakpoints: {
		slug: 'breakpoints',
		label: 'Breakpoint',
		pageTitle: 'Breakpoint tokens',
		description:
			'Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths.',
	},
	colour: {
		slug: 'colour',
		label: 'Colour',
		pageTitle: 'Colour tokens',
		description:
			'How to use colour to design consistent, purposeful, and accessible products.',
	},
	maxWidth: {
		slug: 'max-width',
		label: 'Max width',
		pageTitle: 'Max width tokens',
		description:
			'Used to set the maximum width of elements and containers in a page layout.',
	},
	spacing: {
		slug: 'spacing',
		label: 'Spacing',
		pageTitle: 'Spacing tokens',
		description:
			'Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics.',
	},
	typography: {
		slug: 'typography',
		label: 'Typography',
		pageTitle: 'Typography tokens',
		description:
			'A set of predefined text styles to ensure text is consistent and legible.',
	},
	elevation: {
		slug: 'elevation',
		label: 'Elevation',
		pageTitle: 'Elevation tokens',
		description:
			'A set of predefined tokens for handling the relative distance between two surfaces along the z-axis.',
	},
} as const;

export const TOKEN_NAV_LINKS = Object.values(TOKEN_PAGES).map((item) => ({
	href: `/foundations/tokens/${item.slug}`,
	...item,
}));

export function getTokensBreadcrumbs(item: { label: string }) {
	return [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Foundations',
			href: '/foundations',
		},
		{
			label: 'Tokens',
			href: '/foundations/tokens',
		},
		{
			label: item.label,
		},
	];
}
