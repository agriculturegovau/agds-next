import { boxPalette } from '../core';

const backgroundMap = {
	body: {
		linkHoverBg: boxPalette.backgroundShade,
		linkActiveBg: boxPalette.backgroundBody,
	},
	bodyAlt: {
		linkHoverBg: boxPalette.backgroundShadeAlt,
		linkActiveBg: boxPalette.backgroundBodyAlt,
	},
} as const;

export type MainNavBackground = keyof typeof backgroundMap;

const localPaletteVars = {
	linkHoverBg: '--agds-main-nav-link-hover-bg',
	linkActiveBg: '--agds-main-nav-link-active-fg',
};

export const localPalette = {
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
};

export function setLocalPaletteVars(background: MainNavBackground) {
	return {
		[localPaletteVars.linkHoverBg]: backgroundMap[background].linkHoverBg,
		[localPaletteVars.linkActiveBg]: backgroundMap[background].linkActiveBg,
	};
}
