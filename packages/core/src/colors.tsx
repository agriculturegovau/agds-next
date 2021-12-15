import { css } from '@emotion/react';
import { tokens } from './tokens';

// Used in Box component
export const themeVars = {
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
export const paletteVars = {
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
	accent: themeVars.foreground.action, // accent does not exist in GOLD. Here we fallback to the dark or light themed action color
	error: '#d60000',
	success: '#0b996c',
	warning: '#f69900',
	info: '#00bfe9',
	hint: '#6f777b',
	hintAlt: '#61696b',
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
			page: `var(${paletteVars.lightBackgroundPage})`,
			shade: `var(${paletteVars.lightBackgroundShade})`,
			pageAlt: `var(${paletteVars.lightBackgroundPageAlt})`,
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
			page: `var(${paletteVars.darkBackgroundPage})`,
			shade: `var(${paletteVars.darkBackgroundShade})`,
			pageAlt: `var(${paletteVars.darkBackgroundPageAlt})`,
			shadeAlt: `var(${paletteVars.darkBackgroundShadeAlt})`,
		},
		border: `var(${paletteVars.darkBorder})`,
	},
	accent: `var(${paletteVars.accent})`,
	error: `var(${paletteVars.error})`,
	success: `var(${paletteVars.success})`,
	warning: `var(${paletteVars.warning})`,
	info: `var(${paletteVars.info})`,
	hint: `var(${paletteVars.hint})`,
	hintAlt: `var(${paletteVars.hintAlt})`,
} as const;

export type BoxthemeVars = {
	foreground: keyof typeof themeVars.foreground;
	background: keyof typeof themeVars.background;
};

export const themes = {
	light: css({
		'--agds-foreground-text': globalVars.light.foreground.text,
		'--agds-foreground-action': globalVars.light.foreground.action,
		'--agds-foreground-focus': globalVars.light.foreground.focus,
		'--agds-foreground-muted': globalVars.light.foreground.muted,
		'--agds-background-page': globalVars.light.background.page,
		'--agds-background-shade': globalVars.light.background.shade,
		'--agds-background-page-alt': globalVars.light.background.pageAlt,
		'--agds-background-shade-alt': globalVars.light.background.shadeAlt,
		'--agds-border': globalVars.light.border,
	}),
	dark: css({
		'--agds-foreground-text': globalVars.dark.foreground.text,
		'--agds-foreground-action': globalVars.dark.foreground.action,
		'--agds-foreground-focus': globalVars.dark.foreground.focus,
		'--agds-foreground-muted': globalVars.dark.foreground.muted,
		'--agds-background-page': globalVars.dark.background.page,
		'--agds-background-shade': globalVars.dark.background.shade,
		'--agds-background-page-alt': globalVars.dark.background.pageAlt,
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
	outlineColor: themeVars.foreground.focus,
	outlineOffset: 0.5 * tokens.unit,
};
