import { CSSObject } from '@emotion/react';
import { FontSize, tokens, LineHeight } from '../tokens';

/** Ensures that font-size and line-height snaps to the 4px grid. */

export const fontGridVars = {
	xs: {
		size: '--typography-xs',
		nospace: '--typography-xs-nospace',
		heading: '--typography-xs-heading',
		default: '--typography-xs-default',
	},
	sm: {
		size: '--typography-sm',
		nospace: '--typography-sm-nospace',
		heading: '--typography-sm-heading',
		default: '--typography-sm-default',
	},
	md: {
		size: '--typography-md',
		nospace: '--typography-md-nospace',
		heading: '--typography-md-heading',
		default: '--typography-md-default',
	},
	lg: {
		size: '--typography-lg',
		nospace: '--typography-lg-nospace',
		heading: '--typography-lg-heading',
		default: '--typography-lg-default',
	},
	xl: {
		size: '--typography-xl',
		nospace: '--typography-xl-nospace',
		heading: '--typography-xl-heading',
		default: '--typography-xl-default',
	},
	xxl: {
		size: '--typography-xxl',
		nospace: '--typography-xxl-nospace',
		heading: '--typography-xxl-heading',
		default: '--typography-xxl-default',
	},
	xxxl: {
		size: '--typography-xxxl',
		nospace: '--typography-xxxl-nospace',
		heading: '--typography-xxxl-heading',
		default: '--typography-xxxl-default',
	},
};

const fontScales = Object.keys(
	tokens.fontSize
) as (keyof typeof tokens.fontSize)[];

const lineHeights = Object.keys(
	tokens.lineHeight
) as (keyof typeof tokens.lineHeight)[];

export function generateFontGrid() {
	let cssVars: CSSObject = {};

	for (const scale of fontScales) {
		const scaleVars: [string, string | number][] = [];
		const fontSizes = Object.keys(tokens.fontSize[scale]) as FontSize[];

		for (const size of fontSizes) {
			scaleVars.push([
				fontGridVars[size]['size'],
				`${tokens.fontSize[scale][size]}rem`,
			]);
			for (const lineHeight of lineHeights) {
				scaleVars.push([
					fontGridVars[size][lineHeight],
					calculateLineHeight(scale, size, lineHeight),
				]);
			}
		}

		if (scale === 'xs') {
			cssVars = { ...cssVars, ...Object.fromEntries(scaleVars) };
		} else {
			const key = tokens.mediaQuery.min[scale];
			cssVars[key] = Object.fromEntries(scaleVars);
		}
	}

	return cssVars;
}

export const fontGrid = (
	fontSize: FontSize | number,
	lineHeight: LineHeight
) => {
	if (typeof fontSize === 'number') {
		return {
			fontSize: `${fontSize}rem`,
			lineHeight: calculateLineHeight('sm', fontSize, lineHeight),
		};
	}
	return {
		fontSize: `var(${fontGridVars[fontSize]['size']})`,
		lineHeight: `var(${fontGridVars[fontSize][lineHeight]})`,
	};
};

const calculateLineHeight = (
	scale: keyof typeof tokens.fontSize,
	fontSize: FontSize | number,
	lineHeight: LineHeight
) => {
	const fSizeRem =
		typeof fontSize === 'number' ? fontSize : tokens.fontSize[scale][fontSize];
	const fSizePx = fSizeRem * tokens.rem;
	const lHeight = tokens.lineHeight[lineHeight];
	const totalHeight =
		Math.round((fSizePx * lHeight) / tokens.unit) * tokens.unit;
	const calcLineHeight = totalHeight / fSizePx;
	return calcLineHeight;
};
