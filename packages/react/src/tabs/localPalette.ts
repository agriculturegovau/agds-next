import { boxPalette } from '../core';

const backgroundMap = {
	body: {
		background: boxPalette.backgroundBody,
		inactiveTab: boxPalette.backgroundBodyAlt,
		inactiveTabHover: boxPalette.backgroundShade,
	},
	bodyAlt: {
		background: boxPalette.backgroundBodyAlt,
		inactiveTab: boxPalette.backgroundShadeAlt,
		inactiveTabHover: boxPalette.backgroundShade,
	},
} as const;

export type Background = keyof typeof backgroundMap;

const localPaletteVars = {
	background: '--agds-tabs-background',
	inactiveTab: '--agds-tabs-inactiveTab',
	inactiveTabHover: '--agds-tabs-inactiveTabHover',
};

export const localPalette = {
	background: `var(${localPaletteVars.background})`,
	inactiveTab: `var(${localPaletteVars.inactiveTab})`,
	inactiveTabHover: `var(${localPaletteVars.inactiveTabHover})`,
};

export function getLocalPaletteVars(background: Background) {
	return {
		[localPaletteVars.background]: backgroundMap[background].background,
		[localPaletteVars.inactiveTab]: backgroundMap[background].inactiveTab,
		[localPaletteVars.inactiveTabHover]:
			backgroundMap[background].inactiveTabHover,
	};
}
