import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnProps = BoxProps & {
	colSpan: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
};

export const Column = forwardRefWithAs<'div', ColumnProps>(function Column(
	{ colSpan, ...props },
	ref
) {
	const styles = columnStyles({ colSpan });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnStyles = ({ colSpan }: Pick<ColumnProps, 'colSpan'>) => {
	return mq({
		gridColumn: mapResponsiveProp(colSpan, (v) => `span ${v}/span ${v}`),
	});
};
