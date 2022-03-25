import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import { CalendarContainer } from './CalendarContainer';
import { CalendarNavbar } from './CalendarNavBar';

export type CalendarProps = Pick<
	DayPickerProps,
	| 'selectedDays'
	| 'onDayClick'
	| 'initialMonth'
	| 'numberOfMonths'
	| 'modifiers'
> & {
	range?: boolean;
};

export const Calendar = ({
	range = false,
	onDayClick,
	...props
}: CalendarProps) => {
	return (
		<CalendarContainer range={range}>
			<DayPicker
				navbarElement={CalendarNavbar}
				onDayClick={onDayClick}
				{...props}
			/>
		</CalendarContainer>
	);
};
