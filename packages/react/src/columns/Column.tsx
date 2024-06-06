import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '../core';
import { Box, BoxProps } from '../box';
import { ColumnRange } from './utils';

export type ColumnProps = Pick<BoxProps, 'alignSelf' | 'justifySelf'> & {
	columnSpan?: ResponsiveProp<ColumnRange>;
	columnStart?: ResponsiveProp<ColumnRange | 'first' | 'last'>;
	columnEnd?: ResponsiveProp<ColumnRange | 'first' | 'last'>;
};

export const Column = forwardRefWithAs<'div', ColumnProps>(function Column(
	{ alignSelf, columnSpan, columnStart, columnEnd, justifySelf, ...props },
	ref
) {
	const styles = columnStyles({ columnSpan, columnStart, columnEnd });
	return (
		<Box
			alignSelf={alignSelf}
			css={styles}
			justifySelf={justifySelf}
			ref={ref}
			{...props}
		/>
	);
});

const columnStyles = ({
	columnSpan,
	columnStart,
	columnEnd,
}: Pick<ColumnProps, 'columnSpan' | 'columnStart' | 'columnEnd'>) => {
	return mq({
		gridColumn: mapResponsiveProp(columnSpan, (v) => `span ${v}/span ${v}`),
		gridColumnStart: mapResponsiveProp(columnStart),
		gridColumnEnd: mapResponsiveProp(columnEnd),
	});
};
