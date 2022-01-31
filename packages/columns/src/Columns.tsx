import { ReactNode } from 'react';
import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	Spacing,
	mapSpacing,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnsProps = BoxProps & {
	children: ReactNode;
	gridGap?: ResponsiveProp<Spacing>;
	columnGap?: ResponsiveProp<Spacing>;
	rowGap?: ResponsiveProp<Spacing>;
};

export const Columns = forwardRefWithAs<'div', ColumnsProps>(function Columns(
	{ gridGap, columnGap, rowGap, ...props },
	ref
) {
	const styles = columnsStyles({ gridGap, columnGap, rowGap });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnsStyles = ({
	gridGap,
	columnGap,
	rowGap,
}: Pick<ColumnsProps, 'gridGap' | 'columnGap' | 'rowGap'>) => {
	return mq({
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridGap: mapResponsiveProp(gridGap, mapSpacing),
		columnGap: mapResponsiveProp(columnGap, mapSpacing),
		rowGap: mapResponsiveProp(rowGap, mapSpacing),
	});
};
