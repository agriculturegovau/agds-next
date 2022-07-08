import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { ResponsiveProp } from '@ag.ds-next/core';

export type TableCellProps = PropsWithChildren<{
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'center' | 'left' | 'right';
	/** Sets the vertical alignment of the content. */
	verticalAlign?: 'top' | 'middle' | 'bottom';
}>;

export const TableCell = ({
	children,
	display,
	verticalAlign = 'top',
	textAlign = 'left',
}: TableCellProps) => {
	return (
		<Box
			as="td"
			padding={0.75}
			borderBottom
			borderColor="muted"
			color="text"
			focus
			display={display}
			css={{ verticalAlign, textAlign }}
		>
			{children}
		</Box>
	);
};
