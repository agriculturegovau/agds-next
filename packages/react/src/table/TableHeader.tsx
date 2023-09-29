import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { ResponsiveProp } from '../core';

export type TableHeaderProps = PropsWithChildren<{
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Defines the cells that the header (defined in the <th>) element relates to. */
	scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'left' | 'center' | 'right';
	/** Sets the width of the column. */
	width?: ResponsiveProp<string | number>;
}>;

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
