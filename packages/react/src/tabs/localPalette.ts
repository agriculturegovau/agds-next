import { boxPalette } from '../core';

const backgroundMap = {
	body: {
		panelBg: boxPalette.backgroundBody,
		panelFg: boxPalette.foregroundText,
		buttonBg: boxPalette.backgroundBody,
		buttonFg: boxPalette.foregroundAction,
		buttonBgHover: boxPalette.backgroundShade,
		buttonFgHover: boxPalette.foregroundText,
	},
	bodyAlt: {
		panelBg: boxPalette.backgroundBodyAlt,
		panelFg: boxPalette.foregroundText,
		buttonBg: boxPalette.backgroundBodyAlt,
		buttonFg: boxPalette.foregroundAction,
		buttonBgHover: boxPalette.backgroundShade,
		buttonFgHover: boxPalette.foregroundText,
	},
} as const;

export type Background = keyof typeof backgroundMap;

const localPaletteVars = {
	panelBg: '--agds-tabs-panel-bg',
	panelFg: '--agds-tabs-panel-fg',
	buttonBg: '--agds-tabs-button-bg',
	buttonFg: '--agds-tabs-button-fg',
	buttonBgHover: '--agds-tabs-button-bg-hover',
	buttonFgHover: '--agds-tabs-button-fg-hover',
};

export const localPalette = {
	panelBg: `var(${localPaletteVars.panelBg})`,
	panelFg: `var(${localPaletteVars.panelFg})`,
	buttonBg: `var(${localPaletteVars.buttonBg})`,
	buttonFg: `var(${localPaletteVars.buttonFg})`,
	buttonBgHover: `var(${localPaletteVars.buttonBgHover})`,
	buttonFgHover: `var(${localPaletteVars.buttonFgHover})`,
};

export function setLocalPaletteVars(background: Background) {
	return {
		[localPaletteVars.panelBg]: backgroundMap[background].panelBg,
		[localPaletteVars.panelFg]: backgroundMap[background].panelFg,
		[localPaletteVars.buttonBg]: backgroundMap[background].buttonBg,
		[localPaletteVars.buttonFg]: backgroundMap[background].buttonFg,
		[localPaletteVars.buttonBgHover]: backgroundMap[background].buttonBgHover,
		[localPaletteVars.buttonFgHover]: backgroundMap[background].buttonFgHover,
	};
}
