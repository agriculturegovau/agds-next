import { boxPalette } from './boxPalette';
import { tokens } from './tokens';

// Packs

const control = {
	sm: {
		fontSize: `${tokens.fontSize.xs}rem`,
		lineHeight: tokens.lineHeight.nospace,
		height: '2.125rem', // 34 px
	},
	md: {
		fontSize: `${tokens.fontSize.md}rem`,
		lineHeight: tokens.lineHeight.nospace,
		height: '2.875rem', // 46 px
	},
};

const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: boxPalette.foregroundFocus,
	outlineOffset: 0.5 * tokens.unit,
};

export const packs = {
	control,
	outline,
};
