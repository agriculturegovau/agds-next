'use client';
import { css } from '@emotion/react';
import { RefObject, useEffect, useState } from 'react';
import { themeVars } from './theme';

// Box Palette

const boxPaletteVars = {
	palette: '--agds-palette',
	foregroundText: '--agds-foreground-text',
	foregroundAction: '--agds-foreground-action',
	foregroundFocus: '--agds-foreground-focus',
	foregroundMuted: '--agds-foreground-muted',
	backgroundBody: '--agds-background-body',
	backgroundShade: '--agds-background-shade',
	backgroundBodyAlt: '--agds-background-body-alt',
	backgroundShadeAlt: '--agds-background-shade-alt',
	border: '--agds-border',
	borderMuted: '--agds-border-muted',
	selected: '--agds-selected',
	selectedMuted: '--agds-selected-muted',
	accent: '--agds-accent',
	overlay: '--agds-overlay',
	overlayMuted: '--agds-overlay-muted',
	systemSuccess: '--agds-system-success',
	systemSuccessMuted: '--agds-system-success-muted',
	systemWarning: '--agds-system-warning',
	systemWarningMuted: '--agds-system-warning-muted',
	systemInfo: '--agds-system-info',
	systemInfoMuted: '--agds-system-info-muted',
	systemError: '--agds-system-error',
	systemErrorMuted: '--agds-system-error-muted',
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
		[boxPaletteVars.selected]: `var(${themeVars.lightSelected})`,
		[boxPaletteVars.selectedMuted]: `var(${themeVars.lightSelectedMuted})`,
		[boxPaletteVars.accent]: `var(${themeVars.lightAccent})`,
		[boxPaletteVars.overlay]: `var(${themeVars.lightOverlay})`,
		[boxPaletteVars.overlayMuted]: `var(${themeVars.lightOverlayMuted})`,
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
		[boxPaletteVars.selected]: `var(${themeVars.darkSelected})`,
		[boxPaletteVars.selectedMuted]: `var(${themeVars.darkSelectedMuted})`,
		[boxPaletteVars.accent]: `var(${themeVars.darkAccent})`,
		[boxPaletteVars.overlay]: `var(${themeVars.darkOverlay})`,
		[boxPaletteVars.overlayMuted]: `var(${themeVars.darkOverlayMuted})`,
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
	selected: `var(${boxPaletteVars.selected})`,
	selectedMuted: `var(${boxPaletteVars.selectedMuted})`,
	accent: `var(${boxPaletteVars.accent})`,
	overlay: `var(${boxPaletteVars.overlay})`,
	overlayMuted: `var(${boxPaletteVars.overlayMuted})`,
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
 * Note: This will only return the value of the palette during the initial render. Any client side updates of the palette will not be captured via this hook.
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
