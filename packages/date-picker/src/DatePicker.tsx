import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { Calendar, CalendarProps } from './Calendar';
import { format, parse, isValid } from 'date-fns';
import { DateInput, DateInputProps } from './DatePickerInput';

// TODO ref
// Debounced ???

export type DatePickerProps = CalendarProps &
	Omit<DateInputProps, 'value' | 'onChange' | 'buttonRef' | 'buttonOnClick'> & {
		value: Date | undefined;
		onChange: (day: Date | undefined) => void;
	};

export const DatePicker = ({ value, onChange, ...props }: DatePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 8],
				},
			},
		],
	});

	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;
	useClickOutside(clickOutsideRef, closeCalendar);

	const [inputValue, setInputValue] = useState('');

	const onDayClick = useCallback(
		(day: Date) => {
			setInputValue(format(day, 'dd/MM/yyyy'));
			onChange(day);
			buttonRef.current?.focus();
			closeCalendar();
		},
		[onChange, closeCalendar]
	);

	// TODO debounced
	const onInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setInputValue(value);

			// Check if the user has a entered a full date (31/01/2000)
			if (value.length !== 10) {
				onChange(undefined);
				return;
			}

			const parsedDate = parse(value, 'dd/MM/yyyy', new Date());
			onChange(isValid(parsedDate) ? parsedDate : undefined);
		},
		[onChange]
	);

	return (
		<div ref={setRefEl}>
			<DateInput
				{...props}
				value={inputValue}
				onChange={onInputChange}
				placeholder="DD/MM/YYYY"
				buttonRef={buttonRef}
				buttonOnClick={openCalendar}
			/>
			{isCalendarOpen ? (
				<div ref={setPopperEl} style={styles.popper} {...attributes.popper}>
					<Calendar
						initialMonth={value}
						selectedDays={[value]}
						onDayClick={onDayClick}
					/>
				</div>
			) : null}
		</div>
	);
};
