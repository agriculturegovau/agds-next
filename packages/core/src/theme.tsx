import React, { Fragment } from 'react';
import { Global, css } from '@emotion/react';
import { tokens } from './tokens';

const themeMap = {
	lightForegroundText: '--light-foreground-text',
	lightForegroundAction: '--light-foreground-action',
	lightForegroundFocus: '--light-foreground-focus',
	lightForegroundHint: '--light-foreground-hint',
	lightForegroundHintAlt: '--light-foreground-hint-alt',
	lightForegroundMuted: '--light-foreground-muted',
	lightBackgroundPage: '--light-background-page',
	lightBackgroundShade: '--light-background-shade',
	lightBackgroundPageAlt: '--light-background-page-alt',
	lightBackgroundShadeAlt: '--light-background-shade-alt',
	lightBorder: '--light-border',
	darkForegroundText: '--dark-foreground-text',
	darkForegroundAction: '--dark-foreground-action',
	darkForegroundFocus: '--dark-foreground-focus',
	darkForegroundHint: '--dark-foreground-hint',
	darkForegroundHintAlt: '--dark-foreground-hint-alt',
	darkForegroundMuted: '--dark-foreground-muted',
	darkBackgroundPage: '--dark-background-page',
	darkBackgroundShade: '--dark-background-shade',
	darkBackgroundPageAlt: '--dark-background-page-alt',
	darkBackgroundShadeAlt: '--dark-background-shade-alt',
	darkBorder: '--dark-border',
} as const;

type ThemeConfig = Record<keyof typeof themeMap, string>;

export function Theme({
	children,
	applyReset = true,
	theme,
}: React.PropsWithChildren<{ theme: ThemeConfig; applyReset?: boolean }>) {
	return (
		<Fragment>
			<Global
				styles={[
					{
						'body, html': {
							background: theme.lightBackgroundPage,
						},
					},
					applyReset
						? {
								// FIXME: apply the css reset
						  }
						: {},
					{
						':root': Object.fromEntries(
							Object.entries(themeMap).map(([key, variableName]) => [
								variableName,
								theme[key as keyof typeof themeMap],
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
			text: 'var(--agds-light-foreground-text)',
			action: 'var(--agds-light-foreground-action)',
			focus: 'var(--agds-light-foreground-focus)',
			hint: 'var(--agds-light-foreground-hint)',
			hintAlt: 'var(--agds-light-foreground-hint-alt)',
			muted: 'var(--agds-light-foreground-muted)',
		},
		background: {
			page: 'var(--agds-light-background-page)',
			shade: 'var(--agds-light-background-shade)',
			pageAlt: 'var(--agds-light-background-page-alt)',
			shadeAlt: 'var(--agds-light-background-shade-alt)',
		},
		border: {
			default: 'var(--agds-light-border)',
		},
	},
	dark: {
		foreground: {
			text: 'var(--agds-dark-foreground-text)',
			action: 'var(--agds-dark-foreground-action)',
			focus: 'var(--agds-dark-foreground-focus)',
			hint: 'var(--agds-dark-foreground-hint)',
			hintAlt: 'var(--agds-dark-foreground-hint-alt)',
			muted: 'var(--agds-dark-foreground-muted)',
		},
		background: {
			page: 'var(--agds-dark-background-page)',
			shade: 'var(--agds-dark-background-shade)',
			pageAlt: 'var(--agds-dark-background-page-alt)',
			shadeAlt: 'var(--agds-dark-background-shade-alt)',
		},
		border: {
			default: 'var(--agds-dark-border)',
		},
	},
};

export const themeVariables = {
	foreground: {
		text: `var(--agds-foreground-text)`,
		action: `var(--agds-foreground-action)`,
		focus: `var(--agds-foreground-focus)`,
		hint: `var(--agds-foreground-hint)`,
		hintAlt: `var(--agds-foreground-hint-alt)`,
		muted: `var(--agds-foreground-muted)`,
	},
	background: {
		page: `var(--agds-background-page)`,
		shade: `var(--agds-background-shade)`,
		pageAlt: `var(--agds-background-page-alt)`,
		shadeAlt: `var(--agds-background-shade-alt)`,
	},
	border: {
		default: `var(--agds-border)`,
	},
};

const lightTheme = css`
	--agds-foreground-text: var(--agds-light-foreground-text);
	--agds-foreground-action: var(--agds-light-foreground-action);
	--agds-foreground-focus: var(--agds-light-foreground-focus);
	--agds-foreground-hint: var(--agds-light-foreground-hint);
	--agds-foreground-hint-alt: var(--agds-light-foreground-hint-alt);
	--agds-foreground-muted: var(--agds-light-foreground-muted);
	--agds-background-page: var(--agds-light-background-page);
	--agds-background-shade: var(--agds-light-background-shade);
	--agds-background-page-alt: var(--agds-light-background-page-alt);
	--agds-background-shade-alt: var(--agds-light-background-shade-alt);
	--agds-border: var(--agds-light-border);
`;

const darkTheme = css`
	--agds-foreground-text: var(--agds-light-foreground-text);
	--agds-foreground-action: var(--agds-light-foreground-action);
	--agds-foreground-focus: var(--agds-light-foreground-focus);
	--agds-foreground-hint: var(--agds-light-foreground-hint);
	--agds-foreground-hint-alt: var(--agds-light-foreground-hint-alt);
	--agds-foreground-muted: var(--agds-light-foreground-muted);
	--agds-background-page: var(--agds-light-background-page);
	--agds-background-shade: var(--agds-light-background-shade);
	--agds-background-page-alt: var(--agds-light-background-page-alt);
	--agds-background-shade-alt: var(--agds-light-background-shade-alt);
	--agds-border: var(--agds-light-border);
`;

// Compositions - todo: move me somewhere else

export const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: themeVariables.foreground.focus,
	outlineOffset: tokens.spacing[0.5],
};
