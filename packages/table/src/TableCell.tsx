import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { ResponsiveProp } from '@ag.ds-next/core';

export type TableCellProps = PropsWithChildren<{
	display?: ResponsiveProp<'none' | 'table-cell'>;
	textAlign?: 'center' | 'left' | 'right';
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
