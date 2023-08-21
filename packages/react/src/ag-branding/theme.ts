import { Theme } from '../core';

// Internal colours only. Not for use in the UI.
const primitives = {
	// shades for neutrals
	white: '#ffffff', // body

	// grey
	grey1: '#f5f5f5', // body-alt
	grey2: '#ebebeb', // shade
	grey3: '#e0e0e0', // shade-alt
	grey4: '#D3D3D3', // border muted
	grey5: '#808080', // border
	grey6: '#626262', // text-muted
	grey7: '#313131', // text
	// slate
	slate1: '#bdd2d7',
	slate2: '#95b7bf',
	slate3: '#4D7680',
	// navy
	navy1: '#0A1629',
	navy2: '#122440',
	navy3: '#162846',
	navy4: '#20365B',

	exportServiceOrange: '#F36C52',

	// green
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	green1: '#E5FFF6',
	green2: '#00A36D',
	green3: '#00754E',
	green4: '#133A4B',

	// red
	red1: '#FFF0F0',
	red2: '#D10000',

	// tomato: used in dark mode but are very different to reds
	tomato1: '#FF4F4F',
	tomato2: '#422F47',

	// yellow
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	yellow1: '#FFF2E5',
	yellow2: '#FF9933',
	yellow3: '#D16900',
	yellow4: '#393942',

	// blue (action)
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	blue1: '#EBF4FA',
	blue2: '#00558b',

	// sky (info)
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	sky1: '#E5F6FF',
	sky2: '#008BD1',

	// cyan
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	cyan1: '#9EE8FF',
	cyan2: '#33BAFF',
	cyan3: '#193A5B',

	// purple
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	purple1: '#c390f9',
	purple2: '#9263de',

	blackOverlay: 'rgba(0, 0, 0, 0.8)',
};

export const theme: Theme = {
	// gold values:  light
	lightForegroundText: primitives.grey7,
	lightForegroundFocus: primitives.purple2,
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
	darkForegroundFocus: primitives.purple1,
	darkForegroundMuted: primitives.slate1,
	darkBorder: primitives.slate2,
	darkBorderMuted: primitives.slate3,
	darkOverlay: primitives.blackOverlay,

	// agds overrides: light
	lightForegroundAction: primitives.blue2,
	lightAccent: primitives.exportServiceOrange,
	lightSystemError: primitives.red2,
	lightSystemErrorMuted: primitives.red1,
	lightSystemSuccess: primitives.green3,
	lightSystemSuccessMuted: primitives.green1,
	lightSystemWarning: primitives.yellow3,
	lightSystemWarningMuted: primitives.yellow1,
	lightSystemInfo: primitives.sky2,
	lightSystemInfoMuted: primitives.sky1,

	// agds overrides: dark
	darkBackgroundBody: primitives.navy1,
	darkBackgroundShade: primitives.navy2,
	darkBackgroundBodyAlt: primitives.navy3,
	darkBackgroundShadeAlt: primitives.navy4,
	darkForegroundAction: primitives.cyan1,
	darkAccent: primitives.exportServiceOrange,
	darkSystemError: primitives.tomato1,
	darkSystemErrorMuted: primitives.tomato2,
	darkSystemSuccess: primitives.green2,
	darkSystemSuccessMuted: primitives.green4,
	darkSystemWarning: primitives.yellow2,
	darkSystemWarningMuted: primitives.yellow4,
	darkSystemInfo: primitives.cyan2,
	darkSystemInfoMuted: primitives.cyan3,
};
