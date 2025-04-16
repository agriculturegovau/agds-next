import { PropsWithChildren } from 'react';
import { theme } from '../ag-branding';
import { boxPalette, tokens } from '../core';
import { useTableContext } from './TableContext';

export type TableRowProps = PropsWithChildren<{
	/** The row index of the table row. */
	'aria-rowindex'?: number;
	/** Style the row when a cell contains an error. */
	invalid?: boolean;
	/** Callback function to execute when the row is clicked. Callback is not run when the clicked element is not a td, th or tr. */
	onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => unknown;
	/** Indicates the current selected state of the table row. */
	selected?: boolean;
}>;

export function TableRow({
	'aria-rowindex': ariaRowindex,
	children,
	invalid,
	onClick,
	selected,
}: TableRowProps) {
	const { tableLayout } = useTableContext();

	function handleOnClick(event: React.MouseEvent<HTMLTableRowElement>) {
		// Check if the the target has an interactive parent before running row onClick
		const targetElement = event.target;
		if (
			(targetElement as HTMLElement).closest(
				'a, button, input, select, textarea'
			)
		) {
			return;
		}

		if ((targetElement as HTMLElement).closest('tr')) {
			event.stopPropagation();
			onClick?.(event);
		}
	}

	return (
		<tr
			aria-rowindex={ariaRowindex}
			aria-selected={selected}
			css={{
				...(selected && {
					...(tableLayout === 'auto' && {
						backgroundColor: boxPalette.selectedMuted,
						position: 'relative',

						// Add outline
						'&::after': {
							borderColor: boxPalette.selected,
							borderStyle: 'solid',
							borderWidth: tokens.borderWidth.sm,
							content: '""',
							inset: 0,
							pointerEvents: 'none',
							position: 'absolute',
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
				}),
				...(onClick && {
					...(tableLayout === 'auto' && {
						position: 'relative',

						'&:hover': {
							'& > td, & > th': {
								cursor: 'pointer',
							},

							// Add outline
							'&::after': {
								borderColor: boxPalette.selected,
								borderStyle: 'solid',
								borderWidth: tokens.borderWidth.md,
								content: '""',
								inset: 0,
								pointerEvents: 'none',
								position: 'absolute',
							},

							// Set border bottom for select & hover
							":has(+ tr[aria-selected='true'])::after": {
								borderBottomWidth: tokens.borderWidth.md,
							},
						},
					}),
				}),
				...(invalid && {
					background: theme.lightSystemErrorMuted,
				}),
				...((selected || onClick) && {
					// Chrome and Firefox doesn't support ::after elements in fixed table layouts
					// FIXME Once Chrome Firefox fixes this issue, these alternative styles should be removed
					...(tableLayout === 'fixed' && {
						...(selected && alternativeSelectedStyles),
						...(onClick && alternativeHoverStyles),
					}),

					// Safari does not support relative positioning on `tr` elements
					// FIXME Once safari fixes this issue, these alternative styles should be removed
					// More info https://www.reddit.com/r/css/comments/s195xg/safari_alternative_to_positionrelative_on_tr/?rdt=41288
					'@supports (-webkit-appearance: -apple-pay-button)': {
						...(selected && alternativeSelectedStyles),
						...(onClick && alternativeHoverStyles),
					},
				}),
			}}
			onClick={onClick ? handleOnClick : undefined}
		>
			{children}
		</tr>
	);
}

// Use an outline instead of an ::after element
const alternativeSelectedStyles = {
	backgroundColor: boxPalette.selectedMuted,
	outlineColor: boxPalette.selected,
	outlineOffset: -tokens.borderWidth.md,
	outlineStyle: 'solid',
	outlineWidth: tokens.borderWidth.sm,
	'&::after': { display: 'none' },
};

const alternativeHoverStyles = {
	'&:hover': {
		outlineColor: boxPalette.selected,
		outlineOffset: -tokens.borderWidth.lg,
		outlineStyle: 'solid',
		outlineWidth: tokens.borderWidth.md,
	},
	'&::after': { display: 'none' },
};
