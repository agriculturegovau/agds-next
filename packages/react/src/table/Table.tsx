import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '../box';
import { boxPalette } from '../core';

export type TableProps = PropsWithChildren<{
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
	/** Setting this to -1 allows the table to be focusable */
	tabIndex?: number;
	/** The id of the element that labels the table */
	ariaLabelledby?: string;
	/** The id of the element that describes the table */
	ariaDescribedby?: string;
}>;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{ children, striped, tabIndex, ariaLabelledby, ariaDescribedby },
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
			aria-labelledby={ariaLabelledby}
			aria-describedby={ariaDescribedby}
		>
			{children}
		</Box>
	);
});
