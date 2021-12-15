import { css } from '@emotion/react';
import { tokens } from './tokens';

// Used in Box component
export const themeColors = {
	foreground: {
		text: `var(--agds-foreground-text)`,
		action: `var(--agds-foreground-action)`,
		focus: `var(--agds-foreground-focus)`,
		muted: `var(--agds-foreground-muted)`,
	},
	background: {
		page: `var(--agds-background-page)`,
		shade: `var(--agds-background-shade)`,
		pageAlt: `var(--agds-background-page-alt)`,
		shadeAlt: `var(--agds-background-shade-alt)`,
	},
	border: `var(--agds-border)`,
};

// names of color
export const paletteCssVars = {
	// Light
	lightForegroundText: '--agds-light-foreground-text',
	lightForegroundAction: '--agds-light-foreground-action',
	lightForegroundFocus: '--agds-light-foreground-focus',
	lightForegroundMuted: '--agds-light-foreground-muted',
	lightBackgroundPage: '--agds-light-background-page',
	lightBackgroundShade: '--agds-light-background-shade',
	lightBackgroundPageAlt: '--agds-light-background-page-alt',
	lightBackgroundShadeAlt: '--agds-light-background-shade-alt',
	lightBorder: '--agds-light-border',
	// Dark
	darkForegroundText: '--agds-dark-foreground-text',
	darkForegroundAction: '--agds-dark-foreground-action',
	darkForegroundFocus: '--agds-dark-foreground-focus',
	darkForegroundMuted: '--agds-dark-foreground-muted',
	darkBackgroundPage: '--agds-dark-background-page',
	darkBackgroundShade: '--agds-dark-background-shade',
	darkBackgroundPageAlt: '--agds-dark-background-page-alt',
	darkBackgroundShadeAlt: '--agds-dark-background-shade-alt',
	darkBorder: '--agds-dark-border',
	// System colors
	accent: '--agds-accent',
	error: '--agds-error',
	success: '--agds-success',
	warning: '--agds-warning',
	info: '--agds-info',
	hint: '--agds-hint',
	hintAlt: '--agds-hint-alt',
} as const;

export type Palette = Partial<Record<keyof typeof paletteCssVars, string>>;

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
		page: string;
		shade: string;
		pageAlt: string;
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
	lightBackgroundPage: '#FFFFFF',
	lightBackgroundShade: '#f5f5f5',
	lightBackgroundPageAlt: '#ebebeb',
	lightBackgroundShadeAlt: '#e0e0e0',
	lightBorder: '#808080',
	darkForegroundText: '#FFFFFF',
	darkForegroundAction: '#61daff',
	darkForegroundFocus: '#c390f9',
	darkForegroundMuted: '#bdd2d7',
	darkBackgroundPage: '#135e70',
	darkBackgroundShade: '#104f5f',
	darkBackgroundPageAlt: '#0d414d',
	darkBackgroundShadeAlt: '#0a323c',
	darkBorder: '#95b7bf',
	// system colors
	accent: themeColors.foreground.action, // accent does not exist in GOLD. Here we fallback to the dark or light themed action color
	error: '#d60000',
	success: '#0b996c',
	warning: '#f69900',
	info: '#00bfe9',
	hint: '#6f777b',
	hintAlt: '#61696b',
} as const;

export type PaletteKey = keyof typeof paletteCssVars;

export const globalVariables = {
	light: {
		foreground: {
			text: `var(${paletteCssVars.lightForegroundText})`,
			action: `var(${paletteCssVars.lightForegroundAction})`,
			focus: `var(${paletteCssVars.lightForegroundFocus})`,
			muted: `var(${paletteCssVars.lightForegroundMuted})`,
		},
		background: {
			page: `var(${paletteCssVars.lightBackgroundPage})`,
			shade: `var(${paletteCssVars.lightBackgroundShade})`,
			pageAlt: `var(${paletteCssVars.lightBackgroundPageAlt})`,
			shadeAlt: `var(${paletteCssVars.lightBackgroundShadeAlt})`,
		},
		border: `var(${paletteCssVars.lightBorder})`,
	},
	dark: {
		foreground: {
			text: `var(${paletteCssVars.darkForegroundText})`,
			action: `var(${paletteCssVars.darkForegroundAction})`,
			focus: `var(${paletteCssVars.darkForegroundFocus})`,
			muted: `var(${paletteCssVars.darkForegroundMuted})`,
		},
		background: {
			page: `var(${paletteCssVars.darkBackgroundPage})`,
			shade: `var(${paletteCssVars.darkBackgroundShade})`,
			pageAlt: `var(${paletteCssVars.darkBackgroundPageAlt})`,
			shadeAlt: `var(${paletteCssVars.darkBackgroundShadeAlt})`,
		},
		border: `var(${paletteCssVars.darkBorder})`,
	},
	accent: `var(${paletteCssVars.accent})`,
	error: `var(${paletteCssVars.error})`,
	success: `var(${paletteCssVars.success})`,
	warning: `var(${paletteCssVars.warning})`,
	info: `var(${paletteCssVars.info})`,
	hint: `var(${paletteCssVars.hint})`,
	hintAlt: `var(${paletteCssVars.hintAlt})`,
} as const;

export type BoxThemeColors = {
	foreground: keyof typeof themeColors.foreground;
	background: keyof typeof themeColors.background;
};

export const themes = {
	light: css({
		'--agds-foreground-text': globalVariables.light.foreground.text,
		'--agds-foreground-action': globalVariables.light.foreground.action,
		'--agds-foreground-focus': globalVariables.light.foreground.focus,
		'--agds-foreground-muted': globalVariables.light.foreground.muted,
		'--agds-background-page': globalVariables.light.background.page,
		'--agds-background-shade': globalVariables.light.background.shade,
		'--agds-background-page-alt': globalVariables.light.background.pageAlt,
		'--agds-background-shade-alt': globalVariables.light.background.shadeAlt,
		'--agds-border': globalVariables.light.border,
	}),
	dark: css({
		'--agds-foreground-text': globalVariables.dark.foreground.text,
		'--agds-foreground-action': globalVariables.dark.foreground.action,
		'--agds-foreground-focus': globalVariables.dark.foreground.focus,
		'--agds-foreground-muted': globalVariables.dark.foreground.muted,
		'--agds-background-page': globalVariables.dark.background.page,
		'--agds-background-shade': globalVariables.dark.background.shade,
		'--agds-background-page-alt': globalVariables.dark.background.pageAlt,
		'--agds-background-shade-alt': globalVariables.dark.background.shadeAlt,
		'--agds-border': globalVariables.dark.border,
	}),
} as const;
// FIXME: naming ... BoxTheme? there is confusion around the meaning of `theme` between
// the variables being applied to the site as a whole or the subset of colors being applied to content in a box.
export type BoxTheme = keyof typeof themes;
// Compositions - todo: move me somewhere else

export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: themeColors.foreground.focus,
	outlineOffset: 0.5 * tokens.unit,
};
