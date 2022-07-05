import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { ResponsiveProp } from '@ag.ds-next/core';

export type TableHeaderWidthType =
	| '10%'
	| '15%'
	| '20%'
	| '25%'
	| '30%'
	| '33%'
	| '35%'
	| '40%'
	| '45%'
	| '50%'
	| '55%'
	| '60%'
	| '65%'
	| '66%'
	| '70%'
	| '75%'
	| '80%'
	| '85%'
	| '90%';

export type TableHeaderProps = PropsWithChildren<{
	scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
	textAlign?: 'left' | 'center' | 'right';
	width?: ResponsiveProp<TableHeaderWidthType>;
}> &
	Pick<BoxProps, 'display'>;

export const TableHeader = ({
	children,
	textAlign = 'left',
	width,
	...props
}: TableHeaderProps) => {
	return (
		<Box
			as="th"
			color="text"
			padding={0.75}
			fontWeight="bold"
			focus
			width={width}
			css={{
				textAlign,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
