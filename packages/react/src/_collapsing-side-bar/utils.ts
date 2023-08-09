import { useId } from '../core';

export const collapsingSideBarLocalPaletteVars = {
	hover: '--collapsing-side-bar-hover',
};

export const collapsingSideBarLocalPalette = {
	hover: `var(${collapsingSideBarLocalPaletteVars.hover})`,
};

export const hoverColorMap = {
	body: 'shade',
	bodyAlt: 'shadeAlt',
} as const;

export type CollapsingSideBarBackground = keyof typeof hoverColorMap;

export function useCollapsingSideBarIds() {
	const autoId = useId();
	return {
		buttonId: `collapsing-side-bar-${autoId}-button`,
		bodyId: `collapsing-side-bar-${autoId}-body`,
	};
}
