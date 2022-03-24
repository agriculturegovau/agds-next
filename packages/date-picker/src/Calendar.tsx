import React, { useCallback, MouseEvent } from 'react';
import DayPicker, { DayModifiers, DayPickerProps } from 'react-day-picker';
import { CalendarContainer } from './CalendarContainer';
import { CalendarNavbar } from './CalendarNavBar';

export type CalendarProps = Pick<
	DayPickerProps,
	| 'selectedDays'
	| 'onDayClick'
	| 'disabledDays'
	| 'modifiers'
	| 'initialMonth'
	| 'fromMonth'
	| 'toMonth'
	| 'numberOfMonths'
> & {
	range?: boolean;
};

export const Calendar = ({
	range = false,
	onDayClick: onDayClickProp,
	...props
}: CalendarProps) => {
	// Prevent the callback firing if the selected date has been disabled
	const onDayClick = useCallback(
		(day: Date, modifiers: DayModifiers, event: MouseEvent<HTMLDivElement>) => {
			if (modifiers.disabled) return;
			onDayClickProp?.(day, modifiers, event);
		},
		[onDayClickProp]
	);

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
