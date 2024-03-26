import { Theme } from './theme';

// Default theme from GOLD.
export const goldTheme: Theme = {
	lightForegroundText: '#313131',
	lightForegroundAction: '#00698f',
	lightForegroundFocus: '#9263de',
	lightForegroundMuted: '#626262',
	lightBackgroundBody: '#FFFFFF',
	lightBackgroundShade: '#f5f5f5',
	lightBackgroundBodyAlt: '#ebebeb',
	lightBackgroundShadeAlt: '#e0e0e0',
	lightSelected: '#00698f', // uses same color as action
	lightSelectedMuted: '#f5f5f5', // uses same color as shade
	lightBorder: '#808080',
	lightBorderMuted: '#D3D3D3',
	lightAccent: '#00698f',
	lightOverlay: 'rgba(0, 0, 0, 0.8)',
	lightOverlayMuted: 'rgba(0, 0, 0, 0.3)',
	lightSystemError: '#d60000',
	lightSystemErrorMuted: '#fdf2f2',
	lightSystemSuccess: '#0b996c',
	lightSystemSuccessMuted: '#f3faf8',
	lightSystemWarning: '#f69900',
	lightSystemWarningMuted: '#fffaf2',
	lightSystemInfo: '#00bfe9',
	lightSystemInfoMuted: '#f2fcfe',
	darkForegroundText: '#FFFFFF',
	darkForegroundAction: '#61daff',
	darkForegroundFocus: '#c390f9',
	darkForegroundMuted: '#bdd2d7',
	darkBackgroundBody: '#135e70',
	darkBackgroundShade: '#104f5f',
	darkBackgroundBodyAlt: '#0d414d',
	darkBackgroundShadeAlt: '#0a323c',
	darkSelected: '#61daff', // uses same color as action
	darkSelectedMuted: '#104f5f', // uses same color as shade
	darkBorder: '#95b7bf',
	darkBorderMuted: '#4D7680',
	darkAccent: '#61daff',
	darkOverlay: 'rgba(0, 0, 0, 0.8)',
	darkOverlayMuted: 'rgba(0, 0, 0, 0.3)',
	darkSystemError: '#d60000',
	darkSystemErrorMuted: '#422F47',
	darkSystemSuccess: '#0b996c',
	darkSystemSuccessMuted: '#133A4B',
	darkSystemWarning: '#f69900',
	darkSystemWarningMuted: '#393942',
	darkSystemInfo: '#00bfe9',
	darkSystemInfoMuted: '#193A5B',
} as const;
