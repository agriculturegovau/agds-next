import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export type ColumnProps = BoxProps & {
	columnSpan: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
	columnStart?: ResponsiveProp<
		1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	>;
	columnEnd?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
};

export const Column = forwardRefWithAs<'div', ColumnProps>(function Column(
	{ columnSpan, columnStart, columnEnd, ...props },
	ref
) {
	const styles = columnStyles({ columnSpan, columnStart, columnEnd });
	return <Box ref={ref} css={styles} {...props} />;
});

const columnStyles = ({
	columnSpan,
	columnStart,
	columnEnd,
}: Pick<ColumnProps, 'columnSpan' | 'columnStart' | 'columnEnd'>) => {
	return mq({
		gridColumn: mapResponsiveProp(columnSpan, (v) => `span ${v}/span ${v}`),
		...(columnStart && {
			gridColumnStart: mapResponsiveProp(columnStart),
		}),
		...(columnEnd && {
			gridColumnEnd: mapResponsiveProp(columnEnd),
		}),
	});
};
