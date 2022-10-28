export const backgroundMap = {
	body: 'backgroundBody',
	bodyAlt: 'backgroundBodyAlt',
} as const;

export type HeroBannerBackground = keyof typeof backgroundMap;
