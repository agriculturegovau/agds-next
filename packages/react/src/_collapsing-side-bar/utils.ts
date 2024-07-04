import { boxPalette, useId } from '../core';

// Note: SideNav uses these vars since it supports 2 backgrounds
export const collapsingSideBarHoverProp = '--collapsing-side-bar-hover';
export const collapsingSideBarHoverVar = `var(${collapsingSideBarHoverProp})`;

export const hoverColorMap = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
} as const;

export type CollapsingSideBarBackground = keyof typeof hoverColorMap;

export function useCollapsingSideBarIds() {
	const autoId = useId();
	return {
		bodyId: `collapsing-side-bar-${autoId}-body`,
		headingId: `collapsing-side-bar-${autoId}-heading`,
	};
}
