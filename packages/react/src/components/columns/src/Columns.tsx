import { PropsWithChildren } from 'react';
import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '../../core/src';
import { Box, BoxProps } from '../../box/src';
import { ColumnRange } from './utils';

export type ColumnsProps = PropsWithChildren<{
	/** The amount of space between each column or row. */
	gap?: BoxProps['gap'];
	/** The amount of space between each column. */
	columnGap?: BoxProps['columnGap'];
	/** The amount of space between each row. */
	rowGap?: BoxProps['rowGap'];
	/** Position children within their cell in the Grid. */
	alignItems?: BoxProps['alignItems'];
	/** The amount of columns that should be created. */
	cols?: ResponsiveProp<ColumnRange>;
}>;

export const Columns = forwardRefWithAs<'div', ColumnsProps>(function Columns(
	{ gap = 1.5, cols = 12, ...props },
	ref
) {
	const styles = columnsStyles({ cols });
	return <Box ref={ref} gap={gap} css={styles} {...props} />;
});

const columnsStyles = ({ cols }: { cols: ResponsiveProp<ColumnRange> }) => {
	return mq({
		display: 'grid',
		gridTemplateColumns: mapResponsiveProp(
			cols,
			(val) => `repeat(${val}, 1fr)`
		),
	});
};
