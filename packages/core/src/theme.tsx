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
	lightBorderMuted: '--agds-light-border-muted',
	lightBorderInput: '--agds-light-border-input',
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
	darkBorderMuted: '--agds-light-border-muted',
	darkBorderInput: '--agds-dark-border-input',
	// System colors
	accent: '--agds-accent',
	error: '--agds-error',
	errorMuted: '--agds-error-muted',
	success: '--agds-success',
	successMuted: '--agds-success-muted',
	warning: '--agds-warning',
	warningMuted: '--agds-warning-muted',
	info: '--agds-info',
	infoMuted: '--agds-info-muted',
} as const;

export type Theme = Partial<Record<keyof typeof themeVars, string>>;

type ThemeKey = keyof typeof themeVars;
export function mergeTheme(defaultTheme: Theme, theme: Theme) {
	return Object.fromEntries(
		Object.entries(themeVars).map(([key, variableName]) => [
			variableName,
			theme[key as ThemeKey] ?? defaultTheme[key as ThemeKey],
		])
	);
}
