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
	xs: '0.875rem',
	sm: '1rem',
	md: '1.25rem',
	lg: '1.5rem',
	xl: '2rem',
	xxl: '2.5rem',
	xxxl: '3rem',
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

export function mapSpacing(v: Spacing) {
	return `${v}rem`;
}

const gutter = { xs: 1, md: 2 } as const;

const maxWidth = {
	bodyText: '42em',
	container: '80rem', // 1280 px
};

const borderRadius = unit;

export const tokens = {
	breakpoints,
	rem,
	unit,
	font,
	fontSize,
	fontWeight,
	lineHeight,
	gutter,
	maxWidth,
	borderRadius,
};
