import { css } from '@emotion/react';
import { boxPalette } from '../core';

const actionPaletteVars = {
	action: '--agds-action-palette',
} as const;

export const actionPalette = {
	action: `var(${actionPaletteVars.action})`,
} as const;

export const actionPalettes = {
	base: css({
		[actionPaletteVars.action]: boxPalette.foregroundAction,
	}),
	hover: css({
		[actionPaletteVars.action]: boxPalette.foregroundAction,
	}),
};
