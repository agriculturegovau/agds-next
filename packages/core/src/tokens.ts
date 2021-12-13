// Tokens

const breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
} as const;

const rem = '16px';

/** "unit" used for all type and grid calculations */
const unit = 4;
const font = {
	body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
	monospace:
		"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};
export type Font = 'body' | 'mono';

/** Predetermined pixel sizes from a 1.25 type-scale rounded to the nearest "unit" (vertical grid) */
const fontSize = {
	xs: ['0.875rem', '14px'],
	sm: ['1rem', '16px'],
	md: ['1.25rem', '20px'],
	lg: ['1.5rem', '24px'],
	xl: ['2rem', '32px'],
	xxl: ['2.5rem', '40px'],
	xxxl: ['3rem', '48px'],
};
export type FontSize = keyof typeof fontSize;

const fontWeight = {
	normal: 'normal',
	bold: 'bold',
} as const;

/** lineHeight-map - Predetermined line-height mapped to keyword */
const lineHeight = {
	nospace: 1,
	heading: 1.25,
	default: 1.5,
};

export type LintHeight = keyof typeof lineHeight;

// FIXME... it's unclear how spacing should work at the moment.
export type Spacing = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;

/* awe-maxwidth for line lengths (the ‘measure’) */
const maxwidth = '42em';

/** Colors light theme */

export type ColorTheme = {
	foreground: {
		text: string;
		action: string;
		focus: string;
		muted: string;
	};
	background: {
		page: string;
		shade: string;
		pageAlt: string;
		shadeAlt: string;
	};
	border: string;
};

const light: ColorTheme = {
	foreground: {
		text: '#313131',
		action: '#00698f',
		focus: '#9263de',
		muted: '#626262',
	},
	background: {
		page: '#FFFFFF',
		shade: '#f5f5f5',
		pageAlt: '#ebebeb',
		shadeAlt: '#e0e0e0',
	},
	border: '#808080',
};

const dark: ColorTheme = {
	foreground: {
		text: '#FFFFFF',
		action: '#61daff',
		focus: '#c390f9',
		muted: '#bdd2d7',
	},
	background: {
		page: '#135e70',
		shade: '#104f5f',
		pageAlt: '#0d414d',
		shadeAlt: '#0a323c',
	},
	border: '#95b7bf',
};

const systemColors = {
	error: '#d60000',
	success: '#0b996c',
	warning: '#f69900',
	info: '#00bfe9',
	hint: '#6f777b',
	hintAlt: '#61696b',
};
export type SystemColor = keyof typeof systemColors;

const borderRadius = unit;

export const tokens = {
	breakpoints,
	rem,
	unit,
	font,
	fontSize,
	fontWeight,
	lineHeight,
	// spacing,
	maxwidth,
	light,
	dark,
	systemColors,
	borderRadius,
};
