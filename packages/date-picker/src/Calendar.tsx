import React, { forwardRef } from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import FocusLock from 'react-focus-lock';
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

export type CalendarRef = DayPicker;

export const Calendar = forwardRef<CalendarRef, CalendarProps>(
	function Calendar({ range = false, onDayClick, ...props }, ref) {
		return (
			<FocusLock autoFocus={false} returnFocus>
				<CalendarContainer range={range}>
					<DayPicker
						ref={ref}
						navbarElement={CalendarNavbar}
						onDayClick={onDayClick}
						{...props}
					/>
				</CalendarContainer>
			</FocusLock>
		);
	}
);
