import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';

export type TableCellProps = PropsWithChildren<
	{
		verticalAlign?: 'top' | 'middle' | 'bottom';
		textAlign?: 'center' | 'left' | 'right';
	} & Pick<BoxProps, 'display'>
>;

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
