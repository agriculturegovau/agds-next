import { css } from '@emotion/react';
import { RefObject, useEffect, useState } from 'react';
import { themeVars } from './theme';

// Box Palette

const boxPaletteVars = {
	// palette: '--agds-palette',
	// text (foreground)
	text: '--agds-text', // or text default
	textMuted: '--agds-text-muted',
	textLink: '--agds-text-action',
	textError: '--agds-text-error',
	textDisabled: '--agds-text-disabled',
	textInverse: '--agds-text-inverse',

	// background
	background: '--agds-background',
	backgroundAlt: '--agds-background-alt',
	backgroundSunken: '--agds-background-shade',
	backgroundSunkenAlt: '--agds-background-shade', // delete this?
	backgroundSuccess: '--agds-background-success',
	backgroundSuccessBold: '--agds-background-success-bold', // used for PageAlert icon blocks
	backgroundWarning: '--agds-background-warning',
	backgroundWarningBold: '--agds-background-warning-bold', // used for PageAlert icon blocks
	backgroundInfo: '--agds-background-info',
	backgroundInfoBold: '--agds-background-info-bold', // used for PageAlert icon blocks
	backgroundError: '--agds-background-error',
	backgroundErrorBold: '--agds-background-error-bold', // used for PageAlert icon blocks
	backgroundDisabled: '--agds-background-disabled',
	backgroundInput: '--agds-background-input',
	backgroundInputHover: '--agds-background-input-hover',

	// border
	border: '--agds-border',
	borderMuted: '--agds-border-muted',
	borderAccent: '--agds-accent',
	borderSelected: '--agds-border-selected',
	borderDisabled: '--agds-border-disabled',

	// icon
	iconSuccess: '--agds-icon-success',
	iconWarning: '--agds-icon-warning',
	iconInfo: '--agds-icon-info',
	iconError: '--agds-icon-error',
	iconNeutral: '--agds-icon-neutral',

	// interaction - for buttons and inputs
	interaction: '--agds-interaction',
	interactionHover: '--agds-interaction-hover',
	interactionSelected: '--agds-interaction-selected',
	interactionFocus: '--agds-interaction-focus',
	interactionBorder: '--agds-interaction-border',
	interactionBackground: '--agds-interaction-background',
	interactionBackgroundHover: '--agds-interaction-background-hover',
	interactionBackgroundAlt: '--agds-interaction-background-alt',
	interactionBackgroundAltHover: '--agds-interactive-background-alt-hover',
	// modal
	modalOverlay: '--agds-modal-overlay',
	modalPanelBackground: '--agds-modal-panel',
};

export const boxPalettes = {
	light: css({
		[boxPaletteVars.palette]: 'light',
		[boxPaletteVars.foregroundText]: `var(${themeVars.lightForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.lightForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.lightForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.lightForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.lightBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.lightBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.lightBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.lightBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.lightBorder})`,
		[boxPaletteVars.borderMuted]: `var(${themeVars.lightBorderMuted})`,
		[boxPaletteVars.accent]: `var(${themeVars.lightAccent})`,
		[boxPaletteVars.overlay]: `var(${themeVars.lightOverlay})`,
		[boxPaletteVars.systemError]: `var(${themeVars.lightSystemError})`,
		[boxPaletteVars.systemErrorMuted]: `var(${themeVars.lightSystemErrorMuted})`,
		[boxPaletteVars.systemSuccess]: `var(${themeVars.lightSystemSuccess})`,
		[boxPaletteVars.systemSuccessMuted]: `var(${themeVars.lightSystemSuccessMuted})`,
		[boxPaletteVars.systemWarning]: `var(${themeVars.lightSystemWarning})`,
		[boxPaletteVars.systemWarningMuted]: `var(${themeVars.lightSystemWarningMuted})`,
		[boxPaletteVars.systemInfo]: `var(${themeVars.lightSystemInfo})`,
		[boxPaletteVars.systemInfoMuted]: `var(${themeVars.lightSystemInfoMuted})`,
	}),
	dark: css({
		[boxPaletteVars.palette]: 'dark',
		[boxPaletteVars.foregroundText]: `var(${themeVars.darkForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.darkForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.darkForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.darkForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.darkBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.darkBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.darkBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.darkBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.darkBorder})`,
		[boxPaletteVars.borderMuted]: `var(${themeVars.darkBorderMuted})`,
		[boxPaletteVars.accent]: `var(${themeVars.darkAccent})`,
		[boxPaletteVars.overlay]: `var(${themeVars.darkOverlay})`,
		[boxPaletteVars.systemError]: `var(${themeVars.darkSystemError})`,
		[boxPaletteVars.systemErrorMuted]: `var(${themeVars.darkSystemErrorMuted})`,
		[boxPaletteVars.systemSuccess]: `var(${themeVars.darkSystemSuccess})`,
		[boxPaletteVars.systemSuccessMuted]: `var(${themeVars.darkSystemSuccessMuted})`,
		[boxPaletteVars.systemWarning]: `var(${themeVars.darkSystemWarning})`,
		[boxPaletteVars.systemWarningMuted]: `var(${themeVars.darkSystemWarningMuted})`,
		[boxPaletteVars.systemInfo]: `var(${themeVars.darkSystemInfo})`,
		[boxPaletteVars.systemInfoMuted]: `var(${themeVars.darkSystemInfoMuted})`,
	}),
} as const;

export type BoxPalette = keyof typeof boxPalettes;

export const boxPalette = {
	foregroundText: `var(${boxPaletteVars.foregroundText})`,
	foregroundAction: `var(${boxPaletteVars.foregroundAction})`,
	foregroundFocus: `var(${boxPaletteVars.foregroundFocus})`,
	foregroundMuted: `var(${boxPaletteVars.foregroundMuted})`,
	backgroundBody: `var(${boxPaletteVars.backgroundBody})`,
	backgroundShade: `var(${boxPaletteVars.backgroundShade})`,
	backgroundBodyAlt: `var(${boxPaletteVars.backgroundBodyAlt})`,
	backgroundShadeAlt: `var(${boxPaletteVars.backgroundShadeAlt})`,
	border: `var(${boxPaletteVars.border})`,
	borderMuted: `var(${boxPaletteVars.borderMuted})`,
	accent: `var(${boxPaletteVars.accent})`,
	overlay: `var(${boxPaletteVars.overlay})`,
	systemError: `var(${boxPaletteVars.systemError})`,
	systemErrorMuted: `var(${boxPaletteVars.systemErrorMuted})`,
	systemSuccess: `var(${boxPaletteVars.systemSuccess})`,
	systemSuccessMuted: `var(${boxPaletteVars.systemSuccessMuted})`,
	systemWarning: `var(${boxPaletteVars.systemWarning})`,
	systemWarningMuted: `var(${boxPaletteVars.systemWarningMuted})`,
	systemInfo: `var(${boxPaletteVars.systemInfo})`,
	systemInfoMuted: `var(${boxPaletteVars.systemInfoMuted})`,
};

/**
 * Returns the current palette for a specific DOM element
 * Note: As this function relies on CSS vars, the value returned will not be available on the server
 */
export function useBoxPalette(element: RefObject<HTMLElement>) {
	const [value, setValue] = useState<BoxPalette>();

	useEffect(() => {
		if (!element.current) return;
		setValue(getInheritedProperty(element.current));
	}, [element]);

	return value;
}

function getInheritedProperty(el: HTMLElement): BoxPalette | undefined {
	const value = getComputedStyle(el).getPropertyValue(boxPaletteVars.palette);
	if (value === 'light') return 'light';
	if (value === 'dark') return 'dark';
	// Walk up the DOM tree until we find the closest value
	if (el.parentElement) return getInheritedProperty(el.parentElement);
	return undefined;
}
