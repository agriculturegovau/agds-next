import { Theme } from '@ag.ds-next/react/core';
import { theme as agdsTheme } from '@ag.ds-next/react/ag-branding';

// Internal colours only. Not for use in the UI.
const primitives = {
	charcoal1: '#292929', // was '#0A1629'
	charcoal2: '#404040', // was '#122440'
	charcoal3: '#454545', // was '#162846'
	charcoal4: '#5c5c5c', // was '#20365B'
	maroon: '#6e2c38',
	teal: '#19667f',
};

export const theme: Theme = {
	...agdsTheme,
	lightForegroundAction: primitives.maroon,
	lightAccent: primitives.maroon,
	darkAccent: primitives.maroon,
	darkBackgroundBody: primitives.charcoal1,
	darkBackgroundShade: primitives.charcoal2,
	darkBackgroundBodyAlt: primitives.charcoal3,
	darkBackgroundShadeAlt: primitives.charcoal4,
	darkSelectedMuted: primitives.charcoal3,
};
