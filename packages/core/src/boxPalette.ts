import { css } from '@emotion/react';
import { themeVars } from './theme';
import { tokens } from './tokens';
// Box Palette

const boxPaletteVars = {
	foregroundText: '--agds-foreground-text',
	foregroundAction: '--agds-foreground-action',
	foregroundFocus: '--agds-foreground-focus',
	foregroundMuted: '--agds-foreground-muted',
	backgroundBody: '--agds-background-body',
	backgroundShade: '--agds-background-shade',
	backgroundBodyAlt: '--agds-background-body-alt',
	backgroundShadeAlt: '--agds-background-shade-alt',
	border: '--agds-border',
};

export const boxPalettes = {
	light: css({
		[boxPaletteVars.foregroundText]: `var(${themeVars.lightForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.lightForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.lightForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.lightForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.lightBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.lightBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.lightBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.lightBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.lightBorder})`,
	}),
	dark: css({
		[boxPaletteVars.foregroundText]: `var(${themeVars.darkForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.darkForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.darkForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.darkForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.darkBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.darkBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.darkBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.darkBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.darkBorder})`,
	}),
} as const;

export type BoxPalette = keyof typeof boxPalettes;

export const boxPalette = {
	foreground: {
		text: `var(${boxPaletteVars.foregroundText})`,
		action: `var(${boxPaletteVars.foregroundAction})`,
		focus: `var(${boxPaletteVars.foregroundFocus})`,
		muted: `var(${boxPaletteVars.foregroundMuted})`,
	},
	background: {
		body: `var(${boxPaletteVars.backgroundBody})`,
		shade: `var(${boxPaletteVars.backgroundShade})`,
		bodyAlt: `var(${boxPaletteVars.backgroundBodyAlt})`,
		shadeAlt: `var(${boxPaletteVars.backgroundShadeAlt})`,
	},
	border: `var(${boxPaletteVars.border})`,
};

// TODO: Move this out of here. Maybe packs
export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: boxPalette.foreground.focus,
	outlineOffset: 0.5 * tokens.unit,
};
