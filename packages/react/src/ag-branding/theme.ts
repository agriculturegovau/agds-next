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
	green050: '#E5FFF6',
	green100: '#CCE3DC',
	green200: '#99C8B8',
	green300: '#66AC95',
	green400: '#339171',
	green500: '#00754E',
	green600: '#005E3E',
	green700: '#00462F',
	green800: '#002F1F',
	green900: '#001710',

	// red
	red050: '#FFF0F0',
	red100: '#F6CCCC',
	red200: '#ED9999',
	red300: '#E36666',
	red400: '#DA3333',
	red500: '#D10000',
	red600: '#A70000',
	red700: '#7D0000',
	red800: '#540000',
	red900: '#2A0000',

	// yellow
	yellow050: '#FFF2E5',
	yellow100: '#F6E1CC',
	yellow200: '#EDC399',
	yellow300: '#E3A566',
	yellow400: '#DA8733', // yellow2: '#FF9933'
	yellow500: '#D16900',
	yellow600: '#A75400',
	yellow700: '#7D3F00',
	yellow800: '#542A00', // yellow4: '#393942'
	yellow900: '#2A1500',

	// blue (action)
	blue050: '#EBF4FA',
	blue100: '#CCDDE8',
	blue200: '#99BBD1',
	blue300: '#6699B9',
	blue400: '#3377A2',
	blue500: '#00558B',
	blue600: '#00446F',
	blue700: '#003353',
	blue800: '#002238',
	blue900: '#00111C',

	// sky (info)
	sky050: '#E5F6FF',
	sky100: '#CCE8F6',
	sky200: '#99D1ED',
	sky300: '#66B9E3',
	sky400: '#33A2DA', // 	cyan2: '#33BAFF',
	sky500: '#008BD1',
	sky600: '#006FA7',
	sky700: '#00537D',
	sky800: '#003854', // 	cyan3: '#193A5B',
	sky900: '#001C2A',

	// purple
	// TODO: We should consider regenerating these shades to ensure they are consistent hues
	purple1: '#c390f9',
	purple2: '#9263de',

	blackOverlay: 'rgba(0, 0, 0, 0.8)',
};

export const theme: Theme = {
	// light
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
	// agds overrides: light
	lightForegroundAction: primitives.blue500,
	lightAccent: primitives.exportServiceOrange,
	lightSelected: primitives.blue500,
	lightSelectedMuted: primitives.blue050,
	lightSystemError: primitives.red500,
	lightSystemErrorMuted: primitives.red050,
	lightSystemSuccess: primitives.green500,
	lightSystemSuccessMuted: primitives.green050,
	lightSystemWarning: primitives.yellow500,
	lightSystemWarningMuted: primitives.yellow050,
	lightSystemInfo: primitives.sky500,
	lightSystemInfoMuted: primitives.sky050,

	// dark
	// gold values: dark
	darkForegroundText: primitives.white,
	darkForegroundFocus: primitives.purple1,
	darkForegroundMuted: primitives.slate1,
	darkBorder: primitives.slate2,
	darkBorderMuted: primitives.slate3,
	darkOverlay: primitives.blackOverlay,
	// agds overrides: dark
	darkBackgroundBody: primitives.navy1,
	darkBackgroundShade: primitives.navy2,
	darkBackgroundBodyAlt: primitives.navy3,
	darkBackgroundShadeAlt: primitives.navy4,
	darkForegroundAction: primitives.blue300,
	darkSelected: primitives.blue300,
	darkSelectedMuted: primitives.navy3,
	darkAccent: primitives.exportServiceOrange,
	darkSystemError: primitives.red400,
	darkSystemErrorMuted: primitives.red800,
	darkSystemSuccess: primitives.green400,
	darkSystemSuccessMuted: primitives.green800,
	darkSystemWarning: primitives.yellow400,
	darkSystemWarningMuted: primitives.yellow800,
	darkSystemInfo: primitives.sky400,
	darkSystemInfoMuted: primitives.sky800,
};
