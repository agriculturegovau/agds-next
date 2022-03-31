import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { Calendar, CalendarProps } from './Calendar';
import { DateInput, DateInputProps } from './DatePickerInput';
import { parseDate, formatDate } from './utils';

type InputProps = Omit<
	DateInputProps,
	'value' | 'onChange' | 'buttonRef' | 'buttonOnClick'
>;

export type DatePickerProps = CalendarProps &
	InputProps & {
		value: Date | undefined;
		onChange: (day: Date | undefined) => void;
		placeholder?: string;
	};

export const DatePicker = ({
	value,
	onChange,
	initialMonth,
	...props
}: DatePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);

	// Popper state
	const triggerRef = useRef<HTMLButtonElement>(null);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const onDayClick = useCallback(
		(day: Date) => {
			// Update the input field with the selected day
			setInputValue(formatDate(day));
			// Trigger the callback
			onChange(day);
			// Close the calendar and focus the calendar icon
			closeCalendar();
			triggerRef.current?.focus();
		},
		[onChange, closeCalendar]
	);

	const [inputValue, setInputValue] = useState(value ? formatDate(value) : '');

	const onInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			setInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			onChange(parsedDate);
		},
		[onChange]
	);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	return (
		<div ref={setRefEl}>
			<DateInput
				{...props}
				value={inputValue}
				onChange={onInputChange}
				buttonRef={triggerRef}
				buttonOnClick={openCalendar}
			/>
			{isCalendarOpen ? (
				<div
					ref={setPopperEl}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<Calendar
						selectedDays={value}
						onDayClick={onDayClick}
						initialMonth={initialMonth || value}
						numberOfMonths={1}
						range={false}
					/>
				</div>
			) : null}
		</div>
	);
};
