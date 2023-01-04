import { boxPalette } from '../core';

export const hoverColorMap = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
};

export type AccordionBackground = keyof typeof hoverColorMap;
