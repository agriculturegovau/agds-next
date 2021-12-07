import React, { Fragment } from 'react';
import { Global, css } from '@emotion/react';
import { tokens } from './tokens';

const themeMap = {
	lightForegroundText: '--agds-light-foreground-text',
	lightForegroundAction: '--agds-light-foreground-action',
	lightForegroundFocus: '--agds-light-foreground-focus',
	lightForegroundMuted: '--agds-light-foreground-muted',
	lightBackgroundPage: '--agds-light-background-page',
	lightBackgroundShade: '--agds-light-background-shade',
	lightBackgroundPageAlt: '--agds-light-background-page-alt',
	lightBackgroundShadeAlt: '--agds-light-background-shade-alt',
	lightBorder: '--agds-light-border',
	darkForegroundText: '--agds-dark-foreground-text',
	darkForegroundAction: '--agds-dark-foreground-action',
	darkForegroundFocus: '--agds-dark-foreground-focus',
	darkForegroundMuted: '--agds-dark-foreground-muted',
	darkBackgroundPage: '--agds-dark-background-page',
	darkBackgroundShade: '--agds-dark-background-shade',
	darkBackgroundPageAlt: '--agds-dark-background-page-alt',
	darkBackgroundShadeAlt: '--agds-dark-background-shade-alt',
	darkBorder: '--agds-dark-border',
} as const;

export type ThemeConfig = Record<keyof typeof themeMap, string>;

const defaultTheme: ThemeConfig = {
	lightForegroundText: tokens.light.foreground.text,
	lightForegroundAction: tokens.light.foreground.action,
	lightForegroundFocus: tokens.light.foreground.focus,
	lightForegroundMuted: tokens.light.foreground.muted,
	lightBackgroundPage: tokens.light.background.page,
	lightBackgroundShade: tokens.light.background.shade,
	lightBackgroundPageAlt: tokens.light.background.pageAlt,
	lightBackgroundShadeAlt: tokens.light.background.shadeAlt,
	lightBorder: tokens.light.border,
	darkForegroundText: tokens.dark.foreground.text,
	darkForegroundAction: tokens.dark.foreground.action,
	darkForegroundFocus: tokens.dark.foreground.focus,
	darkForegroundMuted: tokens.dark.foreground.muted,
	darkBackgroundPage: tokens.dark.background.page,
	darkBackgroundShade: tokens.dark.background.shade,
	darkBackgroundPageAlt: tokens.dark.background.pageAlt,
	darkBackgroundShadeAlt: tokens.dark.background.shadeAlt,
	darkBorder: tokens.dark.border,
};

type ThemeKey = keyof typeof themeMap;

export function Theme({
	children,
	applyReset = true,
	theme = defaultTheme,
}: React.PropsWithChildren<{
	theme?: Partial<ThemeConfig>;
	applyReset?: boolean;
}>) {
	return (
		<Fragment>
			<Global
				styles={[
					applyReset && {
						// FIXME: apply the css reset
						'body, html': {
							margin: 0,
							padding: 0,
							background:
								theme.lightBackgroundPage ?? defaultTheme.lightBackgroundPage,
						},
					},
					{
						':root': Object.fromEntries(
							Object.entries(themeMap).map(([key, variableName]) => [
								variableName,
								theme[key as ThemeKey] ?? defaultTheme[key as ThemeKey],
							])
						),
					},
				]}
			/>
			{children}
		</Fragment>
	);
}

export const globalVariables = {
	light: {
		foreground: {
			text: `var(--agds-light-foreground-text, ${tokens.light.foreground.text})`,
			action: `var(--agds-light-foreground-action, ${tokens.light.foreground.action})`,
			focus: `var(--agds-light-foreground-focus, ${tokens.light.foreground.focus})`,
			muted: `var(--agds-light-foreground-muted, ${tokens.light.foreground.muted})`,
		},
		background: {
			page: `var(--agds-light-background-page, ${tokens.light.background.page})`,
			shade: `var(--agds-light-background-shade, ${tokens.light.background.shade})`,
			pageAlt: `var(--agds-light-background-page-alt, ${tokens.light.background.pageAlt})`,
			shadeAlt: `var(--agds-light-background-shade-alt, ${tokens.light.background.shadeAlt})`,
		},
		border: `var(--agds-light-border, ${tokens.light.border})`,
	},
	dark: {
		foreground: {
			text: `var(--agds-dark-foreground-text, ${tokens.dark.foreground.text})`,
			action: `var(--agds-dark-foreground-action, ${tokens.dark.foreground.action})`,
			focus: `var(--agds-dark-foreground-focus, ${tokens.dark.foreground.focus})`,
			muted: `var(--agds-dark-foreground-muted, ${tokens.dark.foreground.muted})`,
		},
		background: {
			page: `var(--agds-dark-background-page, ${tokens.dark.background.page})`,
			shade: `var(--agds-dark-background-shade, ${tokens.dark.background.shade})`,
			pageAlt: `var(--agds-dark-background-page-alt, ${tokens.dark.background.pageAlt})`,
			shadeAlt: `var(--agds-dark-background-shade-alt, ${tokens.dark.background.shadeAlt})`,
		},
		border: 'var(--agds-dark-border)',
	},
	error: `var(--agds-error, ${tokens.systemColors.error})`,
	success: `var(--agds-success, ${tokens.systemColors.success})`,
	warning: `var(--agds-warning, ${tokens.systemColors.warning})`,
	info: `var(--agds-info, ${tokens.systemColors.info})`,
	hint: `var(--agds-hint, ${tokens.systemColors.hint})`,
	hintAlt: `var(--agds-hint-alt, ${tokens.systemColors.hintAlt})`,
};

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

export const themes = {
	light: css({
		'--agds-foreground-text': 'var(--agds-light-foreground-text)',
		'--agds-foreground-action': 'var(--agds-light-foreground-action)',
		'--agds-foreground-focus': 'var(--agds-light-foreground-focus)',
		'--agds-foreground-muted': 'var(--agds-light-foreground-muted)',
		'--agds-background-page': 'var(--agds-light-background-page)',
		'--agds-background-shade': 'var(--agds-light-background-shade)',
		'--agds-background-page-alt': 'var(--agds-light-background-page-alt)',
		'--agds-background-shade-alt': 'var(--agds-light-background-shade-alt)',
		'--agds-border': 'var(--agds-light-border)',
	}),
	dark: css({
		'--agds-foreground-text': 'var(--agds-dark-foreground-text)',
		'--agds-foreground-action': 'var(--agds-dark-foreground-action)',
		'--agds-foreground-focus': 'var(--agds-dark-foreground-focus)',
		'--agds-foreground-muted': 'var(--agds-dark-foreground-muted)',
		'--agds-background-page': 'var(--agds-dark-background-page)',
		'--agds-background-shade': 'var(--agds-dark-background-shade)',
		'--agds-background-page-alt': 'var(--agds-dark-background-page-alt)',
		'--agds-background-shade-alt': 'var(--agds-dark-background-shade-alt)',
		'--agds-border': 'var(--agds-dark-border)',
	}),
} as const;

// Compositions - todo: move me somewhere else

export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: themeColors.foreground.focus,
	outlineOffset: tokens.spacing[0.5],
};
