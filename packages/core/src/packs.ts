import { boxPalette } from './boxPalette';
import { mapSpacing, tokens } from './tokens';
import { fontGrid } from './utils';

// Packs

/* Used for styling form control elements (`Radio`, `Checkbox`, etc) */
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

/* Used for styling form input elements (`TextInput`, `Select`, etc) */
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

/* Used for adding focus rings to elements */
const outline = {
	outlineWidth: '3px',
	outlineStyle: 'solid',
	outlineColor: boxPalette.foregroundFocus,
	outlineOffset: 0.5 * tokens.unit,
};

/* Used for adding underlines to text elements */
const underline = {
	textDecoration: 'underline',
	textDecorationSkipInk: 'auto',
} as const;

/* Used for styling disabling form elements */
const disabled = {
	cursor: 'not-allowed',
	opacity: 0.3,
};

/* Used for toggling elements visibility when printing */
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
};

export const packs = {
	control,
	input,
	outline,
	underline,
	print,
	disabled,
};
