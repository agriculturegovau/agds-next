export const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
} as const;

export type HeroCategoryBannerVariant = keyof typeof variantMap;
