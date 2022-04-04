import { FontSize, tokens, LineHeight } from '../tokens';

export const fontGrid = (fontSize: FontSize, lineHeight: LineHeight) => {
	return {
		fontSize: `var(--font-size-${fontSize})`,
		lineHeight: `var(--font-size-${fontSize}-${lineHeight})`,
	};
};

/** Ensures that font-size and line-height snaps to the 4px grid. */
export const generateLineHeight = (
	fontSize: FontSize,
	lineHeight: LineHeight
) => {
	const fSizeRem =
		typeof fontSize === 'number' ? fontSize : tokens.fontSize[fontSize];
	const fSizePx = fSizeRem * tokens.rem;
	const lHeight = tokens.lineHeight[lineHeight];

	const totalHeight =
		Math.round((fSizePx * lHeight) / tokens.unit) * tokens.unit;
	const calcLineHeight = totalHeight / fSizePx;

	return calcLineHeight;
};
