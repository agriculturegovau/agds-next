import { tokens } from './tokens';
import { generateLineHeight } from './utils/fontGrid';

const fontSizes = Object.keys(
	tokens.fontSize
) as (keyof typeof tokens.fontSize)[];

const fontSizeDesktop = Object.keys(
	tokens.fontSizeDesktop
) as (keyof typeof tokens.fontSizeDesktop)[];

const lineHeights = Object.keys(
	tokens.lineHeight
) as (keyof typeof tokens.lineHeight)[];

export function generateFontGrid() {
	const entries: [string, string | number][] = [];
	const desktopEntries: [string, string | number][] = [];

	for (const fontSize of fontSizes) {
		entries.push([
			`--font-size-${fontSize}`,
			`${tokens.fontSize[fontSize]}rem`,
		]);
		for (const lineHeight of lineHeights) {
			entries.push([
				`--font-size-${fontSize}-${lineHeight}`,
				generateLineHeight(fontSize, lineHeight),
			]);
		}
	}

	for (const fontSize of fontSizeDesktop) {
		desktopEntries.push([
			`--font-size-${fontSize}`,
			`${tokens.fontSizeDesktop[fontSize]}rem`,
		]);
		for (const lineHeight of lineHeights) {
			desktopEntries.push([
				`--font-size-${fontSize}-${lineHeight}`,
				generateLineHeight(fontSize, lineHeight),
			]);
		}
	}

	return {
		...Object.fromEntries(entries),
		[tokens.mediaQuery.min.sm]: Object.fromEntries(desktopEntries),
	};
}
