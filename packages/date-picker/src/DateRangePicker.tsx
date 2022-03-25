import React, {
	Fragment,
	ChangeEvent,
	useCallback,
	useRef,
	useState,
} from 'react';
import { usePopper } from 'react-popper';
import { Flex } from '@ag.ds-next/box';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { Calendar, CalendarProps } from './Calendar';
import { format, isValid } from 'date-fns';
import { DateInput } from './DatePickerInput';
import { dateFormat, getValidDateRange, parseDate } from './utils';

export type DateRange = {
	from: Date | undefined;
	to: Date | undefined;
};

export type DateRangePickerProps = CalendarProps & {
	value: DateRange;
	onChange: (day: DateRange) => void;
	disabled?: boolean;
	fromLabel?: string;
	toLabel?: string;
	required?: boolean;
	requiredLabel?: boolean;
};

export const DateRangePicker = ({
	value,
	onChange,
	disabled,
	fromLabel = 'From',
	toLabel = 'To',
	required,
	requiredLabel,
}: DateRangePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const [inputMode, setInputMode] = useState<'from' | 'to'>();

	const fromTriggerRef = useRef<HTMLButtonElement>(null);
	const toTriggerRef = useRef<HTMLButtonElement>(null);

	const onFromTriggerClick = useCallback(() => {
		setInputMode('from');
		openCalendar();
	}, [openCalendar]);

	const onEndTriggerClick = useCallback(() => {
		setInputMode('to');
		openCalendar();
	}, [openCalendar]);

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const onDayClick = useCallback(
		(selectedDay: Date) => {
			if (!inputMode) return;
			const range = getValidDateRange(inputMode, selectedDay, value);

			onChange(range);
			setFromInputValue(range.from ? format(range.from, dateFormat) : '');
			setEndInputValue(range.to ? format(range.to, dateFormat) : '');

			if (range.from && range.to) {
				inputMode === 'from'
					? fromTriggerRef.current?.focus()
					: toTriggerRef.current?.focus();
				closeCalendar();
				setInputMode(undefined);
				return;
			}

			if (inputMode === 'from') {
				setInputMode('to');
				toTriggerRef.current?.focus();
				return;
			}
		},
		[closeCalendar, inputMode, onChange, value]
	);

	// From input state
	const [fromInputValue, setFromInputValue] = useState('');
	const onFromInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			// Immediately update the input field
			const inputValue = e.target.value;
			setFromInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			onChange({
				...value,
				from: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value]
	);

	// End input state
	const [endInputValue, setEndInputValue] = useState('');
	const onEndInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			// Immediately update the input field
			const inputValue = e.target.value;
			setEndInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			onChange({
				...value,
				to: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value]
	);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	return (
		<Fragment>
			<Flex inline gap={1} ref={setRefEl}>
				<DateInput
					label={fromLabel}
					value={fromInputValue}
					onChange={onFromInputChange}
					placeholder="DD/MM/YYYY"
					buttonRef={fromTriggerRef}
					buttonOnClick={onFromTriggerClick}
					disabled={disabled}
					required={required}
					requiredLabel={requiredLabel}
				/>
				<DateInput
					label={toLabel}
					value={endInputValue}
					onChange={onEndInputChange}
					placeholder="DD/MM/YYYY"
					buttonRef={toTriggerRef}
					buttonOnClick={onEndTriggerClick}
					disabled={disabled}
					required={required}
					requiredLabel={requiredLabel}
				/>
			</Flex>
			{isCalendarOpen ? (
				<div
					ref={setPopperEl}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<Calendar
						initialMonth={inputMode === 'from' ? value.from : value.to}
						selectedDays={[value.from, value]}
						onDayClick={onDayClick}
						modifiers={{ start: value.from, end: value.to }}
						numberOfMonths={2}
						range
					/>
				</div>
			) : null}
		</Fragment>
	);
};
