import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import { CalendarContainer } from './CalendarContainer';
import { CalendarNavbar } from './CalendarNavBar';

export type CalendarProps = DayPickerProps;

export const Calendar = ({
	navbarElement = CalendarNavbar,
	...props
}: CalendarProps) => (
	<CalendarContainer>
		<DayPicker navbarElement={navbarElement} {...props} />
	</CalendarContainer>
);
