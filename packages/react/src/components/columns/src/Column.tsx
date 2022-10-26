import {
	forwardRefWithAs,
	ResponsiveProp,
	mapResponsiveProp,
	mq,
} from '../../core/src';
import { Box } from '../../box/src';
import { ColumnRange } from './utils';

export type ColumnProps = {
	columnSpan?: ResponsiveProp<ColumnRange>;
	columnStart?: ResponsiveProp<ColumnRange | 'first' | 'last'>;
	columnEnd?: ResponsiveProp<ColumnRange | 'first' | 'last'>;
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
		gridColumnStart: mapResponsiveProp(columnStart),
		gridColumnEnd: mapResponsiveProp(columnEnd),
	});
};
