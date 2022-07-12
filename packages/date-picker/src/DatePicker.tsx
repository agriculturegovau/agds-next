import {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { usePopper } from 'react-popper';
import { SelectSingleEventHandler } from 'react-day-picker';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { CalendarSingle } from './Calendar';
import { DateInput, DateInputProps } from './DatePickerInput';
import { parseDate, formatDate } from './utils';

type DatePickerInputProps = Omit<
	DateInputProps,
	'value' | 'onChange' | 'buttonRef' | 'buttonOnClick'
>;

type DisabledDays =
	// Disable a specific date
	| Date
	// Disable a range of dates
	| { from: Date; to: Date }
	// Disabled all dates before a specific date
	| { before: Date }
	// Disabled all dates after a specific date
	| { after: Date };

type DatePickerCalendarProps = {
	initialMonth?: Date;
	disabledDays?: DisabledDays | DisabledDays[];
};

type DatePickerBaseProps = {
	/** The value of the field. */
	value: Date | undefined;
	/** Function to be fired following a change event. */
	onChange: (day: Date | undefined) => void;
};

export type DatePickerProps = DatePickerInputProps &
	DatePickerCalendarProps &
	DatePickerBaseProps;

export const DatePicker = ({
	value,
	onChange,
	initialMonth,
	disabledDays,
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

	const onSelect = useCallback<SelectSingleEventHandler>(
		(_, selectedDay, modifiers) => {
			// If the day is disabled, do nothing
			if (modifiers.disabled) return;
			// Update the input field with the selected day
			setInputValue(formatDate(selectedDay));
			// Trigger the callback
			onChange(selectedDay);
			// Close the calendar and focus the calendar icon
			closeCalendar();
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

	// Update the text inputs when the value updates
	useEffect(() => {
		setInputValue(value ? formatDate(value) : '');
	}, [value]);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	// Close the calendar when the user presses escape
	const handleEscape = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
			}
		},
		[isCalendarOpen, closeCalendar]
	);

	return (
		<div ref={setRefEl} onKeyDown={handleEscape}>
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
					<CalendarSingle
						initialFocus
						selected={value}
						onSelect={onSelect}
						defaultMonth={initialMonth || value}
						numberOfMonths={1}
						disabled={disabledDays}
					/>
				</div>
			) : null}
		</div>
	);
};
