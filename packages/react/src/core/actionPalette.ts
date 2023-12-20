import { boxPalette } from '../core';

const actionPaletteVars = {
	fg: '--agds-action-palette-panel-bg',
	bg: '--agds-action-palette-panel-fg',
} as const;

export const actionPalette = {
	fg: `var(${actionPaletteVars.fg})`,
	bg: `var(${actionPaletteVars.bg})`,
} as const;

export function setBaseActionPaletteVars() {
	return {
		[actionPaletteVars.fg]: boxPalette.foregroundAction,
		[actionPaletteVars.bg]: boxPalette.foregroundAction,
	};
}

export function setHoverActionPaletteVars() {
	return {
		[actionPaletteVars.fg]: boxPalette.foregroundText,
		[actionPaletteVars.bg]: boxPalette.foregroundText,
	};
}
