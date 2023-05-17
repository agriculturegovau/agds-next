export const themeVars = {
	// Light
	lightForegroundText: '--agds-light-foreground-text',
	lightForegroundAction: '--agds-light-foreground-action',
	lightForegroundSelected: '--agds-light-foreground-selected',
	lightForegroundFocus: '--agds-light-foreground-focus',
	lightForegroundMuted: '--agds-light-foreground-muted',
	lightBackgroundBody: '--agds-light-background-body',
	lightBackgroundShade: '--agds-light-background-shade',
	lightBackgroundBodyAlt: '--agds-light-background-body-alt',
	lightBackgroundShadeAlt: '--agds-light-background-shade-alt',
	lightBorder: '--agds-light-border',
	lightBorderMuted: '--agds-light-border-muted',
	lightAccent: '--agds-light-accent',
	lightOverlay: '--agds-light-overlay',
	lightSystemSuccess: '--agds-light-system-success',
	lightSystemSuccessMuted: '--agds-light-system-success-muted',
	lightSystemInfo: '--agds-light-system-info',
	lightSystemInfoMuted: '--agds-light-system-info-muted',
	lightSystemError: '--agds-light-system-error',
	lightSystemErrorMuted: '--agds-light-system-error-muted',
	lightSystemWarning: '--agds-light-system-warning',
	lightSystemWarningMuted: '--agds-light-system-warning-muted',
	// Dark
	darkForegroundText: '--agds-dark-foreground-text',
	darkForegroundAction: '--agds-dark-foreground-action',
	darkForegroundSelected: '--agds-dark-foreground-selected',
	darkForegroundFocus: '--agds-dark-foreground-focus',
	darkForegroundMuted: '--agds-dark-foreground-muted',
	darkBackgroundBody: '--agds-dark-background-body',
	darkBackgroundShade: '--agds-dark-background-shade',
	darkBackgroundBodyAlt: '--agds-dark-background-body-alt',
	darkBackgroundShadeAlt: '--agds-dark-background-shade-alt',
	darkBorder: '--agds-dark-border',
	darkBorderMuted: '--agds-dark-border-muted',
	darkAccent: '--agds-dark-accent',
	darkOverlay: '--agds-dark-overlay',
	darkSystemSuccess: '--agds-dark-system-success',
	darkSystemSuccessMuted: '--agds-dark-system-success-muted',
	darkSystemInfo: '--agds-dark-system-info',
	darkSystemInfoMuted: '--agds-dark-system-info-muted',
	darkSystemError: '--agds-dark-system-error',
	darkSystemErrorMuted: '--agds-dark-system-error-muted',
	darkSystemWarning: '--agds-dark-system-warning',
	darkSystemWarningMuted: '--agds-dark-system-warning-muted',
} as const;

export type Theme = Partial<Record<keyof typeof themeVars, string>>;

type ThemeKey = keyof typeof themeVars;

export function mergeTheme(defaultTheme: Theme, theme?: Theme) {
	return Object.fromEntries(
		Object.entries(themeVars).map(([key, variableName]) => [
			variableName,
			(theme && theme[key as ThemeKey]) ?? defaultTheme[key as ThemeKey],
		])
	);
}
