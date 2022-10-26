import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { reactDayPickerStyles } from './reactDayPickerStyles';

const componentTokens = {
	shadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export type CalendarContainerProps = PropsWithChildren<{ range: boolean }>;

export function CalendarContainer({ children, range }: CalendarContainerProps) {
	return (
		<Box
			display="inline-block"
			background="body"
			padding={[0.25, 1]}
			paddingTop={1.5}
			border
			borderColor="muted"
			rounded
			css={[
				{ position: 'relative', boxShadow: componentTokens.shadow },
				reactDayPickerStyles(range),
			]}
		>
			{children}
		</Box>
	);
}
