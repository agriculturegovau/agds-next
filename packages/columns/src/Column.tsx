import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnProps = Omit<BoxProps, 'width'> & {
	width: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
};

export const Column = forwardRefWithAs<'div', ColumnProps>(function Column(
	{ width, ...props },
	ref
) {
	const styles = columnStyles({ width });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnStyles = ({ width }: Pick<ColumnProps, 'width'>) => {
	return mq({
		gridColumn: mapResponsiveProp(width, (v) => `span ${v}/span ${v}`),
	});
};
