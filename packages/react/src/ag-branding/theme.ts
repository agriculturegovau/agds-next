import { Theme } from '../core';

const primitives = {
	navy1: '#0A1629',
	navy2: '#122440',
	navy3: '#162846',
	navy4: '#20365B',
};

export const theme: Theme = {
	lightForegroundAction: '#00558b',
	lightAccent: '#F36C52',
	lightSelected: '#00558b', // use same color as action
	lightSelectedMuted: '#EBF4FA',
	lightSystemError: '#D10000',
	lightSystemErrorMuted: '#FFF0F0',
	lightSystemSuccess: '#00754E',
	lightSystemSuccessMuted: '#E5FFF6',
	lightSystemWarning: '#D16900',
	lightSystemWarningMuted: '#FFF2E5',
	lightSystemInfo: '#008BD1',
	lightSystemInfoMuted: '#E5F6FF',
	darkBackgroundBody: primitives.navy1,
	darkBackgroundShade: primitives.navy3,
	darkBackgroundBodyAlt: primitives.navy3,
	darkBackgroundShadeAlt: primitives.navy4,
	darkForegroundAction: '#9EE8FF',
	darkSelected: '#9EE8FF', // use same color as action
	darkSelectedMuted: '#162C50',
	darkAccent: '#F36C52',
	darkSystemError: '#FF4F4F',
	darkSystemErrorMuted: '#422F47',
	darkSystemSuccess: '#00A36D',
	darkSystemSuccessMuted: '#133A4B',
	darkSystemWarning: '#FF9933',
	darkSystemWarningMuted: '#393942',
	darkSystemInfo: '#33BAFF',
	darkSystemInfoMuted: '#193A5B',
};
