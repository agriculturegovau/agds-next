import { FontSize, tokens } from './tokens';
import { generateLineHeight } from './utils/fontGrid';

const fontScales = Object.keys(
	tokens.fontSize
) as (keyof typeof tokens.fontSize)[];

const lineHeights = Object.keys(
	tokens.lineHeight
) as (keyof typeof tokens.lineHeight)[];

export function generateFontGrid() {
	let cssVars: Record<string, unknown> = {};

	for (const scale of fontScales) {
		const scaleVars: [string, string | number][] = [];
		const fontSizes = Object.keys(tokens.fontSize[scale]) as FontSize[];

		for (const size of fontSizes) {
			scaleVars.push([
				`--font-size-${size}`,
				`${tokens.fontSize[scale][size]}rem`,
			]);
			for (const lineHeight of lineHeights) {
				scaleVars.push([
					`--font-size-${size}-${lineHeight}`,
					generateLineHeight(scale, size, lineHeight),
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
