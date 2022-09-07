import {
	ChangeEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { usePopper } from 'react-popper';
import { SelectSingleEventHandler } from 'react-day-picker';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { CalendarSingle } from './Calendar';
import { DateInput, DateInputProps } from './DatePickerInput';
import { parseDate, formatDate, constrainDate } from './utils';

type DatePickerInputProps = Omit<
	DateInputProps,
	'value' | 'onChange' | 'buttonRef' | 'buttonOnClick'
>;

type DatePickerCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
	/** The calendar month to initially show, if no value is set. */
	initialMonth?: Date;
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
	minDate,
	maxDate,
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
			const parsedDate = parseDate(inputValue);
			const containedDate = constrainDate(parsedDate, minDate, maxDate);
			onChange(containedDate);
		},
		[maxDate, minDate, onChange]
	);

	// Update the text inputs when the value updates
	useEffect(() => {
		if (value) setInputValue(formatDate(value));
	}, [value]);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	// Close the calendar when the user presses escape
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isCalendarOpen, closeCalendar]);

	const disabledCalendarDays = useMemo(() => {
		if (!(minDate || maxDate)) return;
		return [
			minDate ? { before: minDate } : undefined,
			maxDate ? { after: maxDate } : undefined,
		].filter((x): x is NonNullable<typeof x> => Boolean(x));
	}, [minDate, maxDate]);

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
					<CalendarSingle
						initialFocus
						selected={value}
						onSelect={onSelect}
						defaultMonth={value || initialMonth}
						numberOfMonths={1}
						disabled={disabledCalendarDays}
					/>
				</div>
			) : null}
		</div>
	);
};
