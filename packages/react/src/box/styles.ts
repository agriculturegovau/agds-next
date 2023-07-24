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
	palette: ResponsiveProp<BoxPalette>;
	dark: boolean;
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

export const foregroundColorMap = {
	text: boxPalette.foregroundText,
	action: boxPalette.foregroundAction,
	muted: boxPalette.foregroundMuted,
	accent: boxPalette.accent,
	error: boxPalette.systemError,
	success: boxPalette.systemSuccess,
	warning: boxPalette.systemWarning,
	info: boxPalette.systemInfo,
	inherit: 'inherit',
};
type ForegroundColor = keyof typeof foregroundColorMap;

export const backgroundColorMap = {
	body: boxPalette.backgroundBody,
	shade: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundBodyAlt,
	shadeAlt: boxPalette.backgroundShadeAlt,
};
type BackgroundColor = keyof typeof backgroundColorMap;

const borderColorMap = {
	border: boxPalette.border,
	muted: boxPalette.borderMuted,
	accent: boxPalette.accent,
} as const;

type BorderColor = keyof typeof borderColorMap;

type ColorProps = Partial<{
	color: ResponsiveProp<ForegroundColor>;
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
	fontWeight: ResponsiveProp<FontWeight>;
	fontFamily: ResponsiveProp<Font>;
	fontSize: ResponsiveProp<FontSize>;
	lineHeight: LineHeight;
}>;

function typographyStyles({
	fontWeight,
	fontFamily,
	fontSize: _fontSize,
	lineHeight: _lineHeight = 'default',
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
	flexDirection: ResponsiveProp<
		'row' | 'column' | 'row-reverse' | 'column-reverse'
	>;
	flexWrap: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
	flexGrow: ResponsiveProp<number>;
	flexShrink: ResponsiveProp<number>;
	gridColumnSpan: ResponsiveProp<number>;
	gridColumnStart: ResponsiveProp<number>;
	gridColumnEnd: ResponsiveProp<number>;
	justifyContent: ResponsiveProp<
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	>;
	alignItems: ResponsiveProp<
		'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	>;
	gap: ResponsiveProp<Spacing>;
	columnGap: ResponsiveProp<Spacing>;
	rowGap: ResponsiveProp<Spacing>;
	width: ResponsiveProp<number | string>;
	minWidth: ResponsiveProp<number | string>;
	maxWidth: ResponsiveProp<number | string>;
	height: ResponsiveProp<number | string>;
	minHeight: ResponsiveProp<number | string>;
	maxHeight: ResponsiveProp<number | string>;
}>;

function layoutStyles({
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
	border: ResponsiveProp<boolean>;
	borderWidth: ResponsiveProp<BorderWidth>;
	borderColor: ResponsiveProp<BorderColor>;
	borderLeft: ResponsiveProp<boolean>;
	borderLeftWidth: ResponsiveProp<BorderWidth>;
	borderRight: ResponsiveProp<boolean>;
	borderRightWidth: ResponsiveProp<BorderWidth>;
	borderTop: ResponsiveProp<boolean>;
	borderTopWidth: ResponsiveProp<BorderWidth>;
	borderBottom: ResponsiveProp<boolean>;
	borderBottomWidth: ResponsiveProp<BorderWidth>;
	borderX: ResponsiveProp<boolean>;
	borderY: ResponsiveProp<boolean>;
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
	paddingTop: ResponsiveProp<Spacing>;
	paddingBottom: ResponsiveProp<Spacing>;
	paddingRight: ResponsiveProp<Spacing>;
	paddingLeft: ResponsiveProp<Spacing>;
	paddingX: ResponsiveProp<Spacing>;
	paddingY: ResponsiveProp<Spacing>;
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

type FocusProps = Partial<{ focus: boolean }>;
export const focusStyles = {
	':focus': packs.outline,
	'&::-moz-focus-inner': {
		border: 0,
	},
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
	palette,
	dark,
	light,
	color,
	background,
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
	paddingTop,
	paddingBottom,
	paddingRight,
	paddingLeft,
	paddingX,
	paddingY,
	padding,
	fontWeight,
	fontFamily,
	fontSize,
	lineHeight,
	focus,
	link,
	highContrastOutline,
	...restProps
}: BoxProps) {
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
				}),

				...(link ? linkStyles : undefined),
				...(focus ? focusStyles : undefined),
				...(highContrastOutline ? highContrastOutlineStyles : undefined),
			}),
		]),
		restProps,
	];
}
