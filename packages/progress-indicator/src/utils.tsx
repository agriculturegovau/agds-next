import { boxPalette } from '@ag.ds-next/core';

export const hoverMapper = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
};

export type ProgressIndicatorBackgroundType = keyof typeof hoverMapper;
