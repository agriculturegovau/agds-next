import { css } from '@emotion/react';
import {
	tokens,
	BoxPalette,
	boxPalettes,
	boxPalette,
	ResponsiveProp,
	mapResponsiveProp,
	mapSpacing,
	mq,
	fontGrid,
	Spacing,
	packs,
	BorderWidth,
	FontWeight,
	FontSize,
	LineHeight,
	Font,
	breakpointNames,
} from '../core';

type PaletteProps = Partial<{
	/** Sets the colour palette, which can also be changed at breakpoints.
	 * @see https://design-system.agriculture.gov.au/foundations/tokens/colour
	 */
	palette: ResponsiveProp<BoxPalette>;
	/** Sets the colour palette to dark always.
	 * @see https://design-system.agriculture.gov.au/foundations/tokens/colour
	 */
	dark: boolean;
	/** Sets the colour palette to light always.
	 * @see https://design-system.agriculture.gov.au/foundations/tokens/colour
	 */
	light: boolean;
}>;

function paletteStyles({ palette, dark, light }: PaletteProps) {
	if (palette) {
		// If the `palette` prop is a string, nothing special is required
		if (typeof palette === 'string') return boxPalettes[palette];

		// Use the `mapResponsiveProp` utility to convert the prop to an array matching each named breakpoints
		const [xsBreakpointPalette, ...breakpointPalettes] = mapResponsiveProp(
			palette
		) as BoxPalette[];

		// The first item in the array does not need a media query since it is for devices larger than 0px
		return [
			boxPalettes[xsBreakpointPalette],
			Object.fromEntries(
				breakpointNames
					.filter((name) => name !== 'xs')
					.map((name, idx) => [
						tokens.mediaQuery.min[name],
						boxPalettes[breakpointPalettes[idx]],
					])
			),
		];
	}
	if (dark) return boxPalettes.dark;
	if (light) return boxPalettes.light;
}

const borderColorMap = {
	border: boxPalette.border,
	muted: boxPalette.borderMuted,
	accent: boxPalette.accent,
	selected: boxPalette.selected,
	info: boxPalette.systemInfo,
	success: boxPalette.systemSuccess,
	error: boxPalette.systemError,
	warning: boxPalette.systemWarning,
} as const;

export type BorderColor = keyof typeof borderColorMap;

export const foregroundColorMap = {
	text: boxPalette.foregroundText,
	action: boxPalette.foregroundAction,
	selected: boxPalette.selected,
	muted: boxPalette.foregroundMuted,
	accent: boxPalette.accent,
	info: boxPalette.systemInfo,
	success: boxPalette.systemSuccess,
	error: boxPalette.systemError,
	warning: boxPalette.systemWarning,
	inherit: 'inherit',
};

export type ForegroundColor = keyof typeof foregroundColorMap;

export const backgroundColorMap = {
	body: boxPalette.backgroundBody,
	shade: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundBodyAlt,
	shadeAlt: boxPalette.backgroundShadeAlt,
	info: boxPalette.systemInfoMuted,
	success: boxPalette.systemSuccessMuted,
	error: boxPalette.systemErrorMuted,
	warning: boxPalette.systemWarningMuted,
};

export type BackgroundColor = keyof typeof backgroundColorMap;

type ColorProps = Partial<{
	/** Maps tokens to the CSS color property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
	 */
	color: ResponsiveProp<ForegroundColor>;
	/** Maps tokens to the CSS background-color property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
	 */
	background: ResponsiveProp<BackgroundColor>;
}>;

function colorStyles({ color, background }: ColorProps) {
	return {
		color: color
			? mapResponsiveProp(color, (t) => foregroundColorMap[t])
			: undefined,
		backgroundColor: background
			? mapResponsiveProp(background, (t) => backgroundColorMap[t])
			: undefined,
	};
}

type TypographyProps = Partial<{
	/** Maps tokens to the CSS font-weight property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
	 */
	fontWeight: ResponsiveProp<FontWeight>;
	/** Maps tokens to the CSS font-family property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
	 */
	fontFamily: ResponsiveProp<Font>;
	/** Maps tokens to the CSS font-size property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
	 */
	fontSize: ResponsiveProp<FontSize>;
	/** Maps tokens to the CSS line-height property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 */
	lineHeight: LineHeight;
	/** Maps tokens to the CSS text-align property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
	 */
	textAlign: ResponsiveProp<'left' | 'center' | 'right'>;
	/** If true, applies the CSS word-break: break-word property, or word-break: normal if false.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
	 */
	breakWords: boolean;
}>;

function typographyStyles({
	fontWeight,
	fontFamily,
	fontSize: _fontSize,
	lineHeight: _lineHeight = 'default',
	textAlign,
	breakWords,
}: TypographyProps) {
	const responsiveFontGrid = mapResponsiveProp(_fontSize, (t) =>
		fontGrid(t, _lineHeight)
	);

	const { fontSize, lineHeight } = responsiveFontGrid?.reduce<{
		fontSize: (string | null)[];
		lineHeight: (number | null)[];
	}>(
		(acc, entry, index) => {
			acc.fontSize[index] = isEntry(entry) ? entry.fontSize : null;
			acc.lineHeight[index] = isEntry(entry) ? entry.lineHeight : null;
			return acc;
		},
		{ fontSize: [], lineHeight: [] }
	) ?? { fontSize: undefined, lineHeight: undefined };

	return {
		fontWeight: mapResponsiveProp(fontWeight, (t) => tokens.fontWeight[t]),
		fontFamily: mapResponsiveProp(fontFamily, (t) => tokens.font[t]),
		fontSize,
		lineHeight,
		textAlign: mapResponsiveProp(textAlign),
		wordBreak:
			(breakWords === true && 'break-word') ||
			(breakWords === false && 'normal') ||
			// wordWrap will inherit by default
			undefined,
		'& ::selection': {
			color: boxPalette.backgroundBody,
			backgroundColor: boxPalette.foregroundAction,
		},
	};
}

function isEntry(a: unknown): a is {
	fontSize: string;
	lineHeight: number;
} {
	return !!a; // ie. not null or undefined
}
type LayoutProps = Partial<{
	/** Sets the CSS display property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
	 */
	display: ResponsiveProp<
		| 'block'
		| 'flex'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
		| 'table'
		| 'table-row-group'
		| 'table-header-group'
		| 'table-footer-group'
		| 'table-row'
		| 'table-cell'
		| 'table-column-group'
		| 'table-column'
		| 'table-caption'
		| 'grid'
		| 'inline-grid'
	>;
	/** Sets the CSS flex-direction property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
	 */
	flexDirection: ResponsiveProp<
		'row' | 'column' | 'row-reverse' | 'column-reverse'
	>;
	/** Sets the CSS flex-wrap property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
	 */
	flexWrap: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
	/** Sets the CSS flex-grow property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
	 */
	flexGrow: ResponsiveProp<number>;
	/** Sets the CSS flex-shrink property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
	 */
	flexShrink: ResponsiveProp<number>;
	/** Sets a subset of the CSS grid-columns property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-columns
	 */
	gridColumnSpan: ResponsiveProp<number>;
	/** Sets the CSS grid-column-start property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
	 */
	gridColumnStart: ResponsiveProp<number>;
	/** Sets the CSS grid-column-end property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
	 */
	gridColumnEnd: ResponsiveProp<number>;
	/** Sets the CSS justify-content property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	 */
	justifyContent: ResponsiveProp<
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	>;
	/** Sets the CSS align-items property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	 */
	alignItems: ResponsiveProp<
		'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	>;
	/** Sets the CSS align-self property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
	 */
	alignSelf: ResponsiveProp<
		'stretch' | 'start' | 'end' | 'center' | 'baseline'
	>;
	/** Maps tokens to the CSS gap property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
	 */
	gap: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS column-gap property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
	 */
	columnGap: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS row-gap property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
	 */
	rowGap: ResponsiveProp<Spacing>;
	/** Sets the CSS width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
	 */
	width: ResponsiveProp<number | string>;
	/** Sets the CSS min-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
	 */
	minWidth: ResponsiveProp<number | string>;
	/** Sets the CSS max-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
	 */
	maxWidth: ResponsiveProp<number | string>;
	/** Sets the CSS height property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
	 */
	height: ResponsiveProp<number | string>;
	/** Sets the CSS min-height property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
	 */
	minHeight: ResponsiveProp<number | string>;
	/** Sets the CSS max-height property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
	 */
	maxHeight: ResponsiveProp<number | string>;
}>;

function layoutStyles({
	alignSelf,
	display,
	flexDirection,
	flexWrap,
	flexGrow,
	flexShrink,
	gridColumnSpan,
	gridColumnStart,
	gridColumnEnd,
	justifyContent,
	alignItems,
	gap,
	columnGap,
	rowGap,
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
}: LayoutProps) {
	return {
		alignSelf: mapResponsiveProp(alignSelf),
		display: mapResponsiveProp(display),
		flexDirection: mapResponsiveProp(flexDirection),
		flexWrap: mapResponsiveProp(flexWrap),
		flexGrow: mapResponsiveProp(flexGrow),
		flexShrink: mapResponsiveProp(flexShrink),
		gridColumn: mapResponsiveProp(gridColumnSpan, (v) => `span ${v}/span ${v}`),
		gridColumnStart: mapResponsiveProp(gridColumnStart),
		gridColumnEnd: mapResponsiveProp(gridColumnEnd),
		justifyContent: mapResponsiveProp(justifyContent),
		alignItems: mapResponsiveProp(alignItems),
		gap: mapResponsiveProp(gap, mapSpacing),
		columnGap: mapResponsiveProp(columnGap, mapSpacing),
		rowGap: mapResponsiveProp(rowGap, mapSpacing),
		width: mapResponsiveProp(width),
		minWidth: mapResponsiveProp(minWidth),
		maxWidth: mapResponsiveProp(maxWidth),
		height: mapResponsiveProp(height),
		minHeight: mapResponsiveProp(minHeight),
		maxHeight: mapResponsiveProp(maxHeight),
	};
}

type BorderProps = Partial<{
	/** If true, renders a border on all sides using the relevant width. */
	border: ResponsiveProp<boolean>;
	/** Maps tokens to the CSS border-width property. Default: 'sm'.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
	 */
	borderWidth: ResponsiveProp<BorderWidth>;
	/** Maps tokens to the CSS border-color property. Default: 'border'.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
	 */
	borderColor: ResponsiveProp<BorderColor>;
	/** If true, renders a border on the left side using the relevant width. */
	borderLeft: ResponsiveProp<boolean>;
	/** Maps tokens to the CSS border-left-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
	 */
	borderLeftWidth: ResponsiveProp<BorderWidth>;
	/** If true, renders a border on the right side using the relevant width. */
	borderRight: ResponsiveProp<boolean>;
	/** Maps tokens to the CSS border-right-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
	 */
	borderRightWidth: ResponsiveProp<BorderWidth>;
	/** If true, renders a border on the top side using the relevant width. */
	borderTop: ResponsiveProp<boolean>;
	/** Maps tokens to the CSS border-top-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
	 */
	borderTopWidth: ResponsiveProp<BorderWidth>;
	/** If true, renders a border on the bottom side using the relevant width. */
	borderBottom: ResponsiveProp<boolean>;
	/** Maps tokens to the CSS border-bottom-width property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
	 */
	borderBottomWidth: ResponsiveProp<BorderWidth>;
	/** If true, renders a border on the left and right sides using the relevant width. */
	borderX: ResponsiveProp<boolean>;
	/** If true, renders a border on the top and bottom sides using the relevant width. */
	borderY: ResponsiveProp<boolean>;
	/** If true, rounds the element's corners by mapping tokens.borderRadius to the CSS border-radius property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
	 */
	rounded: boolean;
}>;

function mapBorderWidth(width: ResponsiveProp<BorderWidth>) {
	return mapResponsiveProp(width, (t) => tokens.borderWidth[t]);
}

function borderStyles({
	border,
	borderWidth = 'sm',
	borderColor = 'border',
	borderLeft,
	borderLeftWidth,
	borderRight,
	borderRightWidth,
	borderTop,
	borderTopWidth,
	borderBottom,
	borderBottomWidth,
	borderX,
	borderY,
	rounded,
}: BorderProps) {
	const anyBorder =
		border ||
		borderLeft ||
		borderRight ||
		borderTop ||
		borderBottom ||
		borderX ||
		borderY;
	return {
		borderWidth: 0,
		borderLeftWidth:
			border ?? borderX ?? borderLeft
				? mapBorderWidth(borderLeftWidth || borderWidth)
				: undefined,
		borderRightWidth:
			border ?? borderX ?? borderRight
				? mapBorderWidth(borderRightWidth || borderWidth)
				: undefined,
		borderTopWidth:
			border ?? borderY ?? borderTop
				? mapBorderWidth(borderTopWidth || borderWidth)
				: undefined,
		borderBottomWidth:
			border ?? borderY ?? borderBottom
				? mapBorderWidth(borderBottomWidth || borderWidth)
				: undefined,
		borderColor: anyBorder
			? mapResponsiveProp(borderColor, (t) => borderColorMap[t])
			: undefined,
		borderStyle: anyBorder ? 'solid' : undefined,
		borderRadius: rounded ? tokens.borderRadius : undefined,
	};
}

type PaddingProps = Partial<{
	/** Maps tokens to the CSS padding-top property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
	 */
	paddingTop: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding-bottom property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
	 */
	paddingBottom: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding-right property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
	 */
	paddingRight: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding-left property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
	 */
	paddingLeft: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding-left and padding-right properties.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
	 */
	paddingX: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding-bottom and padding-top properties.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
	 */
	paddingY: ResponsiveProp<Spacing>;
	/** Maps tokens to the CSS padding property.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
	 */
	padding: ResponsiveProp<Spacing>;
}>;

// TODO: Explain how overlapping shorthands padding is applied.
function paddingStyles({
	paddingTop,
	paddingBottom,
	paddingRight,
	paddingLeft,
	paddingX,
	paddingY,
	padding,
}: PaddingProps) {
	return {
		paddingTop: mapResponsiveProp(
			paddingTop ?? paddingY ?? padding,
			mapSpacing
		),
		paddingBottom: mapResponsiveProp(
			paddingBottom ?? paddingY ?? padding,
			mapSpacing
		),
		paddingRight: mapResponsiveProp(
			paddingRight ?? paddingX ?? padding,
			mapSpacing
		),
		paddingLeft: mapResponsiveProp(
			paddingLeft ?? paddingX ?? padding,
			mapSpacing
		),
	};
}

type LinkProps = Partial<{ link: boolean }>;
export const linkStyles = {
	...packs.underline,
	color: boxPalette.foregroundAction,
	cursor: 'pointer',

	'&:hover': {
		color: boxPalette.foregroundText,
		textDecoration: 'none',
	},

	// Display link URLs
	'@media print': {
		'&[href]:after': {
			content: '" (" attr(href) ")" !important',
		},
	},
};

type FocusProps = Partial<{
	/** @deprecated use focusRingFor="keyboard". */
	focus: boolean;
	/** Display a focus indicator when the element receives focus. 'all' shows for all users, includes programmatic focus, and 'keyboard' is for keyboard-only focus*/
	focusRingFor: 'all' | 'keyboard';
}>;
export const focusStyles = {
	':focus': packs.outline,
	':focus:not(:focus-visible)': { outline: 'none' },
	':focus-visible': packs.outline,
};
export const focusStylesAll = {
	':focus': packs.outline,
};

export const focusStylesMap = {
	all: focusStylesAll,
	keyboard: focusStyles,
};

type HighContrastProps = Partial<{
	/** If true, a solid outline will be visible in windows high contrast mode. */
	highContrastOutline: boolean;
}>;
export const highContrastOutlineStyles = {
	outline: '1px solid transparent',
};

export type BoxProps = PaletteProps &
	ColorProps &
	BorderProps &
	FocusProps &
	HighContrastProps &
	TypographyProps &
	LayoutProps &
	LinkProps &
	PaddingProps;

export function boxStyles({
	alignItems,
	alignSelf,
	background,
	border,
	borderBottom,
	borderBottomWidth,
	borderColor,
	borderLeft,
	borderLeftWidth,
	borderRight,
	borderRightWidth,
	borderTop,
	borderTopWidth,
	borderWidth,
	borderX,
	borderY,
	breakWords,
	color,
	columnGap,
	dark,
	display,
	flexDirection,
	flexGrow,
	flexShrink,
	flexWrap,
	focus,
	focusRingFor,
	fontFamily,
	fontSize,
	fontWeight,
	gap,
	gridColumnEnd,
	gridColumnSpan,
	gridColumnStart,
	height,
	highContrastOutline,
	justifyContent,
	light,
	lineHeight,
	link,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	palette,
	rounded,
	rowGap,
	textAlign,
	width,
	...restProps
}: BoxProps) {
	/* **LEGACY HANDLER**
	 * We've deprecated `focus` in favour of `focusRingFor?: 'all | 'keyboard'. This
	 * displays the focus ring for elements that are programmatically focused.
	 *
	 * `focus` maps to `focusRingFor: 'keyboard' for backwards compatibility.
	 */
	focusRingFor = focusRingFor || (focus ? 'keyboard' : undefined);
	if (focus && process.env.NODE_ENV !== 'production') {
		console.warn(
			'The `focus` prop is deprecated. Use `focusRingFor="keyboard"`.'
		);
	}

	return [
		css([
			paletteStyles({ palette, dark, light }),

			// common resets
			{
				boxSizing: 'border-box',
				listStyle: 'none',
				margin: 0,
				padding: 0,
			},

			mq({
				...colorStyles({ background, color }),

				...borderStyles({
					border,
					borderWidth,
					borderColor,
					borderLeft,
					borderLeftWidth,
					borderRight,
					borderRightWidth,
					borderTop,
					borderTopWidth,
					borderBottom,
					borderBottomWidth,
					borderX,
					borderY,
					rounded,
				}),

				...layoutStyles({
					alignSelf,
					display,
					flexDirection,
					flexWrap,
					flexGrow,
					flexShrink,
					gridColumnSpan,
					gridColumnStart,
					gridColumnEnd,
					justifyContent,
					alignItems,
					gap,
					columnGap,
					rowGap,
					width,
					minWidth,
					maxWidth,
					height,
					minHeight,
					maxHeight,
				}),

				...paddingStyles({
					paddingTop,
					paddingBottom,
					paddingRight,
					paddingLeft,
					paddingX,
					paddingY,
					padding,
				}),

				...typographyStyles({
					fontWeight,
					fontFamily,
					fontSize,
					lineHeight,
					textAlign,
					breakWords,
				}),

				...(link ? linkStyles : undefined),
				...(focusRingFor ? focusStylesMap[focusRingFor] : undefined),
				...(highContrastOutline ? highContrastOutlineStyles : undefined),
			}),
		]),
		restProps,
	];
}
