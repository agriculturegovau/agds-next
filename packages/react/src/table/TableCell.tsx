import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { ResponsiveProp } from '../core';

export type TableCellProps = PropsWithChildren<{
	/** The HTML element to render. */
	as?: 'td' | 'th';
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Essential if you are using TableCell as a row header (th). This defines the cells that the header (defined in the <th>) element relates to. */
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
			fontWeight="normal"
			focus
			display={display}
			css={{ verticalAlign, textAlign }}
			scope={scope}
		>
			{children}
		</Box>
	);
};
