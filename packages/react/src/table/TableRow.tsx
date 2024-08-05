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
	const { frozenColumnsOffsets, striped } = useTableContext();
	// console.log(`{ frozenColumnsOffsets, striped, tableLayout }`, {
	// 	frozenColumnsOffsets,
	// 	striped,
	// 	tableLayout,
	// });
	const frozenColumnStyles = frozenColumnsOffsets?.reduce(
		(acc, { columnNumber, offsetValue, isLastColumn }) => {
			return {
				[minContainerBreakpointForFrozenColumns]: {
					...acc[minContainerBreakpointForFrozenColumns],
					[`& :nth-child(${columnNumber}):where(td, th)`]: {
						background: 'inherit',
						position: 'sticky !important',
						zIndex: tokens.zIndex.elevated,
						...(isLastColumn
							? {
									right: offsetValue,
							  }
							: {
									left: offsetValue,
							  }),
						'&:has([aria-expanded="true"])': {
							zIndex: tokens.zIndex.popover,
						},
					},
					// Better way of shadowing?
					// [`& :nth-child(${columnNumber}):where(td, th)::after`]: {
					// 	content: "''",
					// 	position: 'absolute',
					// 	width: '1rem',
					// 	bottom: 0,
					// 	top: 0,
					// 	...(isLastColumn
					// 		? {
					// 				background:
					// 					'linear-gradient(to left, rgba(0, 0, 0, 0.20), transparent)',
					// 				right: '100%',
					// 		  }
					// 		: {
					// 				background:
					// 					'linear-gradient(to right, rgba(0, 0, 0, 0.20), transparent)',
					// 				left: '100%',
					// 		  }),
					// },
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
				// Background colour logic
				/**
				 * Default to body's background for:
				 * - disappearing text beneath frozen columns,
				 * - easy overwriting for state based background (e.g. invalid) with 'inherit'.
				 */
				background: selected
					? boxPalette.selectedMuted
					: boxPalette.backgroundBody,
				position: 'relative',

				...(selected && {
					'[data-selected-outline]': {
						borderWidth: tokens.borderWidth.md,
						borderLeftWidth: tokens.borderWidth.none,
						borderRightWidth: tokens.borderWidth.none,
						borderColor: boxPalette.selected,
						borderStyle: 'solid',
					},

					'> :first-child [data-selected-outline]': {
						borderLeftWidth: tokens.borderWidth.md,
					},

					'> :last-child [data-selected-outline]': {
						borderRightWidth: tokens.borderWidth.md,
					},

					':has(+ tr[aria-selected="true"]) [data-selected-outline]': {
						borderBottomWidth: tokens.borderWidth.md,
						borderBottom: tokens.borderWidth.none,
					},

					'+ tr[aria-selected="true"] [data-selected-outline]': {
						borderTop: tokens.borderWidth.none,
						top: -1,
					},
				}),

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
