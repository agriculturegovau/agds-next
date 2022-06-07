import { PropsWithChildren } from 'react';
import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	Spacing,
	mapSpacing,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnsProps = PropsWithChildren<
	Pick<BoxProps, 'gap' | 'alignItems'> & {
		columnGap?: ResponsiveProp<Spacing>;
		rowGap?: ResponsiveProp<Spacing>;
	}
>;

export const Columns = forwardRefWithAs<'div', ColumnsProps>(function Columns(
	{ gap, columnGap, rowGap, ...props },
	ref
) {
	const styles = columnsStyles({ gap, columnGap, rowGap });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnsStyles = ({
	gap = 1.5,
	columnGap,
	rowGap,
}: Pick<ColumnsProps, 'gap' | 'columnGap' | 'rowGap'>) => {
	return mq({
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridGap: mapResponsiveProp(gap, mapSpacing),
		columnGap: mapResponsiveProp(columnGap, mapSpacing),
		rowGap: mapResponsiveProp(rowGap, mapSpacing),
	});
};
