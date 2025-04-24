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
	dateRange?: { from?: Date; to?: Date };
	Ref?: RefObject<HTMLDivElement>;
}>;

export function CalendarRangeContainer({
	children,
	Ref,
}: CalendarRangeContainerProps) {
	return (
		<Box
			aria-label="Choose date range"
			aria-modal
			css={[reactDayPickerStyles, reactDayRangePickerStyles]}
			display="inline-block"
			paddingX={[0.25, 1]}
			paddingY={1}
			ref={Ref}
			role="dialog"
		>
			{children}
		</Box>
	);
}
