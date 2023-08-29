// Tokens

const breakpoint = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
} as const;

const mediaQuery = {
	min: {
		xs: `@media(min-width: ${breakpoint.xs}px)`,
		sm: `@media(min-width: ${breakpoint.sm}px)`,
		md: `@media(min-width: ${breakpoint.md}px)`,
		lg: `@media(min-width: ${breakpoint.lg}px)`,
		xl: `@media(min-width: ${breakpoint.xl}px)`,
	},
	max: {
		xs: `@media(max-width: ${breakpoint.sm - 1}px)`,
		sm: `@media(max-width: ${breakpoint.md - 1}px)`,
		md: `@media(max-width: ${breakpoint.lg - 1}px)`,
		lg: `@media(max-width: ${breakpoint.xl - 1}px)`,
	},
};

const rem = 16;

/** "unit" used for all type and grid calculations */
const unit = 4;

const font = {
	body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
	monospace:
		"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
} as const;

export type Font = keyof typeof font;

/** Use as rem values */
const fontSize = {
	xs: {
		xs: 0.875,
		sm: 1,
		md: 1.25,
		lg: 1.5,
		xl: 1.75,
		xxl: 2,
		xxxl: 2.5,
	},
	sm: {
		xs: 0.875,
		sm: 1,
		md: 1.25,
		lg: 1.5,
		xl: 2,
		xxl: 2.5,
		xxxl: 3,
	},
} as const;

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const fontWeight = {
	normal: 'normal',
	bold: 'bold',
} as const;

export type FontWeight = keyof typeof fontWeight;

/** lineHeight-map - Predetermined line-height mapped to keyword */
const lineHeight = {
	nospace: 1,
	heading: 1.25,
	default: 1.5,
} as const;

export type LineHeight = keyof typeof lineHeight;

export type Spacing = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;

export function mapSpacing(v: Spacing) {
	return `${v}rem`;
}

const containerPadding = { xs: 0.75, md: 2 } as const;

const maxWidth = {
	bodyText: '42em',
	container: '80rem', // 1280 px
	field: {
		xs: '5rem', // 80 px
		sm: '8rem', // 128 px
		md: '13rem', // 208 px
		lg: '18rem', // 288 px
		xl: '24rem', // 384 px
	},
} as const;

export type MaxWidth = keyof typeof maxWidth;
export type FieldMaxWidth = keyof typeof maxWidth.field;

const borderRadius = unit;

const borderWidth = {
	sm: 1,
	md: 2,
	lg: 3,
	xl: 4,
	xxl: 8,
} as const;

export type BorderWidth = keyof typeof borderWidth;

const transition = {
	duration: 250, // in milliseconds (ms)
	timingFunction: 'ease', // https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
};

const zIndex = {
	base: 0,
	elevated: 1,
	overlay: 100,
	dialog: 110,
	popover: 200,
	skipLink: 999,
};

export type ZIndex = keyof typeof zIndex;

/** A set of predefined box-shadows. */
const shadow = {
	/** Use for clickable cards */
	sm: '0px 2px 4px rgba(0, 0, 0, 0.15)',
	/** Use for Modals and FilterDrawer */
	lg: '0px 16px 32px rgba(0, 0, 0, 0.20)',
};

export type Shadow = keyof typeof shadow;

export const tokens = {
	breakpoint,
	mediaQuery,
	rem,
	unit,
	font,
	fontSize,
	fontWeight,
	lineHeight,
	containerPadding,
	maxWidth,
	borderRadius,
	borderWidth,
	transition,
	zIndex,
	shadow,
};
