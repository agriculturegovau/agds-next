import { PropsWithChildren } from 'react';
import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';
import { ColumnRange } from './utils';

export type ColumnsProps = PropsWithChildren<{
	gap?: BoxProps['gap'];
	columnGap?: BoxProps['columnGap'];
	rowGap?: BoxProps['rowGap'];
	alignItems?: BoxProps['alignItems'];
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
