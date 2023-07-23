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

	// colours
	exportServiceOrange: '#F36C52',
	deepBlue: '#00558b',
	red: '#D10000',
	redPale: '#FFF0F0',
	green: '#00754E',
	greenPale: '#E5FFF6',
	yellow: '#D16900',
	yellowPale: '#FFF2E5',
	blue: '#008BD1',
	bluePale: '#E5F6FF',
	purple: '#9263de',
	blackOverlay: 'rgba(0, 0, 0, 0.8)',

	// alt colours for dark palette
	skyBlue: '#9EE8FF',
	tomato: '#FF4F4F',
	tomatoDim: '#422F47',
	cucumber: '#00A36D',
	cucumberDim: '#133A4B',
	pumpkin: '#FF9933',
	pumpkinDim: '#393942',
	blueberry: '#33BAFF',
	blueberryDim: '#193A5B',
	eggplant: '#c390f9',
};

export const theme: Theme = {
	// gold values
	lightForegroundText: primitives.grey7,
	lightForegroundFocus: primitives.purple,
	lightForegroundMuted: primitives.grey6,
	lightBackgroundBody: primitives.white,
	lightBackgroundShade: primitives.grey1,
	lightBackgroundBodyAlt: primitives.grey2,
	lightBackgroundShadeAlt: primitives.grey3,
	lightBorder: primitives.grey5,
	lightBorderMuted: primitives.grey4,
	lightOverlay: primitives.blackOverlay,
	darkForegroundText: primitives.white,
	darkForegroundFocus: primitives.eggplant,
	darkForegroundMuted: primitives.slate1,
	darkBorder: primitives.slate2,
	darkBorderMuted: primitives.slate3,
	darkOverlay: primitives.blackOverlay,

	// agds overrides
	lightForegroundAction: primitives.deepBlue,
	lightAccent: primitives.exportServiceOrange,
	lightSystemError: primitives.red,
	lightSystemErrorMuted: primitives.redPale,
	lightSystemSuccess: primitives.green,
	lightSystemSuccessMuted: primitives.greenPale,
	lightSystemWarning: primitives.yellow,
	lightSystemWarningMuted: primitives.yellowPale,
	lightSystemInfo: primitives.blue,
	lightSystemInfoMuted: primitives.bluePale,
	darkBackgroundBody: primitives.navy1,
	darkBackgroundShade: primitives.navy2,
	darkBackgroundBodyAlt: primitives.navy3,
	darkBackgroundShadeAlt: primitives.navy4,
	darkForegroundAction: primitives.skyBlue,
	darkAccent: primitives.exportServiceOrange,
	darkSystemError: primitives.tomato,
	darkSystemErrorMuted: primitives.tomatoDim,
	darkSystemSuccess: primitives.cucumber,
	darkSystemSuccessMuted: primitives.cucumberDim,
	darkSystemWarning: primitives.pumpkin,
	darkSystemWarningMuted: primitives.pumpkinDim,
	darkSystemInfo: primitives.blueberry,
	darkSystemInfoMuted: primitives.blueberryDim,
};
