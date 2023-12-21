import { PropsWithChildren } from 'react';
import { Box } from '../box';
import {
	reactDayPickerStyles,
	reactDayRangePickerStyles,
} from './reactDayPickerStyles';

export type CalendarContainerProps = PropsWithChildren<{}>;

export function CalendarContainer({ children }: CalendarContainerProps) {
	return (
		<Box
			display="inline-block"
			paddingY={1}
			paddingX={[0.25, 1]}
			css={reactDayPickerStyles}
		>
			{children}
		</Box>
	);
}

export type CalendarRangeContainerProps = PropsWithChildren<{
	dateRange?: { from?: Date; to?: Date };
}>;

export function CalendarRangeContainer({
	children,
	dateRange,
}: CalendarRangeContainerProps) {
	return (
		<Box
			display="inline-block"
			paddingY={1}
			paddingX={[0.25, 1]}
			css={[reactDayPickerStyles, reactDayRangePickerStyles(dateRange)]}
		>
			{children}
		</Box>
	);
}
