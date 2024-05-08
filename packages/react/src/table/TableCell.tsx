import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { FontWeight, ResponsiveProp } from '../core';

export type TableCellProps = PropsWithChildren<{
	/** The HTML element to render. */
	as?: 'td' | 'th';
	/** Specifies how many columns this cell spans */
	colSpan?: number;
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Sets the font weight of the cell. */
	fontWeight?: FontWeight;
	/** Specifies how many rows this cell spans */
	rowSpan?: number;
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
	colSpan,
	display,
	fontWeight = 'normal',
	rowSpan,
	scope,
	textAlign = 'left',
	verticalAlign = 'top',
}: TableCellProps) => {
	return (
		<Box
			as={as}
			borderBottom
			borderColor="muted"
			color="text"
			colSpan={colSpan}
			css={{ verticalAlign }}
			display={display}
			focusFor="keyboard"
			fontWeight={fontWeight}
			padding={0.75}
			rowSpan={rowSpan}
			scope={scope}
			textAlign={textAlign}
		>
			{children}
		</Box>
	);
};
