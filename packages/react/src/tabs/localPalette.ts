import { backgroundContextPalette, boxPalette } from '../core';

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

export function setLocalPaletteVars() {
	return {
		[localPaletteVars.panelBg]: backgroundContextPalette.current,
		[localPaletteVars.panelFg]: boxPalette.foregroundText,
		[localPaletteVars.buttonBg]: backgroundContextPalette.current,
		[localPaletteVars.buttonFg]: boxPalette.foregroundAction,
		[localPaletteVars.buttonBgHover]: backgroundContextPalette.shade,
		[localPaletteVars.buttonFgHover]: boxPalette.foregroundText,
	};
}
