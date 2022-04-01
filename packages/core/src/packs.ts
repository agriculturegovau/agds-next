import { boxPalette } from './boxPalette';
import { mapSpacing, tokens } from './tokens';

// Packs

const control = {
	sm: {
		width: mapSpacing(1.5),
		height: mapSpacing(1.5),
		borderWidth: tokens.borderWidth.md,
	},
	md: {
		width: mapSpacing(2),
		height: mapSpacing(2),
		borderWidth: tokens.borderWidth.md,
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

const underline = {
	textDecoration: 'underline',
	textDecorationSkipInk: 'auto',
} as const;

export const packs = {
	control,
	input,
	outline,
	underline,
};
