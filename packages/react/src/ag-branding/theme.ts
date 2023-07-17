import { Theme } from '../core';

// Internal colours only. Not for use in the UI.
const primitives = {
	// shades for neutrals
	// // grey
	white: '#ffffff',
	grey1: '#f5f5f5',
	grey2: '#ebebeb',
	grey3: '#e0e0e0',
	grey4: '#D3D3D3',
	grey5: '#808080',
	grey6: '#626262',
	grey7: '#313131',
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
	pumpkinWarning: '#FF9933',
	pumpkinWarningDim: '#393942',
	blueberryInfo: '#33BAFF',
	blueberryInfoDim: '#193A5B',
	eggplant: '#c390f9',
};

// What has changed?
// 1. Create interaction set, featuring colours for buttons and inputs
// 2. Rejig the foreground set, rename to text and create a new set for icons.
// 3. Move 'system colours' to the background set.
// 4. Create modal set, featuring colours for modal panels and overlays.

// The semantic colours for the Export Service theme.
export const theme: Theme = {
	// light
	// light-text
	lightText: '#313131',
	lightTextMuted: '#626262',
	lightTextLink: primitives.deepBlue,
	lightTextFocus: primitives.purple,
	lightTextSuccess: primitives.green,
	lightTextError: primitives.red,
	lightTextDisabled: '--agds-text-disabled',
	lightTextInverse: primitives.white,
	// light-background
	lightBackground: primitives.white,
	lightBackgroundAlt: '#ebebeb',
	lightBackgroundShade: '#f5f5f5',
	lightBackgroundShadeAlt: '#e0e0e0',
	lightBackgroundError: primitives.redPale,
	lightBackgroundErrorBold: primitives.red,
	lightBackgroundSuccess: primitives.greenPale,
	lightBackgroundSuccessBold: primitives.green,
	lightBackgroundWarning: primitives.yellowPale,
	lightBackgroundWarningBold: primitives.yellow,
	lightBackgroundInfo: primitives.bluePale,
	lightBackgroundInfoBold: primitives.blue,
	// light-border
	lightBorder: '#808080',
	lightBorderMuted: '#D3D3D3',
	lightBorderAccent: primitives.exportServiceOrange,
	lightBorderSelected: primitives.deepBlue,
	lightBorderInput: '#808080',
	lightBorderDisabled: '#D3D3D3',
	// light-icon
	lightIconSuccess: primitives.green,
	lightIconWarning: primitives.yellow,
	lightIconInfo: primitives.blue,
	lightIconError: primitives.red,
	lightIconNeutral: primitives.grey6,
	// light interaction
	lightInteraction: '--agds-interaction',
	lightInteractionHover: '--agds-interaction-hover',
	lightInteractionSelected: '--agds-interaction-selected',
	lightInteractionFocus: primitives.purple,
	lightInteractionBorder: '--agds-interaction-border',
	lightInteractionBackground: '--agds-interaction-background',
	lightInteractionBackgroundHover: '--agds-interaction-background-hover',
	lightInteractionBackgroundAlt: '--agds-interaction-background-alt',
	lightInteractionBackgroundAltHover: '--agds-interactive-background-alt-hover',
	// light-modal
	lightModalPanel: primitives.white,
	lightModalOverlay: primitives.blackOverlay,

	// dark
	// dark-text
	darkTextDefault: primitives.white,
	darkTextMuted: '#bdd2d7',
	// dark-background
	darkBorder: '#95b7bf',
	darkBorderMuted: '#4D7680',
	darkModalOverlay: primitives.blackOverlay,
	// dark-border
	darkBackgroundBody: '#0A1629',
	darkBackgroundShade: '#122440',
	darkBackgroundBodyAlt: '#162846',
	darkBackgroundShadeAlt: '#20365B',
	// dark interaction
	// dark modal
	darkForegroundAction: primitives.skyBlue,
	darkAccent: primitives.exportServiceOrange,
	darkSystemError: primitives.tomato,
	darkSystemErrorMuted: primitives.tomatoDim,
	darkSystemSuccess: primitives.cucumber,
	darkSystemSuccessMuted: primitives.cucumberDim,
	darkSystemWarning: primitives.pumpkinWarning,
	darkSystemWarningMuted: primitives.pumpkinWarningDim,
	darkSystemInfo: primitives.blueberryInfo,
	darkSystemInfoMuted: primitives.blueberryInfoDim,
	darkInteractionFocus: primitives.eggplant,
};
