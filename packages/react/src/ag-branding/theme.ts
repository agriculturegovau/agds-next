import { Theme } from '../core';

// Internal colours only. Not for use in the UI.
const primitives = {
	// shades for neutrals
	// // grey
	white: '#ffffff', // body
	grey1: '#f5f5f5', // body-alt
	grey2: '#ebebeb', // shade
	grey3: '#e0e0e0', // shade-alt
	grey4: '#D3D3D3', // border muted
	grey5: '#808080', // border
	grey6: '#626262', // text-muted
	grey7: '#313131', // text
	// // slate
	slate1: '#bdd2d7',
	slate2: '#95b7bf',
	slate3: '#4D7680',
	// // navy
	navy1: '#0A1629',
	navy2: '#122440',
	navy3: '#162846',
	navy4: '#20365B',

	exportServiceOrange: '#F36C52',

	// green
	// TODO: We should consider regenrating these shades to ensure they are consistent hues
	green100: '#E5FFF6',
	green400: '#00A36D',
	green600: '#00754E',
	green900: '#133A4B',

	// red
	red100: '#FFF0F0',
	red400: '#D10000',

	// tomato: used in dark mode but are very different to reds
	tomato400: '#FF4F4F',
	tomato900: '#422F47',

	// yellow
	// TODO: We should consider regenrating these shades to ensure they are consistent hues
	yellow100: '#FFF2E5',
	yellow400: '#FF9933',
	yellow600: '#D16900',
	yellow900: '#393942',

	// blue
	// TODO: We should consider regenrating these shades to ensure they are consistent hues
	blue100: '#E5F6FF',
	blue400: '#008BD1',
	blue600: '#00558b',

	// purple
	// TODO: We should consider regenrating these shades to ensure they are consistent hues
	purple400: '#c390f9',
	purple600: '#9263de',

	// blueberry
	// TODO: We should consider regenrating these shades to ensure they are consistent hues
	blueberry100: '#9EE8FF',
	blueberry400: '#33BAFF',
	blueberry900: '#193A5B',

	blackOverlay: 'rgba(0, 0, 0, 0.8)',
};

export const theme: Theme = {
	// gold values:  light
	lightForegroundText: primitives.grey7,
	lightForegroundFocus: primitives.purple600,
	lightForegroundMuted: primitives.grey6,
	lightBackgroundBody: primitives.white,
	lightBackgroundShade: primitives.grey1,
	lightBackgroundBodyAlt: primitives.grey2,
	lightBackgroundShadeAlt: primitives.grey3,
	lightBorder: primitives.grey5,
	lightBorderMuted: primitives.grey4,
	lightOverlay: primitives.blackOverlay,

	// gold values: dark
	darkForegroundText: primitives.white,
	darkForegroundFocus: primitives.purple400,
	darkForegroundMuted: primitives.slate1,
	darkBorder: primitives.slate2,
	darkBorderMuted: primitives.slate3,
	darkOverlay: primitives.blackOverlay,

	// agds overrides: light
	lightForegroundAction: primitives.blue600,
	lightAccent: primitives.exportServiceOrange,
	lightSystemError: primitives.red400,
	lightSystemErrorMuted: primitives.red100,
	lightSystemSuccess: primitives.green600,
	lightSystemSuccessMuted: primitives.green100,
	lightSystemWarning: primitives.yellow600,
	lightSystemWarningMuted: primitives.yellow100,
	lightSystemInfo: primitives.blue400,
	lightSystemInfoMuted: primitives.blue100,

	// agds overrides: dark
	darkBackgroundBody: primitives.navy1,
	darkBackgroundShade: primitives.navy2,
	darkBackgroundBodyAlt: primitives.navy3,
	darkBackgroundShadeAlt: primitives.navy4,
	darkForegroundAction: primitives.blueberry100,
	darkAccent: primitives.exportServiceOrange,
	darkSystemError: primitives.tomato400,
	darkSystemErrorMuted: primitives.tomato900,
	darkSystemSuccess: primitives.green400,
	darkSystemSuccessMuted: primitives.green900,
	darkSystemWarning: primitives.yellow400,
	darkSystemWarningMuted: primitives.yellow900,
	darkSystemInfo: primitives.blueberry400,
	darkSystemInfoMuted: primitives.blueberry900,
};
