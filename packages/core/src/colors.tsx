import { css } from '@emotion/react';
import { tokens } from './tokens';

export const paletteVars = {
	foreground: {
		text: '--agds-foreground-text',
		action: '--agds-foreground-action',
		focus: '--agds-foreground-focus',
		muted: '--agds-foreground-muted',
	},
	background: {
		body: '--agds-background-body',
		shade: '--agds-background-shade',
		bodyAlt: '--agds-background-body-alt',
		shadeAlt: '--agds-background-shade-alt',
	},
	border: '--agds-border',
};

export const boxPalette = {
	foreground: {
		text: `var(${paletteVars.foreground.text})`,
		action: `var(${paletteVars.foreground.action})`,
		focus: `var(${paletteVars.foreground.focus})`,
		muted: `var(${paletteVars.foreground.muted})`,
	},
	background: {
		body: `var(${paletteVars.background.body})`,
		shade: `var(${paletteVars.background.shade})`,
		bodyAlt: `var(${paletteVars.background.bodyAlt})`,
		shadeAlt: `var(${paletteVars.background.shadeAlt})`,
	},
	border: `var(${paletteVars.border})`,
};

// names of color
export const themeVars = {
	// Light
	lightForegroundText: '--agds-light-foreground-text',
	lightForegroundAction: '--agds-light-foreground-action',
	lightForegroundFocus: '--agds-light-foreground-focus',
	lightForegroundMuted: '--agds-light-foreground-muted',
	lightBackgroundBody: '--agds-light-background-body',
	lightBackgroundShade: '--agds-light-background-shade',
	lightBackgroundBodyAlt: '--agds-light-background-body-alt',
	lightBackgroundShadeAlt: '--agds-light-background-shade-alt',
	lightBorder: '--agds-light-border',
	// Dark
	darkForegroundText: '--agds-dark-foreground-text',
	darkForegroundAction: '--agds-dark-foreground-action',
	darkForegroundFocus: '--agds-dark-foreground-focus',
	darkForegroundMuted: '--agds-dark-foreground-muted',
	darkBackgroundBody: '--agds-dark-background-body',
	darkBackgroundShade: '--agds-dark-background-shade',
	darkBackgroundBodyAlt: '--agds-dark-background-body-alt',
	darkBackgroundShadeAlt: '--agds-dark-background-shade-alt',
	darkBorder: '--agds-dark-border',
	// System colors
	accent: '--agds-accent',
	error: '--agds-error',
	success: '--agds-success',
	warning: '--agds-warning',
	info: '--agds-info',
} as const;

export type Theme = Partial<Record<keyof typeof themeVars, string>>;

// GOLD theme

/** Colors light theme */

export type ColorTheme = {
	foreground: {
		text: string;
		action: string;
		focus: string;
		muted: string;
	};
	background: {
		body: string;
		shade: string;
		bodyAlt: string;
		shadeAlt: string;
	};
	border: string;
};

// Default palette from GOLD.
export const defaultTheme = {
	lightForegroundText: '#313131',
	lightForegroundAction: '#00698f',
	lightForegroundFocus: '#9263de',
	lightForegroundMuted: '#626262',
	lightBackgroundBody: '#FFFFFF',
	lightBackgroundShade: '#f5f5f5',
	lightBackgroundBodyAlt: '#ebebeb',
	lightBackgroundShadeAlt: '#e0e0e0',
	lightBorder: '#808080',
	darkForegroundText: '#FFFFFF',
	darkForegroundAction: '#61daff',
	darkForegroundFocus: '#c390f9',
	darkForegroundMuted: '#bdd2d7',
	darkBackgroundBody: '#135e70',
	darkBackgroundShade: '#104f5f',
	darkBackgroundBodyAlt: '#0d414d',
	darkBackgroundShadeAlt: '#0a323c',
	darkBorder: '#95b7bf',
	// system colors
	accent: undefined, // accent does not exist in GOLD.
	error: '#d60000',
	success: '#0b996c',
	warning: '#f69900',
	info: '#00bfe9',
} as const;

export const globalPalette = {
	light: {
		foreground: {
			text: `var(${themeVars.lightForegroundText})`,
			action: `var(${themeVars.lightForegroundAction})`,
			focus: `var(${themeVars.lightForegroundFocus})`,
			muted: `var(${themeVars.lightForegroundMuted})`,
		},
		background: {
			body: `var(${themeVars.lightBackgroundBody})`,
			shade: `var(${themeVars.lightBackgroundShade})`,
			bodyAlt: `var(${themeVars.lightBackgroundBodyAlt})`,
			shadeAlt: `var(${themeVars.lightBackgroundShadeAlt})`,
		},
		border: `var(${themeVars.lightBorder})`,
	},
	dark: {
		foreground: {
			text: `var(${themeVars.darkForegroundText})`,
			action: `var(${themeVars.darkForegroundAction})`,
			focus: `var(${themeVars.darkForegroundFocus})`,
			muted: `var(${themeVars.darkForegroundMuted})`,
		},
		background: {
			body: `var(${themeVars.darkBackgroundBody})`,
			shade: `var(${themeVars.darkBackgroundShade})`,
			bodyAlt: `var(${themeVars.darkBackgroundBodyAlt})`,
			shadeAlt: `var(${themeVars.darkBackgroundShadeAlt})`,
		},
		border: `var(${themeVars.darkBorder})`,
	},
	accent: `var(${themeVars.accent}, ${boxPalette.foreground.action})`, // NOTE: accent is optional
	error: `var(${themeVars.error})`,
	success: `var(${themeVars.success})`,
	warning: `var(${themeVars.warning})`,
	info: `var(${themeVars.info})`,
} as const;

export const boxPalettes = {
	light: css({
		'--agds-foreground-text': globalPalette.light.foreground.text,
		'--agds-foreground-action': globalPalette.light.foreground.action,
		'--agds-foreground-focus': globalPalette.light.foreground.focus,
		'--agds-foreground-muted': globalPalette.light.foreground.muted,
		'--agds-background-body': globalPalette.light.background.body,
		'--agds-background-shade': globalPalette.light.background.shade,
		'--agds-background-body-alt': globalPalette.light.background.bodyAlt,
		'--agds-background-shade-alt': globalPalette.light.background.shadeAlt,
		'--agds-border': globalPalette.light.border,
	}),
	dark: css({
		'--agds-foreground-text': globalPalette.dark.foreground.text,
		'--agds-foreground-action': globalPalette.dark.foreground.action,
		'--agds-foreground-focus': globalPalette.dark.foreground.focus,
		'--agds-foreground-muted': globalPalette.dark.foreground.muted,
		'--agds-background-body': globalPalette.dark.background.body,
		'--agds-background-shade': globalPalette.dark.background.shade,
		'--agds-background-body-alt': globalPalette.dark.background.bodyAlt,
		'--agds-background-shade-alt': globalPalette.dark.background.shadeAlt,
		'--agds-border': globalPalette.dark.border,
	}),
} as const;
export type BoxPalette = keyof typeof boxPalettes;

// TODO: Move this out of here. Maybe packs
export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: boxPalette.foreground.focus,
	outlineOffset: 0.5 * tokens.unit,
};

type ThemeKey = keyof typeof themeVars;
export function mergeTheme(theme: Theme) {
	return Object.fromEntries(
		Object.entries(themeVars).map(([key, variableName]) => [
			variableName,
			theme[key as ThemeKey] ?? defaultTheme[key as ThemeKey],
		])
	);
}
