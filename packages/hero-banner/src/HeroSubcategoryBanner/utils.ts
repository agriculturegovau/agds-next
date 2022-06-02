export const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
	},
} as const;

export type HeroSubcategoryBannerVariant = keyof typeof variantMap;
