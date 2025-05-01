import { PropsWithChildren, type Ref } from 'react';
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
	calendarRef?: Ref<HTMLDivElement>;
	dateRange?: { from?: Date; to?: Date };
}>;

export function CalendarRangeContainer({
	calendarRef,
	children,
}: CalendarRangeContainerProps) {
	return (
		<Box
			aria-label="Choose date range"
			aria-modal
			css={[reactDayPickerStyles, reactDayRangePickerStyles]}
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
