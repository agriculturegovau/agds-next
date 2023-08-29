import { PropsWithChildren } from 'react';
import { boxPalette, tokens } from '../core';

export type TableRowProps = PropsWithChildren<{
	/** Indicates the current selected state of the table row. */
	selected?: boolean;
}>;

export function TableRow({ children, selected }: TableRowProps) {
	return (
		<tr
			aria-selected={selected}
			css={{
				...(selected && {
					position: 'relative',
					backgroundColor: `${boxPalette.selectedMuted}`,

					// Add outline
					'&:after': {
						content: '""',
						pointerEvents: 'none',
						position: 'absolute',
						inset: 0,
						borderWidth: tokens.borderWidth.md,
						borderColor: boxPalette.selected,
						borderStyle: 'solid',
					},

					// Remove the border top (if next table row is selected)
					":has(+ tr[aria-selected='true']):after": {
						borderBottomWidth: 0,
					},

					// Remove the border top from the next table row (if next table row is selected)
					'+ tr:after': {
						borderTopWidth: 0,
					},

					// Safari does not support relative positioning on `tr` elements
					// So we're using an outline instead of the :after element to prevent the outline from being rendered incorrectly
					// FIXME Once safari fixes this issue, this code should be removed
					// More info https://www.reddit.com/r/css/comments/s195xg/safari_alternative_to_positionrelative_on_tr/?rdt=41288
					'@supports (-webkit-appearance: -apple-pay-button)': {
						outlineWidth: '2px',
						outlineStyle: 'solid',
						outlineColor: boxPalette.selected,
						outlineOffset: '-3px',

						'&:after': { display: 'none' },
					},
				}),
			}}
		>
			{children}
		</tr>
	);
}
