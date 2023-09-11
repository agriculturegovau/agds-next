import { Theme } from '@ag.ds-next/react/core';
import { theme as agdsTheme } from '@ag.ds-next/react/ag-branding';

// Internal colours only. Not for use in the UI.
const primitives = {
	// agdsTheme
	// grey
	grey1: '#f5f5f5', // body-alt
	grey2: '#ebebeb', // shade
	grey3: '#e0e0e0', // shade-alt
	grey4: '#D3D3D3', // border muted
	grey5: '#808080', // border
	grey6: '#626262', // text-muted
	grey7: '#313131', // text

	// TRACE colors
	maroon: '#ca1519',
	beigeLighter: '#f4f3f1',
	beige: '#cdc8bf',
	beigeDarker: '#a79f90',
};

export const theme: Theme = {
	...agdsTheme,

	// reset dark theme to light theme
	darkForegroundText: agdsTheme.lightForegroundText,
	darkForegroundFocus: agdsTheme.lightForegroundFocus,
	darkForegroundMuted: agdsTheme.lightForegroundMuted,
	darkBorder: agdsTheme.lightBorder,
	darkBorderMuted: agdsTheme.lightBorderMuted,
	darkOverlay: agdsTheme.lightOverlay,
	// darkBackgroundBody: primitives.beige,
	// darkBackgroundShade: primitives.beige,
	// darkBackgroundBodyAlt: primitives.beige,
	// darkBackgroundShadeAlt: primitives.beige,
	darkForegroundAction: agdsTheme.lightForegroundAction,
	darkSelected: agdsTheme.lightSelected,
	darkSelectedMuted: agdsTheme.lightSelectedMuted,
	darkSystemError: agdsTheme.lightSystemError,
	darkSystemErrorMuted: agdsTheme.lightSystemErrorMuted,
	darkSystemSuccess: agdsTheme.lightSystemSuccess,
	darkSystemSuccessMuted: agdsTheme.lightSystemSuccessMuted,
	darkSystemWarning: agdsTheme.lightSystemWarning,
	darkSystemWarningMuted: agdsTheme.lightSystemWarningMuted,
	darkSystemInfo: agdsTheme.lightSystemInfo,
	darkSystemInfoMuted: agdsTheme.lightSystemInfoMuted,

	// TRACE colors
	lightAccent: primitives.maroon,
	lightBackgroundBodyAlt: primitives.beigeLighter,
	darkAccent: primitives.maroon,
	darkBackgroundBody: primitives.beige,
	darkBackgroundShade: primitives.beigeDarker,
	darkBackgroundBodyAlt: primitives.beige,
	darkBackgroundShadeAlt: primitives.beigeDarker,
};
