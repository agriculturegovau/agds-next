import type { AllHTMLAttributes } from 'react';
import cn from 'classnames';
import { sprinkles, Sprinkles, lightTheme, darkTheme } from '@ag.ds-next/core';
import { forwardRefWithAs } from '@ag.ds-next/utils';

import * as boxClasses from './styles.css';

const themeMap = {
	light: lightTheme,
	dark: darkTheme,
};
type ElementProps = Omit<
	AllHTMLAttributes<HTMLElement>,
	'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'display'
>;

export type BoxProps = {
	theme?: 'light' | 'dark';
	border?: boolean;
	rounded?: boolean;
	className?: string;
} & Sprinkles;

export function boxStyles(props: BoxProps): [string, ElementProps] {
	const {
		// Sprinkles
		alignItems,
		background,
		borderColor,
		color,
		display,
		flexDirection,
		flexWrap,
		fontFamily,
		fontSize,
		fontWeight,
		gap,
		justifyContent,
		lineHeight,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
		//
		textAlign,

		// Others
		theme,
		rounded,
		border,
		className,
		// ElementProps
		...attrs
	} = props;
	return [
		cn([
			theme && themeMap[theme],
			(border || borderColor) && boxClasses.border,
			// rounded && boxClasses.rounded,
			sprinkles({
				alignItems,
				background,
				borderColor,
				color,
				display,
				flexDirection,
				flexWrap,
				fontFamily,
				fontSize,
				fontWeight,
				textAlign,
				gap,
				justifyContent,
				lineHeight,
				padding,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingX,
				paddingY,
			}),
			className,
		]),
		attrs,
	];
}

export const Box = forwardRefWithAs<'div', BoxProps>(function Box(
	{ as: Tag = 'div', ...props },
	ref
) {
	const [className, attrs] = boxStyles(props);
	return <Tag ref={ref} className={className} {...attrs} />;
});
