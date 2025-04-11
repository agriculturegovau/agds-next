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
				aria-describedby={ariaDescribedby}
				aria-labelledby={ariaLabelledby}
				aria-rowcount={ariaRowcount}
				as="table"
				css={{
					borderCollapse: 'collapse',
					borderSpacing: 0,
					tableLayout,
					...(striped && {
						"tbody tr:nth-last-of-type(odd):not([aria-selected='true'], [data-has-background])":
							{
								backgroundColor: boxPalette.backgroundShade,
							},
					}),
				}}
				display="table"
				focusRingFor="keyboard"
				fontSize="sm"
				id={id}
				ref={ref}
				tabIndex={tabIndex}
				width="100%"
			>
				{children}
			</Box>
		</TableContext.Provider>
	);
});
