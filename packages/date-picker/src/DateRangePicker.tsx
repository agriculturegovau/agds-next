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
import { getValidDateRange, parseDate } from './utils';

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
	dateFormat?: string;
	placeholder?: string;
};

export const DateRangePicker = ({
	value,
	onChange,
	disabled,
	fromLabel = 'Start date',
	toLabel = 'End date',
	required,
	requiredLabel,
	dateFormat = 'dd/MM/yyyy',
	placeholder = 'dd/mm/yyyy',
}: DateRangePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const [inputMode, setInputMode] = useState<'from' | 'to'>();

	const fromTriggerRef = useRef<HTMLButtonElement>(null);
	const toTriggerRef = useRef<HTMLButtonElement>(null);

	const onFromTriggerClick = useCallback(() => {
		setInputMode('from');
		openCalendar();
	}, [openCalendar]);

	const onToTriggerClick = useCallback(() => {
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
			setToInputValue(range.to ? format(range.to, dateFormat) : '');

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
		[closeCalendar, dateFormat, inputMode, onChange, value]
	);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		value.from ? format(value.from, dateFormat) : ''
	);
	const onFromInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			// Immediately update the input field
			const inputValue = e.target.value;
			setFromInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue, dateFormat);
			onChange({
				...value,
				from: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value, dateFormat]
	);

	// To input state
	const [toInputValue, setToInputValue] = useState(
		value.to ? format(value.to, dateFormat) : ''
	);
	const onToInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			// Immediately update the input field
			const inputValue = e.target.value;
			setToInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue, dateFormat);
			onChange({
				...value,
				to: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value, dateFormat]
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
			<Flex
				flexDirection={{ xs: 'column', sm: 'row' }}
				inline
				gap={1}
				ref={setRefEl}
			>
				<DateInput
					label={fromLabel}
					value={fromInputValue}
					onChange={onFromInputChange}
					buttonRef={fromTriggerRef}
					buttonOnClick={onFromTriggerClick}
					disabled={disabled}
					required={required}
					requiredLabel={requiredLabel}
				/>
				<DateInput
					label={toLabel}
					value={toInputValue}
					onChange={onToInputChange}
					buttonRef={toTriggerRef}
					buttonOnClick={onToTriggerClick}
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
