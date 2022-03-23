import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import { CalendarContainer } from './CalendarContainer';
import { CalendarNavbar } from './CalendarNavBar';

export type CalendarProps = DayPickerProps & {
	range?: boolean;
};

export const Calendar = ({
	navbarElement = CalendarNavbar,
	range = false,
	...props
}: CalendarProps) => (
	<CalendarContainer range={range}>
		<DayPicker navbarElement={navbarElement} {...props} />
	</CalendarContainer>
);
