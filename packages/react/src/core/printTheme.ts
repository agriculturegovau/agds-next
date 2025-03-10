import { Theme } from './theme';

const colorHexBlack = '#000000';
const colorHexWhite = '#ffffff';

export const printTheme: Theme = {
	lightForegroundText: colorHexBlack,
	lightForegroundAction: colorHexBlack,
	lightForegroundFocus: colorHexBlack,
	lightForegroundMuted: colorHexBlack,
	lightBackgroundBody: colorHexWhite,
	lightBackgroundShade: colorHexWhite,
	lightBackgroundBodyAlt: colorHexWhite,
	lightBackgroundShadeAlt: colorHexWhite,
	lightBorder: colorHexBlack,
	lightBorderMuted: colorHexBlack,
	lightSelected: colorHexBlack,
	lightSelectedMuted: colorHexWhite,
	lightAccent: colorHexBlack,
	lightOverlay: colorHexWhite,
	lightOverlayMuted: colorHexWhite,
	lightSystemError: colorHexBlack,
	lightSystemSuccess: colorHexBlack,
	lightSystemWarning: colorHexBlack,
	lightSystemInfo: colorHexBlack,
	lightSystemErrorMuted: colorHexWhite,
	lightSystemSuccessMuted: colorHexWhite,
	lightSystemWarningMuted: colorHexWhite,
	lightSystemInfoMuted: colorHexWhite,
	darkForegroundText: colorHexBlack,
	darkForegroundAction: colorHexBlack,
	darkForegroundFocus: colorHexBlack,
	darkForegroundMuted: colorHexBlack,
	darkBackgroundBody: colorHexWhite,
	darkBackgroundShade: colorHexWhite,
	darkBackgroundBodyAlt: colorHexWhite,
	darkBackgroundShadeAlt: colorHexWhite,
	darkBorder: colorHexBlack,
	darkBorderMuted: colorHexBlack,
	darkSelected: colorHexBlack,
	darkSelectedMuted: colorHexWhite,
	darkAccent: colorHexBlack,
	darkOverlay: colorHexWhite,
	darkOverlayMuted: colorHexWhite,
	darkSystemError: colorHexBlack,
	darkSystemErrorMuted: colorHexWhite,
	darkSystemSuccess: colorHexBlack,
	darkSystemSuccessMuted: colorHexWhite,
	darkSystemWarningMuted: colorHexWhite,
	darkSystemWarning: colorHexBlack,
	darkSystemInfo: colorHexBlack,
	darkSystemInfoMuted: colorHexWhite,
} as const;
