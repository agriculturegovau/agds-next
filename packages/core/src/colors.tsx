import { css } from '@emotion/react';
import { tokens } from './tokens';

export const themeVars = {
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

export const themeValues = {
	foreground: {
		text: `var(${themeVars.foreground.text})`,
		action: `var(${themeVars.foreground.action})`,
		focus: `var(${themeVars.foreground.focus})`,
		muted: `var(${themeVars.foreground.muted})`,
	},
	background: {
		body: `var(${themeVars.background.body})`,
		shade: `var(${themeVars.background.shade})`,
		bodyAlt: `var(${themeVars.background.bodyAlt})`,
		shadeAlt: `var(${themeVars.background.shadeAlt})`,
	},
	border: `var(${themeVars.border})`,
};

// names of color
export const paletteVars = {
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

export type Palette = Partial<Record<keyof typeof paletteVars, string>>;

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
export const defaultPalette = {
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

export type PaletteKey = keyof typeof paletteVars;

export const globalVars = {
	light: {
		foreground: {
			text: `var(${paletteVars.lightForegroundText})`,
			action: `var(${paletteVars.lightForegroundAction})`,
			focus: `var(${paletteVars.lightForegroundFocus})`,
			muted: `var(${paletteVars.lightForegroundMuted})`,
		},
		background: {
			body: `var(${paletteVars.lightBackgroundBody})`,
			shade: `var(${paletteVars.lightBackgroundShade})`,
			bodyAlt: `var(${paletteVars.lightBackgroundBodyAlt})`,
			shadeAlt: `var(${paletteVars.lightBackgroundShadeAlt})`,
		},
		border: `var(${paletteVars.lightBorder})`,
	},
	dark: {
		foreground: {
			text: `var(${paletteVars.darkForegroundText})`,
			action: `var(${paletteVars.darkForegroundAction})`,
			focus: `var(${paletteVars.darkForegroundFocus})`,
			muted: `var(${paletteVars.darkForegroundMuted})`,
		},
		background: {
			body: `var(${paletteVars.darkBackgroundBody})`,
			shade: `var(${paletteVars.darkBackgroundShade})`,
			bodyAlt: `var(${paletteVars.darkBackgroundBodyAlt})`,
			shadeAlt: `var(${paletteVars.darkBackgroundShadeAlt})`,
		},
		border: `var(${paletteVars.darkBorder})`,
	},
	accent: `var(${paletteVars.accent}, ${themeValues.foreground.action})`, // NOTE: accent is optional
	error: `var(${paletteVars.error})`,
	success: `var(${paletteVars.success})`,
	warning: `var(${paletteVars.warning})`,
	info: `var(${paletteVars.info})`,
} as const;

export const themes = {
	light: css({
		'--agds-foreground-text': globalVars.light.foreground.text,
		'--agds-foreground-action': globalVars.light.foreground.action,
		'--agds-foreground-focus': globalVars.light.foreground.focus,
		'--agds-foreground-muted': globalVars.light.foreground.muted,
		'--agds-background-body': globalVars.light.background.body,
		'--agds-background-shade': globalVars.light.background.shade,
		'--agds-background-body-alt': globalVars.light.background.bodyAlt,
		'--agds-background-shade-alt': globalVars.light.background.shadeAlt,
		'--agds-border': globalVars.light.border,
	}),
	dark: css({
		'--agds-foreground-text': globalVars.dark.foreground.text,
		'--agds-foreground-action': globalVars.dark.foreground.action,
		'--agds-foreground-focus': globalVars.dark.foreground.focus,
		'--agds-foreground-muted': globalVars.dark.foreground.muted,
		'--agds-background-body': globalVars.dark.background.body,
		'--agds-background-shade': globalVars.dark.background.shade,
		'--agds-background-body-alt': globalVars.dark.background.bodyAlt,
		'--agds-background-shade-alt': globalVars.dark.background.shadeAlt,
		'--agds-border': globalVars.dark.border,
	}),
} as const;
// FIXME: naming ... BoxTheme? there is confusion around the meaning of `theme` between
// the variables being applied to the site as a whole or the subset of colors being applied to content in a box.
export type BoxTheme = keyof typeof themes;

// TODO: Move this out of here. Maybe packs
export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: themeValues.foreground.focus,
	outlineOffset: 0.5 * tokens.unit,
};
