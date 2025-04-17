import { PropsWithChildren, type RefObject } from 'react';
import { Box } from '../box';
import {
	reactDayPickerStyles,
	reactDayRangePickerStyles,
} from './reactDayPickerStyles';

export type CalendarContainerProps = PropsWithChildren<{}>;

export function CalendarContainer({ children }: CalendarContainerProps) {
	return (
		<Box
			aria-label="Choose date"
			aria-modal
			css={reactDayPickerStyles}
			display="inline-block"
			paddingX={[0.25, 1]}
			paddingY={1}
			role="dialog"
		>
			{children}
		</Box>
	);
}

export type CalendarRangeContainerProps = PropsWithChildren<{
	calendarRef?: RefObject<HTMLDivElement>;
	dateRange?: { from?: Date; to?: Date };
	inputMode?: 'from' | 'to';
}>;

export function CalendarRangeContainer({
	calendarRef,
	children,
	inputMode,
}: CalendarRangeContainerProps) {
	return (
		<Box
			aria-label="Choose date range"
			aria-modal
			css={[reactDayPickerStyles, reactDayRangePickerStyles(inputMode)]}
			display="inline-block"
			paddingX={[0.25, 1]}
			paddingY={1}
			ref={calendarRef}
			role="dialog"
		>
			{children}
		</Box>
	);
}
