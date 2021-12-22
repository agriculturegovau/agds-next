import { FontSize, tokens, LineHeight } from '../tokens';

export const fontGrid = (
	fontSize: FontSize | number,
	lineHeight: LineHeight
) => {
	const fSizeRem =
		typeof fontSize === 'number' ? fontSize : tokens.fontSize[fontSize];
	const fSizePx = fSizeRem * tokens.rem;
	const lHeight = tokens.lineHeight[lineHeight];

	const totalHeight =
		Math.round((fSizePx * lHeight) / tokens.unit) * tokens.unit;
	const calcLineHeight = totalHeight / fSizePx;
	return {
		fontSize: `${fSizeRem}rem`,
		lineHeight: calcLineHeight,
	};
};
