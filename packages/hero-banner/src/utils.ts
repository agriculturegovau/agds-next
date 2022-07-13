export const variantMap = {
	body: 'backgroundBody',
	bodyAlt: 'backgroundBodyAlt',
} as const;

export type HeroBannerBackground = keyof typeof variantMap;
