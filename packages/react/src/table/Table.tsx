import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '../box';
import { boxPalette } from '../core';
import { TableContext } from './TableContext';

export type TableProps = PropsWithChildren<{
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
	/** Setting this to -1 allows the table to be focusable. */
	tabIndex?: number;
	/** The table-layout CSS property sets the algorithm used to lay out cells, rows, and columns. */
	tableLayout?: 'auto' | 'fixed';
	/** The id of the element that labels the table */
	'aria-labelledby'?: string;
	/** The id of the element that describes the table */
	'aria-describedby'?: string;
	/** The total number of rows in the table */
	'aria-rowcount'?: number;
	/** The id of the table */
	id?: string;
}>;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{
		children,
		striped,
		tabIndex,
		tableLayout = 'auto',
		'aria-labelledby': ariaLabelledby,
		'aria-describedby': ariaDescribedby,
		'aria-rowcount': ariaRowcount,
		id,
	},
	ref
) {
	return (
		<TableContext.Provider value={{ tableLayout }}>
			<Box
				as="table"
				ref={ref}
				tabIndex={tabIndex}
				fontSize="sm"
				focusRingFor="keyboard"
				width="100%"
				display="table"
				id={id}
				css={{
					borderCollapse: 'collapse',
					borderSpacing: 0,
					tableLayout,
					...(striped && {
						"tbody tr:nth-last-of-type(odd):not([aria-selected='true'])": {
							backgroundColor: boxPalette.backgroundShade,
						},
					}),
				}}
				aria-labelledby={ariaLabelledby}
				aria-describedby={ariaDescribedby}
				aria-rowcount={ariaRowcount}
			>
				{children}
			</Box>
		</TableContext.Provider>
	);
});
