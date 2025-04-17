import { addDays } from 'date-fns';
import {
	type ChangeEvent,
	type FocusEvent,
	type Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { type PropsRange } from 'react-day-picker';
import { Popover, usePopover } from '../_popover';
import { visuallyHiddenStyles } from '../a11y';
import { Box } from '../box';
import {
	mapSpacing,
	tokens,
	useClickOutside,
	useId,
	useTernaryState,
	useWindowSize,
} from '../core';
import { CalendarRange } from '../date-picker/Calendar';
import { CalendarProvider } from '../date-picker/CalendarContext';
import {
	constrainDate,
	formatDate,
	parseDate,
	transformValuePropToInputValue,
} from '../date-picker/utils';
import {
	acceptedDateFormats,
	getDateInputButtonAriaLabel,
	normaliseDateString,
	type AcceptedDateFormats,
} from '../date-picker-next/utils';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { DateInput } from './../date-picker-next/DatePickerInput';
import { ensureValidDateRange, getCalendarDefaultMonth } from './utils';

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
	/** Specifies the date formats that can be parsed. */
	allowedDateFormats?: ReadonlyArray<AcceptedDateFormats>;
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
	allowedDateFormats: allowedDateFormatsProp = acceptedDateFormats,
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
	const allowedDateFormats = useMemo(
		() =>
			Array.from(
				new Set([
					// We need to ensure that the dateFormat to render is included in allowedDateFormats. It should also be the preferred format.
					dateFormat,
					...allowedDateFormatsProp.filter((dateFormat) =>
						acceptedDateFormats.includes(dateFormat)
					),
				])
			),
		[dateFormat, allowedDateFormatsProp]
	);

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
			from:
				typeof value.from === 'string'
					? normaliseDateString(value.from)
					: value.from,
			to:
				typeof value.to === 'string' ? normaliseDateString(value.to) : value.to,
		}),
		[value]
	);

	const onSelect = useCallback<Exclude<PropsRange['onSelect'], undefined>>(
		(_selected, triggeredDate, modifiers) => {
			if (!inputMode || modifiers.disabled) return;

			const range = ensureValidDateRange(
				inputMode === 'from'
					? { from: triggeredDate, to: valueAsDateOrUndefined.to }
					: { from: valueAsDateOrUndefined.from, to: triggeredDate }
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
		const parsedDate = parseDate(inputValue, allowedDateFormats);
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
		const parsedDate = parseDate(inputValue, allowedDateFormats);
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
		window.addEventListener('keydown', handleKeyDown, { capture: true });
		return () =>
			window.removeEventListener('keydown', handleKeyDown, { capture: true });
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

	const { fieldsetId, fromId, hintId, messageId, toId } =
		useDateRangePickerIds(id);
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

	const popoverProps = useMemo(() => popover.getPopoverProps(), [popover]);
	const calendarProps = useMemo(
		() => ({
			defaultMonth,
			disabled: disabledCalendarDays,
			autoFocus: true,
			numberOfMonths,
			onSelect,
			returnFocusRef: inputMode === 'from' ? fromTriggerRef : toTriggerRef,
			selected: valueAsDateOrUndefined,
		}),
		[
			defaultMonth,
			disabledCalendarDays,
			inputMode,
			numberOfMonths,
			onSelect,
			valueAsDateOrUndefined,
		]
	);

	// Keep track of the number of shown calendars to run event on change
	const [shownMonths, setShownMonths] = useState(numberOfMonths);
	const calendarRef = useRef<HTMLDivElement>(null);

	// This event is to check if the number of shown months has changed
	// Refocus to the shown month to prevent popover scroll bug
	useEffect(() => {
		if (!isCalendarOpen || !calendarRef.current) return;

		// Run updates only when number of shown months has changed
		if (shownMonths === numberOfMonths) return;

		// Update table size changes to new count
		setShownMonths(numberOfMonths);

		// Check if the number of table months have decreased
		if (shownMonths > numberOfMonths) {
			// Don't change focus if user is on a table cell
			const currentFocus = document.activeElement;
			if (currentFocus && currentFocus.nodeName === 'TD') return;

			// Get all table dates and focus on the last date
			const tableDates = calendarRef.current.querySelectorAll('td.rdp-day');
			const lastDate = tableDates[tableDates.length - 1];
			if (lastDate && (lastDate as HTMLElement).focus) {
				(lastDate as HTMLElement).focus();
			}
		}
	}, [isCalendarOpen, numberOfMonths, shownMonths]);

	return (
		<FieldContainer id={fieldsetId} invalid={invalid}>
			<Box as="fieldset">
				{/* Legend needs to be the first element, so if none is supplied render a visually hidden element. */}
				<FieldLabel
					as="legend"
					css={legend ? undefined : visuallyHiddenStyles}
					hideOptionalLabel={hideOptionalLabel}
					required={required}
				>
					{legend ?? 'Date range'}
				</FieldLabel>
				<Stack
					css={{ marginTop: legend ? mapSpacing(0.5) : undefined }}
					gap={0.5}
				>
					{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
					{message && invalid ? (
						<FieldMessage id={messageId}>{message}</FieldMessage>
					) : null}
					<Flex {...popover.getReferenceProps()} flexWrap="wrap" gap={1} inline>
						<DateInput
							aria-describedby={
								fromDescribedByIds.length > 0 ? fromDescribedByIds : null
							}
							buttonAriaLabel={getDateInputButtonAriaLabel({
								allowedDateFormats,
								rangeName: 'start',
								value: fromInputValue,
							})}
							buttonOnClick={onFromTriggerClick}
							buttonRef={fromTriggerRef}
							dateFormat={dateFormat}
							disabled={disabled}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							id={fromId}
							invalid={{ field: false, input: fromInvalid }}
							isCalendarOpen={isCalendarOpen}
							label={fromLabel}
							onBlur={onFromInputBlur}
							onChange={onFromInputChange}
							ref={fromInputRef}
							required={required}
							secondaryLabelDate={minDate}
							value={fromInputValue}
						/>
						<DateInput
							aria-describedby={
								toDescribedByIds.length > 0 ? toDescribedByIds : null
							}
							buttonAriaLabel={getDateInputButtonAriaLabel({
								allowedDateFormats,
								rangeName: 'end',
								value: toInputValue,
							})}
							buttonOnClick={onToTriggerClick}
							buttonRef={toTriggerRef}
							dateFormat={dateFormat}
							disabled={disabled}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							id={toId}
							invalid={{ field: false, input: toInvalid }}
							isCalendarOpen={isCalendarOpen}
							label={toLabel}
							onBlur={onToInputBlur}
							onChange={onToInputChange}
							ref={toInputRef}
							required={required}
							secondaryLabelDate={maxDate || addDays(new Date(), 1)}
							value={toInputValue}
						/>
					</Flex>
				</Stack>
				<CalendarProvider yearRange={yearRange}>
					<Popover {...popoverProps}>
						{isCalendarOpen && (
							<CalendarRange
								{...calendarProps}
								calendarRef={calendarRef}
								css={{ minHeight: '200px' }} // Using 200px as a safety buffer so that when opening the date picker for the first time and the input is at the bottom of the screen, it can't render the calendar almost hidden, e.g. 2px height.
							/>
						)}
					</Popover>
				</CalendarProvider>
			</Box>
		</FieldContainer>
	);
};

export function useDateRangePickerIds(idProp?: string) {
	const autoId = useId(idProp);
	const fieldsetId = idProp || `date-range-picker-${autoId}`;
	const hintId = `date-range-picker-${autoId}-hint`;
	const messageId = `date-range-picker-${autoId}-message`;
	const fromId = `date-range-picker-${autoId}-from`;
	const toId = `date-range-picker-${autoId}-to`;
	return { fieldsetId, fromId, hintId, messageId, toId };
}
