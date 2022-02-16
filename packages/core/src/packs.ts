import { boxPalette } from './boxPalette';
import { fontGrid } from './utils/fontGrid';
import { tokens } from './tokens';

// Packs

const control = {
	sm: {
		...fontGrid('xs', 'default'),
		height: '2.125rem', // 34 px
	},
	md: {
		...fontGrid('sm', 'default'),
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
