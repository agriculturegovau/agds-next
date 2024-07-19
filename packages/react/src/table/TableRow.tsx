import { PropsWithChildren } from 'react';
import { boxPalette, tokens } from '../core';
import { theme } from '../ag-branding';
import { useTableContext } from './TableContext';
import { minContainerBreakpointForFrozenColumns } from './TableScroller';

export type TableRowProps = PropsWithChildren<{
	/** The row index of the table row. */
	'aria-rowindex'?: number;
	/** Style the row when a cell contains an error. */
	invalid?: boolean;
	/** Indicates the current selected state of the table row. */
	selected?: boolean;
}>;

export function TableRow({
	'aria-rowindex': ariaRowindex,
	children,
	invalid,
	selected,
}: TableRowProps) {
	const { frozenColumnsOffsets, striped, tableLayout } = useTableContext();

	const frozenColumnStyles = frozenColumnsOffsets?.reduce(
		(acc, { columnNumber, offsetValue, isLastColumn }) => {
			return {
				[minContainerBreakpointForFrozenColumns]: {
					...acc[minContainerBreakpointForFrozenColumns],
					[`& :nth-child(${columnNumber}):where(td, th)`]: {
						background: 'inherit',
						position: 'sticky',
						...(isLastColumn
							? {
									right: offsetValue,
							  }
							: {
									left: offsetValue,
							  }),
					},
				},
			};
		},
		{ [minContainerBreakpointForFrozenColumns]: {} }
	);

	return (
		<tr
			aria-selected={selected}
			aria-rowindex={ariaRowindex}
			css={{
				position: 'relative',
				...(selected && {
					...(tableLayout === 'auto' && {
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

				// Background colour logic
				/**
				 * Default to body's background for:
				 * - disappearing text beneath frozen columns,
				 * - easy overwriting for state based background (e.g. invalid) with 'inherit'.
				 */
				background: 'var(--agds-background-body)',

				/**
				 * Striped ignores:
				 * - `tr` in `thead` as it's an `only-child`,
				 * - `data-invalid` as it's more important.
				 * */
				...(striped && {
					"&:not(:only-child):nth-last-of-type(odd):not([aria-selected='true']):not([data-invalid='true'])":
						{
							background: boxPalette.backgroundShade,
						},
				}),

				// Individually applied styles to freeze selected columns
				...frozenColumnStyles,

				// Invalid background is the highest priority
				...(invalid && {
					'&': { background: theme.lightSystemErrorMuted },
				}),
			}}
			data-invalid={invalid}
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
