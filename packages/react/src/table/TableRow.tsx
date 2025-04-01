import { PropsWithChildren } from 'react';
import { theme } from '../ag-branding';
import { boxPalette, tokens } from '../core';
import { useTableContext } from './TableContext';

export type TableRowProps = PropsWithChildren<{
	/** The row index of the table row. */
	'aria-rowindex'?: number;
	/** Style the row when a cell contains an error. */
	invalid?: boolean;
	/** Callback function to execute when the row is clicked. Callback is not run when clicked element is not a th, tr or td. */
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

	function handleTableRowClick(event: React.MouseEvent<HTMLTableRowElement>) {
		// Check when a element is positioned above then the table row element
		// Cancel the rows click event if target is not a <th>, <tr> or <td>
		const targetElement = event.target as HTMLElement;
		if (!('nodeName' in targetElement)) return;
		if (!['TH', 'TR', 'TD'].includes(targetElement.nodeName)) return;

		event.stopPropagation();
		if (!onClick) return;
		onClick(event);
	}

	return (
		<tr
			aria-rowindex={ariaRowindex}
			aria-selected={selected}
			css={{
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
							borderWidth: tokens.borderWidth.sm,
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
				}),
				...(onClick && {
					...(tableLayout === 'auto' && {
						position: 'relative',

						'&:hover': {
							'& > td, th': {
								cursor: 'pointer',
							},

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
					// // Chrome and Firefox doesn't support ::after elements in fixed table layouts
					// // FIXME Once Chrome Firefox fixes this issue, these alternative styles should be removed
					...(tableLayout === 'fixed' && {
						...(selected && alternativeSelectedStyles),
						...(onClick && alternativeHoverStyles),
					}),

					// // Safari does not support relative positioning on `tr` elements
					// // FIXME Once safari fixes this issue, these alternative styles should be removed
					// // More info https://www.reddit.com/r/css/comments/s195xg/safari_alternative_to_positionrelative_on_tr/?rdt=41288
					'@supports (-webkit-appearance: -apple-pay-button)': {
						...(selected && alternativeSelectedStyles),
						...(onClick && alternativeHoverStyles),
					},
				}),
			}}
			onClick={onClick ? handleTableRowClick : undefined}
		>
			{children}
		</tr>
	);
}

// Use an outline instead of an ::after element
const alternativeSelectedStyles = {
	backgroundColor: boxPalette.selectedMuted,
	outlineColor: boxPalette.selected,
	outlineOffset: '-3px',
	outlineStyle: 'solid',
	outlineWidth: '1px',
	'&::after': { display: 'none' },
};

const alternativeHoverStyles = {
	'&:hover': {
		outlineColor: boxPalette.selected,
		outlineOffset: '-3px',
		outlineStyle: 'solid',
		outlineWidth: '2px',
	},
	'&::after': { display: 'none' },
};
