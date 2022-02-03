import { css } from '@emotion/react';
import {
	tokens,
	outline,
	BoxTheme,
	themes,
	themeValues,
	ResponsiveProp,
	mapResponsiveProp,
	mapSpacing,
	mq,
	fontGrid,
	Spacing,
	globalVars,
} from '@ag.ds-next/core';

type ThemeProps = Partial<{
	theme: BoxTheme;
}>;

const foregroundColorMap = {
	...themeValues.foreground,
	accent: globalVars.accent,
	error: globalVars.error,
	success: globalVars.success,
	warning: globalVars.warning,
	info: globalVars.info,
	hint: globalVars.hint,
	hintAlt: globalVars.hintAlt,
};

type ColorProps = Partial<{
	color: keyof typeof foregroundColorMap;
	background: keyof typeof themeValues.background;
}>;

function colorStyles({ color, background }: ColorProps) {
	return {
		color: color ? foregroundColorMap[color] : undefined,
		backgroundColor: background
			? themeValues.background[background]
			: undefined,
	};
}

type TypographyProps = Partial<{
	fontWeight: ResponsiveProp<keyof typeof tokens.fontWeight>;
	fontFamily: ResponsiveProp<keyof typeof tokens.font>;
	fontSize: ResponsiveProp<keyof typeof tokens.fontSize>;
	lineHeight: keyof typeof tokens.lineHeight;
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
			color: themeValues.background.body,
			backgroundColor: themeValues.foreground.action,
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
		'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'none'
	>;
	flexDirection: ResponsiveProp<'row' | 'column'>;
	flexWrap: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
	flexGrow: ResponsiveProp<number>;
	flexShrink: ResponsiveProp<number>;
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
	justifyContent,
	alignItems,
	gap,
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
		justifyContent: mapResponsiveProp(justifyContent),
		alignItems: mapResponsiveProp(alignItems),
		gap: mapResponsiveProp(gap, mapSpacing),
		width: mapResponsiveProp(width),
		minWidth: mapResponsiveProp(minWidth),
		maxWidth: mapResponsiveProp(maxWidth),
		height: mapResponsiveProp(height),
		minHeight: mapResponsiveProp(minHeight),
		maxHeight: mapResponsiveProp(maxHeight),
	};
}

type BorderProps = Partial<{
	border: boolean;
	borderLeft: boolean;
	borderRight: boolean;
	borderTop: boolean;
	borderBottom: boolean;
	borderX: boolean;
	borderY: boolean;
	rounded: boolean;
}>;

function borderStyles({
	border,
	borderLeft,
	borderRight,
	borderTop,
	borderBottom,
	borderX,
	borderY,
	rounded,
}: BorderProps) {
	const anyBorder =
		border || borderLeft || borderRight || borderBottom || borderX || borderY;
	return {
		borderWidth: 0,
		borderLeftWidth: border ?? borderX ?? borderLeft ? `1px` : undefined,
		borderRightWidth: border ?? borderX ?? borderRight ? `1px` : undefined,
		borderTopWidth: border ?? borderY ?? borderTop ? `1px` : undefined,
		borderBottomWidth: border ?? borderY ?? borderBottom ? `1px` : undefined,
		borderColor: anyBorder ? themeValues.border : undefined,
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
	color: themeValues.foreground.action,
	textDecoration: 'underline',
	textDecorationSkip: 'auto',

	'&:hover': {
		color: themeValues.foreground.text,
		textDecoration: 'none',
	},
};

type FocusProps = Partial<{ focus: boolean }>;
export const focusStyles = {
	':focus': outline,
	'&::-moz-focus-inner': {
		border: 0,
	},
};

export type BoxProps = ThemeProps &
	ColorProps &
	BorderProps &
	FocusProps &
	TypographyProps &
	LayoutProps &
	LinkProps &
	PaddingProps;

export function boxStyles({
	theme,
	color,
	background,
	border,
	borderLeft,
	borderRight,
	borderTop,
	borderBottom,
	borderX,
	borderY,
	rounded,
	display,
	flexDirection,
	flexWrap,
	flexGrow,
	flexShrink,
	justifyContent,
	alignItems,
	gap,
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
	focus,
	link,
	lineHeight,
	...restProps
}: BoxProps) {
	return [
		css([
			theme ? themes[theme] : undefined,

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
					borderLeft,
					borderRight,
					borderTop,
					borderBottom,
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
					justifyContent,
					alignItems,
					gap,
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
			}),
		]),
		restProps,
	];
}
