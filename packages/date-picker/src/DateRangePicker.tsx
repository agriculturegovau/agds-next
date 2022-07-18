import {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useRef,
	useState,
	useEffect,
	useMemo,
} from 'react';
import { usePopper } from 'react-popper';
import { SelectRangeEventHandler } from 'react-day-picker';
import { Flex } from '@ag.ds-next/box';
import {
	tokens,
	useClickOutside,
	useTernaryState,
	useWindowSize,
} from '@ag.ds-next/core';
import { CalendarRange } from './Calendar';
import { DateInput } from './DatePickerInput';
import {
	getValidDateRange,
	parseDate,
	formatDate,
	constrainDate,
} from './utils';

export type DateRange = {
	from: Date | undefined;
	to: Date | undefined;
};

type DateRangePickerCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
};

export type DateRangePickerProps = DateRangePickerCalendarProps & {
	disabled?: boolean;
	required?: boolean;
	/** The value of the field. */
	value: DateRange;
	/** Function to be fired following a change event. */
	onChange: (day: DateRange) => void;
	/** The label above the start date text input. */
	fromLabel?: string;
	/** The label above the end date text input. */
	toLabel?: string;
};

export const DateRangePicker = ({
	value,
	onChange,
	disabled,
	fromLabel = 'Start date',
	toLabel = 'End date',
	required,
	minDate,
	maxDate,
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

	const onSelect = useCallback<SelectRangeEventHandler>(
		(_, selectedDay, activeModifiers) => {
			if (!inputMode || activeModifiers.disabled) return;
			const range = getValidDateRange(inputMode, selectedDay, value);

			onChange(range);
			setFromInputValue(range.from ? formatDate(range.from) : '');
			setToInputValue(range.to ? formatDate(range.to) : '');

			if (range.from && range.to) {
				closeCalendar();
				setInputMode(undefined);
				return;
			}

			if (inputMode === 'from') {
				setInputMode('to');
				return;
			}

			if (inputMode === 'to' && !range.from) {
				setInputMode('from');
				return;
			}
		},
		[closeCalendar, inputMode, onChange, value]
	);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		value.from ? formatDate(value.from) : ''
	);
	const onFromInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			// Immediately update the input field
			setFromInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			const containedDate = constrainDate(parsedDate, minDate, maxDate);
			onChange({ ...value, from: containedDate });
		},
		[maxDate, minDate, onChange, value]
	);

	// To input state
	const [toInputValue, setToInputValue] = useState(
		value.to ? formatDate(value.to) : ''
	);
	const onToInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			// Immediately update the input field
			setToInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			const containedDate = constrainDate(parsedDate, minDate, maxDate);
			onChange({ ...value, to: containedDate });
		},
		[maxDate, minDate, onChange, value]
	);

	// Update the text inputs when the value updates
	useEffect(() => {
		if (value.from) setFromInputValue(formatDate(value.from));
		if (value.to) setToInputValue(formatDate(value.to));
	}, [value]);

	// Close the calendar when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	useClickOutside(clickOutsideRef, closeCalendar);

	// Close the calendar when the user presses escape
	const handleEscape = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
				setInputMode(undefined);
			}
		},
		[isCalendarOpen, closeCalendar]
	);

	const disabledCalendarDays = useMemo(() => {
		if (!(minDate || maxDate)) return;
		return [
			minDate ? { before: minDate } : undefined,
			maxDate ? { after: maxDate } : undefined,
		].filter((x): x is NonNullable<typeof x> => Boolean(x));
	}, [minDate, maxDate]);

	// 2 months visible on desktop, 1 on mobile
	const { windowWidth = 0 } = useWindowSize();
	const numberOfMonths = windowWidth > tokens.breakpoint.md ? 2 : 1;

	return (
		<div onKeyDown={handleEscape}>
			<Flex
				ref={setRefEl}
				flexDirection={{ xs: 'column', sm: 'row' }}
				inline
				gap={1}
			>
				<DateInput
					label={fromLabel}
					value={fromInputValue}
					onChange={onFromInputChange}
					buttonRef={fromTriggerRef}
					buttonOnClick={onFromTriggerClick}
					disabled={disabled}
					required={required}
				/>
				<DateInput
					label={toLabel}
					value={toInputValue}
					onChange={onToInputChange}
					buttonRef={toTriggerRef}
					buttonOnClick={onToTriggerClick}
					disabled={disabled}
					required={required}
				/>
			</Flex>
			{isCalendarOpen ? (
				<div
					ref={setPopperEl}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<CalendarRange
						initialFocus
						defaultMonth={value.from}
						selected={value}
						onSelect={onSelect}
						numberOfMonths={numberOfMonths}
						disabled={disabledCalendarDays}
						returnFocusRef={
							inputMode === 'from' ? fromTriggerRef : toTriggerRef
						}
					/>
				</div>
			) : null}
		</div>
	);
};
