import { boxPalette } from './boxPalette';
import { tokens } from './tokens';

// Packs

const control = {
	sm: {
		fontSize: `${tokens.fontSize.sm}rem`,
		lineHeight: tokens.lineHeight.nospace,
		width: '1.75rem', // 28 px
		height: '1.75rem', // 28 px
		borderWidth: 2,
	},
	md: {
		fontSize: `${tokens.fontSize.sm}rem`,
		lineHeight: tokens.lineHeight.nospace,
		width: '2.375rem', // 38 px
		height: '2.375rem', // 38 px
		borderWidth: 2,
	},
};

const input = {
	sm: {
		fontSize: `${tokens.fontSize.xs}rem`,
		lineHeight: tokens.lineHeight.nospace,
		height: '2.125rem', // 34 px
	},
	md: {
		fontSize: `${tokens.fontSize.sm}rem`,
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
	outline,
	control,
	input,
};
