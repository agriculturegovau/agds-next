import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

export type TableProps = PropsWithChildren<{
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
	/** Setting this to -1 allows the table to be focusable */
	tabIndex?: number;
}>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
	({ children, striped, tabIndex }, ref) => {
		return (
			<Box
				as="table"
				ref={ref}
				tabIndex={tabIndex}
				fontSize="sm"
				focus
				width="100%"
				css={{
					borderCollapse: 'collapse',
					borderSpacing: 0,

					'tbody tr:nth-last-of-type( odd )': {
						backgroundColor: striped
							? boxPalette.backgroundShade
							: 'transparent',
					},
				}}
			>
				{children}
			</Box>
		);
	}
);

Table.displayName = 'Table';
