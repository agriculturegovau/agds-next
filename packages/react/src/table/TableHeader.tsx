import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { ResponsiveProp } from '../core';

export type TableHeaderProps = PropsWithChildren<{
	/** The HTML element to render. */
	as?: 'td' | 'th';
	/** Specifies how many columns this cell spans */
	colSpan?: number;
	/** Can be used to conditionally hide or show table cells at different breakpoints. */
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Specifies how many rows this cell spans */
	rowSpan?: number;
	/** Defines the cells that the header (defined in the <th>) element relates to. */
	scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'left' | 'center' | 'right';
	/** Sets the width of the column. */
	width?: ResponsiveProp<string | number>;
}>;

export const TableHeader = ({
	as = 'th',
	children,
	colSpan,
	rowSpan,
	scope,
	textAlign = 'left',
	width,
	...props
}: TableHeaderProps) => {
	return (
		<Box
			as={as}
			color="text"
			css={{ position: 'relative' }}
			colSpan={colSpan}
			focusRingFor="keyboard"
			fontWeight="bold"
			padding={0.75}
			rowSpan={rowSpan}
			scope={scope}
			textAlign={textAlign}
			width={width}
			{...props}
		>
			{children}
		</Box>
	);
};
