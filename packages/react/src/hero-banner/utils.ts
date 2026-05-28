export const backgroundMap = {
	body: 'backgroundBody',
	bodyAlt: 'backgroundBodyAlt',
	shade: 'backgroundShade',
	shadeAlt: 'backgroundShadeAlt',
} as const;

export type HeroBannerBackground = keyof typeof backgroundMap;
