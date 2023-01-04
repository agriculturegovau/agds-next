import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '../box';
import { boxPalette } from '../core';

export type TableProps = PropsWithChildren<{
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
	/** Setting this to -1 allows the table to be focusable */
	tabIndex?: number;
}>;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{ children, striped, tabIndex },
	ref
) {
	return (
		<Box
			as="table"
			ref={ref}
			tabIndex={tabIndex}
			fontSize="sm"
			focus
			width="100%"
			display="table"
			css={{
				borderCollapse: 'collapse',
				borderSpacing: 0,

				'tbody tr:nth-last-of-type( odd )': {
					backgroundColor: striped ? boxPalette.backgroundShade : 'transparent',
				},
			}}
		>
			{children}
		</Box>
	);
});
