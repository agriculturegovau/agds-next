import { boxPalette } from '@ag.ds-next/core';

export const hoverColorMap = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
};

export type ProgressIndicatorBackground = keyof typeof hoverColorMap;
