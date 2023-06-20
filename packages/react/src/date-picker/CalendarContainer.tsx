import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { reactDayPickerStyles } from './reactDayPickerStyles';

export type CalendarContainerProps = PropsWithChildren<{ range: boolean }>;

export function CalendarContainer({ children, range }: CalendarContainerProps) {
	return (
		<Box
			display="inline-block"
			paddingY={1}
			paddingX={[0.25, 1]}
			css={reactDayPickerStyles(range)}
		>
			{children}
		</Box>
	);
}
