import { PropsWithChildren } from 'react';
import { backgroundColorMap, type BackgroundColor } from '../box';
import { boxPalette, tokens } from '../core';
import { theme } from '../ag-branding';
import { useTableContext } from './TableContext';

export type TableRowProps = PropsWithChildren<{
	/** The row index of the table row. */
	'aria-rowindex'?: number;
	/** The background colour of the row. Overridden by `invalid` or `selected`. */
	background?: BackgroundColor;
	/** Style the row when a cell contains an error. */
	invalid?: boolean;
	/** Indicates the current selected state of the table row. */
	selected?: boolean;
}>;

export function TableRow({
	'aria-rowindex': ariaRowindex,
	background,
	children,
	invalid,
	selected,
}: TableRowProps) {
	const { tableLayout } = useTableContext();
	return (
		<tr
			aria-rowindex={ariaRowindex}
			aria-selected={selected}
			css={{
				backgroundColor: invalid
					? theme.lightSystemErrorMuted
					: background
					? backgroundColorMap[background]
					: undefined,
				...(selected && {
					...(tableLayout === 'auto' && {
						position: 'relative',
						backgroundColor: boxPalette.selectedMuted,

						// Add outline
						'&::after': {
							content: '""',
							pointerEvents: 'none',
							position: 'absolute',
							inset: 0,
							borderWidth: tokens.borderWidth.md,
							borderColor: boxPalette.selected,
							borderStyle: 'solid',
						},

						// Remove the border top (if next table row is selected)
						":has(+ tr[aria-selected='true'])::after": {
							borderBottomWidth: 0,
						},

						// Remove the border top from the next table row (if next table row is selected)
						'+ tr::after': {
							borderTopWidth: 0,
						},
					}),

					// Chrome and Firefox doesn't support ::after elements in fixed table layouts
					// FIXME Once Chrome Firefox fixes this issue, these alternative styles should be removed
					...(tableLayout === 'fixed' && alternativeSelectedStyles),

					// Safari does not support relative positioning on `tr` elements
					// FIXME Once safari fixes this issue, these alternative styles should be removed
					// More info https://www.reddit.com/r/css/comments/s195xg/safari_alternative_to_positionrelative_on_tr/?rdt=41288
					'@supports (-webkit-appearance: -apple-pay-button)':
						alternativeSelectedStyles,
				}),
			}}
			data-has-background={Boolean(background || invalid) || undefined}
		>
			{children}
		</tr>
	);
}

// Use an outline instead of an ::after element
const alternativeSelectedStyles = {
	backgroundColor: boxPalette.selectedMuted,
	outlineWidth: '2px',
	outlineStyle: 'solid',
	outlineColor: boxPalette.selected,
	outlineOffset: '-3px',
	'&::after': { display: 'none' },
};
