import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { FontWeight, ResponsiveProp } from '../core';

export type TableCellProps = PropsWithChildren<{
	/** The HTML element to render. */
	as?: 'td' | 'th';
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Sets the font weight of the cell. */
	fontWeight?: FontWeight;
	/** Essential if you are using TableCell as a row header (as="th"). This defines the cells that the header (defined in the <th>) element relates to. */
	scope?: 'row' | 'rowgroup';
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'center' | 'left' | 'right';
	/** Sets the vertical alignment of the content. */
	verticalAlign?: 'top' | 'middle' | 'bottom';
}>;

export const TableCell = ({
	as = 'td',
	children,
	display,
	fontWeight = 'normal',
	verticalAlign = 'top',
	textAlign = 'left',
	scope,
}: TableCellProps) => {
	return (
		<Box
			as={as}
			padding={0.75}
			borderBottom
			borderColor="muted"
			color="text"
			fontWeight={fontWeight}
			focus
			display={display}
			css={{ verticalAlign, textAlign }}
			scope={scope}
		>
			{children}
		</Box>
	);
};
