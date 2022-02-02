import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnProps = BoxProps & {
	columnSpan: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
};

export const Column = forwardRefWithAs<'div', ColumnProps>(function Column(
	{ columnSpan, ...props },
	ref
) {
	const styles = columnStyles({ columnSpan });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnStyles = ({ columnSpan }: Pick<ColumnProps, 'columnSpan'>) => {
	return mq({
		gridColumn: mapResponsiveProp(columnSpan, (v) => `span ${v}/span ${v}`),
	});
};
