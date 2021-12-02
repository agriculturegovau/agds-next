import { css } from '@emotion/react';
import {
	tokens,
	themes,
	themeColors,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';

type SpacingToken = keyof typeof tokens.spacing;

type ThemeProps = Partial<{
	theme: keyof typeof themes;
	color: keyof typeof themeColors.foreground;
	background: keyof typeof themeColors.background;
}>;

type TypographyProps = Partial<{
	fontWeight: keyof typeof tokens.fontWeight;
	fontFamily: keyof typeof tokens.font;
	fontSize: keyof typeof tokens.fontsize;
	lineHeight: keyof typeof tokens.lineHeight;
}>;

type LayoutProps = Partial<{
	display: ResponsiveProp<'block' | 'flex' | 'none'>;
	flexDirection: ResponsiveProp<'row' | 'column'>;
	flexWrap: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
	justifyContent: ResponsiveProp<
		| 'flex-start'
		| 'flex-end'
		| 'center,'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	>;
	alignItems: ResponsiveProp<
		'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	>;
	gap: ResponsiveProp<SpacingToken>;
}>;

type BorderProps = Partial<{
	border: boolean;
	rounded: boolean;
}>;

type PaddingProps = Partial<
	Record<
		| 'paddingTop'
		| 'paddingBottom'
		| 'paddingRight'
		| 'paddingLeft'
		| 'paddingX'
		| 'paddingY'
		| 'padding',
		ResponsiveProp<SpacingToken>
	>
>;

function borderStyles(rounded?: boolean) {
	return {
		borderColor: themeColors.border,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: rounded ? tokens.borderRadius : undefined,
	};
}

/**
 * TODO: Explain how overlapping shorthands padding is applied.
 */

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

function mapSpacing(v: keyof typeof tokens.spacing | undefined | null) {
	return v === undefined || v === null ? undefined : tokens.spacing[v];
}

export type BoxProps = ThemeProps &
	BorderProps &
	TypographyProps &
	LayoutProps &
	PaddingProps;

export function boxStyles({
	theme,
	color,
	background,
	border,
	rounded,
	display,
	flexDirection,
	flexWrap,
	justifyContent,
	alignItems,
	gap,
	paddingTop,
	paddingBottom,
	paddingRight,
	paddingLeft,
	paddingX,
	paddingY,
	padding,
	...restProps
}: BoxProps) {
	return [
		css([
			theme ? themes[theme] : undefined,
			mq({
				// Color
				color: color ? themeColors.foreground[color] : undefined,
				backgroundColor: background
					? themeColors.background[background]
					: undefined,

				// Border
				...(border ? borderStyles(rounded) : undefined),

				// Layout
				display: mapResponsiveProp(display),
				flexDirection: mapResponsiveProp(flexDirection),
				flexWrap: mapResponsiveProp(flexWrap),
				justifyContent: mapResponsiveProp(justifyContent),
				alignItems: mapResponsiveProp(alignItems),
				gap: mapResponsiveProp(gap, mapSpacing),
				...paddingStyles({
					paddingTop,
					paddingBottom,
					paddingRight,
					paddingLeft,
					paddingX,
					paddingY,
					padding,
				}),
			}),
		]),
		restProps,
	];
}
