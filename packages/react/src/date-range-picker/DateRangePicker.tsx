import {
	ChangeEvent,
	FocusEvent,
	useCallback,
	Ref,
	useRef,
	useState,
	useEffect,
	useMemo,
} from 'react';
import { SelectRangeEventHandler } from 'react-day-picker';
import { Flex } from '../flex';
import {
	tokens,
	useClickOutside,
	useTernaryState,
	useWindowSize,
} from '../core';
import { GroupedFields, useGroupedFieldsIds } from '../grouped-fields';
import { Popover, usePopover } from '../_popover';
import {
	parseDate,
	formatDate,
	constrainDate,
	transformValuePropToInputValue,
	AcceptedDateFormats,
} from '../date-picker/utils';
import { CalendarRange } from '../date-picker/Calendar';
import { CalendarProvider } from '../date-picker/CalendarContext';
import { DateInput } from './../date-picker/DatePickerInput';
import {
	ensureValidDateRange,
	getCalendarDefaultMonth,
	getFromDateInputButtonAriaLabel,
	getToDateInputButtonAriaLabel,
} from './utils';

export type DateRange = {
	from: Date | undefined;
	to: Date | undefined;
};

export type DateRangeWithString = {
	from: Date | string | undefined;
	to: Date | string | undefined;
};

type DateRangePickerCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
};

export type DateRangePickerProps = DateRangePickerCalendarProps & {
	/** Describes the purpose of the group of fields. */
	legend?: string;
	/** Provides extra information about the group of fields. */
	hint?: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered for the start date. */
	fromInvalid?: boolean;
	/** If true, the invalid state will be rendered for the end date. */
	toInvalid?: boolean;
	/** If true, "(optional)" will never be appended to the legend even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** If true, the field will not be interactive. */
	disabled?: boolean;
	/** If false, "(optional)" will not be appended to the legend. */
	required?: boolean;
	/** The value of the field. */
	value: DateRangeWithString;
	/** Function to be fired following a change event. */
	onChange: (day: DateRange) => void;
	/** Function to be fired when the input value is updated. */
	onFromInputChange?: (inputValue: string | undefined) => void;
	/** Function to be fired when the input value is updated. */
	onToInputChange?: (inputValue: string | undefined) => void;
	/** The label above the start date. */
	fromLabel?: string;
	/** The label above the end date. */
	toLabel?: string;
	/** Ref to the start input element. */
	fromInputRef?: Ref<HTMLInputElement>;
	/** Ref to the end input element. */
	toInputRef?: Ref<HTMLInputElement>;
	/** The range of options to display in calendar year select. */
	yearRange?: { from: number; to: number };
	/** Used to adjust the date format displayed in the text input and secondary label. */
	dateFormat?: AcceptedDateFormats;
};

export const DateRangePicker = ({
	legend,
	hint,
	id,
	fromInvalid = false,
	toInvalid = false,
	message,
	hideOptionalLabel,
	value,
	onChange,
	onFromInputChange: onFromInputChangeProp,
	onToInputChange: onToInputChangeProp,
	disabled,
	fromLabel = 'Start date',
	toLabel = 'End date',
	required = false,
	minDate,
	maxDate,
	fromInputRef,
	toInputRef,
	yearRange,
	dateFormat = 'dd/MM/yyyy',
}: DateRangePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const toggleCalendar = isCalendarOpen ? closeCalendar : openCalendar;

	const [inputMode, setInputMode] = useState<'from' | 'to'>();

	const fromTriggerRef = useRef<HTMLButtonElement>(null);
	const toTriggerRef = useRef<HTMLButtonElement>(null);

	function onFromTriggerClick() {
		setInputMode('from');
		toggleCalendar();
	}

	function onToTriggerClick() {
		setInputMode('to');
		toggleCalendar();
	}

	const popover = usePopover();

	const valueAsDateOrUndefined = useMemo(
		() => ({
			from: typeof value.from === 'string' ? undefined : value.from,
			to: typeof value.to === 'string' ? undefined : value.to,
		}),
		[value]
	);

	const onSelect = useCallback<SelectRangeEventHandler>(
		(_, selectedDay, activeModifiers) => {
			if (!inputMode || activeModifiers.disabled) return;

			const range = ensureValidDateRange(
				inputMode === 'from'
					? { from: selectedDay, to: valueAsDateOrUndefined.to }
					: { from: valueAsDateOrUndefined.from, to: selectedDay }
			);

			onChange(range);
			setFromInputValue(range.from ? formatDate(range.from, dateFormat) : '');
			setToInputValue(range.to ? formatDate(range.to, dateFormat) : '');

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
		[closeCalendar, inputMode, onChange, valueAsDateOrUndefined, dateFormat]
	);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		transformValuePropToInputValue(value.from, dateFormat)
	);

	const onFromInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		// Ensure the text entered is a valid date
		const parsedDate = parseDate(inputValue);
		const constrainedDate = constrainDate(parsedDate, minDate, maxDate);

		const nextValue = ensureValidDateRange({
			from: constrainedDate,
			to: valueAsDateOrUndefined.to,
		});

		if (!inputValue || constrainedDate) {
			onChange(nextValue);
		} else {
			onFromInputChangeProp?.(inputValue);
		}
	};

	const onFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setFromInputValue(inputValue);
	};

	// To input state
	const [toInputValue, setToInputValue] = useState(
		transformValuePropToInputValue(value.to, dateFormat)
	);

	const onToInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		// Ensure the text entered is a valid date
		const parsedDate = parseDate(inputValue);
		const constrainedDate = constrainDate(parsedDate, minDate, maxDate);

		const nextValue = ensureValidDateRange({
			from: valueAsDateOrUndefined.from,
			to: constrainedDate,
		});

		if (!inputValue || constrainedDate) {
			onChange(nextValue);
		} else {
			onToInputChangeProp?.(inputValue);
		}
	};

	const onToInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setToInputValue(inputValue);
	};

	// Update the text inputs when the value updates
	useEffect(() => {
		setFromInputValue(transformValuePropToInputValue(value.from, dateFormat));
		setToInputValue(transformValuePropToInputValue(value.to, dateFormat));
	}, [value, dateFormat]);

	// Close the calendar when the user clicks outside
	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(
		[popover.popoverRef, fromTriggerRef, toTriggerRef],
		handleClickOutside
	);

	// Close the calendar when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
				setInputMode(undefined);
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

	// 2 months visible on desktop, 1 on mobile
	const { windowWidth = 0 } = useWindowSize();
	const numberOfMonths = windowWidth > tokens.breakpoint.md ? 2 : 1;

	const invalid = fromInvalid || toInvalid;

	const { hintId, messageId } = useGroupedFieldsIds(id);
	const fromDescribedByIds = [
		fromInvalid && message ? messageId : null,
		hint ? hintId : null,
	]
		.filter(Boolean)
		.join(' ');
	const toDescribedByIds = [
		toInvalid && message ? messageId : null,
		hint ? hintId : null,
	]
		.filter(Boolean)
		.join(' ');

	const defaultMonth = getCalendarDefaultMonth(
		inputMode,
		valueAsDateOrUndefined,
		yearRange,
		numberOfMonths
	);

	return (
		<GroupedFields
			invalid={invalid}
			legend={legend ?? 'Date range'}
			hint={hint}
			hintId={hintId}
			message={message}
			messageId={messageId}
		>
			<Flex flexWrap="wrap" gap={1} inline {...popover.getReferenceProps()}>
				<DateInput
					aria-describedby={
						fromDescribedByIds.length > 0 ? fromDescribedByIds : null
					}
					buttonAriaLabel={getFromDateInputButtonAriaLabel(fromInputValue)}
					buttonOnClick={onFromTriggerClick}
					buttonRef={fromTriggerRef}
					dateFormat={dateFormat}
					disabled={disabled}
					hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
					invalid={{ field: false, input: fromInvalid }}
					label={fromLabel}
					onBlur={onFromInputBlur}
					onChange={onFromInputChange}
					ref={fromInputRef}
					required={required}
					value={fromInputValue}
				/>
				<DateInput
					aria-describedby={
						toDescribedByIds.length > 0 ? toDescribedByIds : null
					}
					buttonAriaLabel={getToDateInputButtonAriaLabel(toInputValue)}
					buttonOnClick={onToTriggerClick}
					buttonRef={toTriggerRef}
					dateFormat={dateFormat}
					disabled={disabled}
					hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
					invalid={{ field: false, input: toInvalid }}
					label={toLabel}
					onBlur={onToInputBlur}
					onChange={onToInputChange}
					ref={toInputRef}
					required={required}
					value={toInputValue}
				/>
			</Flex>
			<CalendarProvider yearRange={yearRange}>
				{isCalendarOpen && (
					<Popover {...popover.getPopoverProps()}>
						<CalendarRange
							defaultMonth={defaultMonth}
							disabled={disabledCalendarDays}
							initialFocus
							numberOfMonths={numberOfMonths}
							onSelect={onSelect}
							returnFocusRef={
								inputMode === 'from' ? fromTriggerRef : toTriggerRef
							}
							selected={valueAsDateOrUndefined}
						/>
					</Popover>
				)}
			</CalendarProvider>
		</GroupedFields>
	);
};
