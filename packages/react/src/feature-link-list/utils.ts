import { boxPalette } from '@ag.ds-next/react/core';

export const hoverColorMap = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
};

export type FeatureLinkListBackground = keyof typeof hoverColorMap;
