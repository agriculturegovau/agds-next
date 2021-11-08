import {
	createGlobalThemeContract,
	createTheme,
	createGlobalTheme,
} from '@vanilla-extract/css';

import { tokens } from './tokens';

export const globalVars = createGlobalThemeContract({
	light: {
		foreground: {
			text: 'light-foreground-text',
			action: 'light-foreground-action',
			focus: 'light-foreground-focus',
			hint: 'light-foreground-hint',
			hintAlt: 'light-foreground-hint-alt',
			muted: 'light-foreground-muted',
		},
		background: {
			page: 'light-background-page',
			shade: 'light-background-shade',
			pageAlt: 'light-background-page-alt',
			shadeAlt: 'light-background-shade-alt',
		},
		border: {
			default: 'light-border',
		},
	},
	dark: {
		foreground: {
			text: 'dark-foreground-text',
			action: 'dark-foreground-action',
			focus: 'dark-foreground-focus',
			hint: 'dark-foreground-hint',
			hintAlt: 'dark-foreground-hint-alt',
			muted: 'dark-foreground-muted',
		},
		background: {
			page: 'dark-background-page',
			shade: 'dark-background-shade',
			pageAlt: 'dark-background-page-alt',
			shadeAlt: 'dark-background-shade-alt',
		},
		border: {
			default: 'dark-border',
		},
	},
});

// This is the default awe variable definition set

/**
 * TODO: this should probably be scoped to a className not :root
 */
createGlobalTheme('.gold-defaults', globalVars, {
	light: tokens.light,
	dark: tokens.dark,
});

/**
 * TODO: this is not fully baked.
 */

export const [lightTheme, vars] = createTheme({
	foreground: {
		text: `var(--light-foreground-text, ${tokens.light.foreground.text})`,
		action: `var(--light-foreground-action, ${tokens.light.foreground.action})`,
		focus: `var(--light-foreground-focus, ${tokens.light.foreground.focus})`,
		hint: `var(--light-foreground-hint, ${tokens.light.foreground.hint})`,
		hintAlt: `var(--light-foreground-hint-alt, ${tokens.light.foreground.hintAlt})`,
		muted: `var(--light-foreground-muted, ${tokens.light.foreground.muted})`,
	},
	background: {
		page: `var(--light-background-page, ${tokens.light.background.page})`,
		shade: `var(--light-background-shade, ${tokens.light.background.shade})`,
		pageAlt: `var(--light-background-page-alt, ${tokens.light.background.pageAlt})`,
		shadeAlt: `var(--light-background-shade-alt, ${tokens.light.background.shadeAlt})`,
	},
	border: {
		default: `var(--light-border, ${tokens.light.border.default})`,
	},
});
export const darkTheme = createTheme(vars, {
	foreground: {
		text: `var(--dark-foreground-text, ${tokens.dark.foreground.text})`,
		action: `var(--dark-foreground-action, ${tokens.dark.foreground.action})`,
		focus: `var(--dark-foreground-focus, ${tokens.dark.foreground.focus})`,
		hint: `var(--dark-foreground-hint, ${tokens.dark.foreground.hint})`,
		hintAlt: `var(--dark-foreground-hint-alt, ${tokens.dark.foreground.hintAlt})`,
		muted: `var(--dark-foreground-muted, ${tokens.dark.foreground.muted})`,
	},
	background: {
		page: `var(--dark-background-page, ${tokens.dark.background.page})`,
		shade: `var(--dark-background-shade, ${tokens.dark.background.shade})`,
		pageAlt: `var(--dark-background-page-alt, ${tokens.dark.background.pageAlt})`,
		shadeAlt: `var(--dark-background-shade-alt, ${tokens.dark.background.shadeAlt})`,
	},
	border: {
		default: `var(--dark-border, ${tokens.dark.border.default})`,
	},
});

// Compositions

export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: vars.foreground.focus,
	outlineOffset: tokens.spacing[0.5],
};
