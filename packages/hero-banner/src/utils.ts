export const variantMap = {
	light: {
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	lightAlt: {
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
	dark: {
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	darkAlt: {
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
} as const;

export type HeroBannerVariant = keyof typeof variantMap;
