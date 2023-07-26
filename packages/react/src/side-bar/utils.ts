import { useId } from '../core';

export const sideBarLocalPaletteVars = {
	hover: '--side-bar-hover',
};

export const sideBarLocalPalette = {
	hover: `var(${sideBarLocalPaletteVars.hover})`,
};

export const hoverColorMap = {
	body: 'shade',
	bodyAlt: 'shadeAlt',
} as const;

export type SideBarBackground = keyof typeof hoverColorMap;

export function useSideBarIds() {
	const autoId = useId();
	return {
		buttonId: `side-bar-${autoId}-button`,
		bodyId: `side-bar-${autoId}-body`,
	};
}
