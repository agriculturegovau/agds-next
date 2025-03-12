import { boxPalette } from './boxPalette';
import { mapSpacing, tokens } from './tokens';
import { fontGrid } from './utils';

// Packs

const control = {
	sm: {
		width: mapSpacing(1.5),
		height: mapSpacing(1.5),
		borderWidth: tokens.borderWidth.lg,
	},
	md: {
		width: mapSpacing(2),
		height: mapSpacing(2),
		borderWidth: tokens.borderWidth.lg,
	},
};

const input = {
	sm: {
		...fontGrid('sm', 'default'),
		height: '2rem', // 32 px
	},
	md: {
		...fontGrid('sm', 'default'),
		height: '3rem', // 48 px
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

const truncate = {
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
} as const;

export const print = {
	hidden: {
		'@media print': {
			display: 'none !important',
		},
	},
	visible: {
		'@media print': {
			display: 'block !important',
			height: 'auto !important',
		},
	},
	// for context that requires background on print (eg. white text on dark background)
	exactColor: {
		'@media print': {
			'-webkit-print-color-adjust': 'exact',
			printColorAdjust: 'exact',
		},
	},
	// hide element if it contains href
	hideLinkURL: {
		'@media print': {
			'&[href]:after': {
				display: 'none',
			},
		},
	},
};

export const packs = {
	control,
	input,
	outline,
	underline,
	print,
	truncate,
};
