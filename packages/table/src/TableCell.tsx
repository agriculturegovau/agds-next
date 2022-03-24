import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';

export type TableCellProps = PropsWithChildren<{
	textAlign?: 'center' | 'left' | 'right';
}> &
	Pick<BoxProps, 'display'>;

export const TableCell = ({
	children,
	textAlign = 'left',
	...props
}: TableCellProps) => {
	return (
		<Box
			padding={0.75}
			borderBottom
			color="text"
			focus
			as="td"
			css={{ textAlign }}
			{...props}
		>
			{children}
		</Box>
	);
};
