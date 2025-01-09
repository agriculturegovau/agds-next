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
import { addDays, isAfter, isBefore } from 'date-fns';
import { useDebouncedCallback } from 'use-debounce';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import {
	mapSpacing,
	tokens,
	useClickOutside,
	useTernaryState,
	useWindowSize,
	useId,
} from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { visuallyHiddenStyles } from '../a11y';
import { Popover, usePopover } from '../_popover';
import {
	acceptedDateFormats,
	formatDate,
	getDateInputButtonAriaLabel,
	isValidDate,
	normaliseDateString,
	parseDate,
	transformValuePropToInputValue,
	type AcceptedDateFormats,
} from '../date-picker/utils';
import { CalendarRange } from '../date-picker/Calendar';
import { CalendarProvider } from '../date-picker/CalendarContext';
import { DateInput } from './../date-picker/DatePickerInput';
import { getCalendarDefaultMonth } from './utils';

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

	const [hasCalendarOpened, setHasCalendarOpened] = useState(false);
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);

	const [inputMode, setInputMode] = useState<'from' | 'to'>();

	const fromTriggerRef = useRef<HTMLButtonElement>(null);
	const toTriggerRef = useRef<HTMLButtonElement>(null);

	const closeCalendarAndFocusTrigger = useCallback(() => {
		closeCalendar();
		setTimeout(() => {
			if (inputMode === 'from') fromTriggerRef.current?.focus();
			else toTriggerRef.current?.focus();
		}, 0);
	}, [closeCalendar, fromTriggerRef, inputMode, toTriggerRef]);

	function onFromTriggerClick() {
		setInputMode('from');
		setHasCalendarOpened(true);
		openCalendar();
	}

	function onToTriggerClick() {
		setInputMode('to');
		setHasCalendarOpened(true);
		openCalendar();
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

	const [hoveredDay, setHoveredDay] = useState<string>();

	const onHover = useCallback((date: Date) => {
		setHoveredDay(date.toISOString());
	}, []);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		transformValuePropToInputValue(value.from, dateFormat)
	);

	// To input state
	const [toInputValue, setToInputValue] = useState(
		transformValuePropToInputValue(value.to, dateFormat)
	);

	const onSelect = useCallback<SelectRangeEventHandler>(
		(_, selectedDay, activeModifiers) => {
			if (!inputMode || activeModifiers.disabled) return;

			const range = {
				from: valueAsDateOrUndefined.from || fromInputValue,
				to: valueAsDateOrUndefined.to || toInputValue,
			} as DateRange;

			if (inputMode === 'from') {
				range.from = selectedDay;
			} else {
				range.to = selectedDay;
			}

			onChange(range);
			setFromInputValue(
				valueAsDateOrUndefined.from
					? formatDate(range.from, dateFormat)
					: fromInputValue
			);
			setToInputValue(
				valueAsDateOrUndefined.to
					? formatDate(range.to, dateFormat)
					: toInputValue
			);

			if ((range.from || fromInputValue) && (range.to || toInputValue)) {
				setHoveredDay(undefined);
				closeCalendarAndFocusTrigger();
				return;
			}

			if (inputMode === 'from') {
				setInputMode('to');
				return;
			}

			if (!range.from && range.to) {
				setInputMode('from');
				return;
			}
		},
		[
			closeCalendarAndFocusTrigger,
			inputMode,
			onChange,
			valueAsDateOrUndefined,
			dateFormat,
			fromInputValue,
			toInputValue,
			setInputMode,
		]
	);

	const onFromInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const parsedDate = parseDate(inputValue, allowedDateFormats) || inputValue;

		onChange({
			from: parsedDate,
			to: valueAsDateOrUndefined.to || toInputValue,
		} as DateRange);
	};

	const onFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setFromInputValue(inputValue);
	};

	const onToInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const parsedDate = parseDate(inputValue, allowedDateFormats) || inputValue;

		onChange({
			from: valueAsDateOrUndefined.from || fromInputValue,
			to: parsedDate,
		} as DateRange);
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
				closeCalendarAndFocusTrigger();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeCalendarAndFocusTrigger, isCalendarOpen]);

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

	const fromRange = useCallback(
		() =>
			inputMode === 'to'
				? getRange(valueAsDateOrUndefined.from, hoveredDay)
				: inputMode === 'from'
				? getRange(
						hoveredDay,
						valueAsDateOrUndefined.from || valueAsDateOrUndefined.to
				  )
				: {},
		[hoveredDay, inputMode, valueAsDateOrUndefined]
	);

	const clearHoveredDay = useDebouncedCallback(() => {
		setHoveredDay(undefined);
	}, 100);

	// These prop objects serve as a single source of truth for the duplicated Popovers and Calendars below
	// We duplicate the Popover + Calendar as a workaround for a bug that scrolls the page to the top on initial open of the calendar - https://github.com/gpbl/react-day-picker/discussions/2059
	const popoverProps = useMemo(() => popover.getPopoverProps(), [popover]);
	const calendarProps = useMemo(
		() => ({
			defaultMonth,
			disabled: disabledCalendarDays,
			initialFocus: true,
			inputMode,
			numberOfMonths,
			onSelect,
			returnFocusRef: inputMode === 'from' ? fromTriggerRef : toTriggerRef,
			selected: {
				from:
					inputMode === 'from' &&
					valueAsDateOrUndefined.from &&
					valueAsDateOrUndefined.to &&
					isAfter(valueAsDateOrUndefined.from, valueAsDateOrUndefined.to)
						? undefined
						: valueAsDateOrUndefined.from,
				to:
					inputMode === 'to' &&
					valueAsDateOrUndefined.from &&
					valueAsDateOrUndefined.to &&
					isBefore(valueAsDateOrUndefined.to, valueAsDateOrUndefined.from)
						? undefined
						: valueAsDateOrUndefined.to,
			},
			modifiers: {
				fromRange: (day: Date) => fromRange()[day.toISOString()],
			},
			modifiersClassNames: {
				fromRange: 'range',
			},
			onHover,
			clearHoveredDay,
		}),
		[
			clearHoveredDay,
			defaultMonth,
			disabledCalendarDays,
			fromRange,
			inputMode,
			numberOfMonths,
			onHover,
			onSelect,
			valueAsDateOrUndefined.from,
			valueAsDateOrUndefined.to,
		]
	);

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
							highlight={isCalendarOpen && inputMode === 'from'}
							id={fromId}
							invalid={{ field: false, input: fromInvalid }}
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
							highlight={isCalendarOpen && inputMode === 'to'}
							id={toId}
							invalid={{ field: false, input: toInvalid }}
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
					{/* We duplicate the Popover + Calendar as a workaround for a bug that scrolls the page to the top on initial open of the calandar - https://github.com/gpbl/react-day-picker/discussions/2059 */}
					{hasCalendarOpened ? ( // If the calendar has opened at least once, we conditionally render the Popover + children to prevent the scroll-to-top bug
						isCalendarOpen && (
							<Popover {...popoverProps}>
								<CalendarRange {...calendarProps} />
							</Popover>
						)
					) : (
						// If the calendar has _not_ opened at least once, we conditionally render only the children of the Popover, i.e. the Calendar to prevent the UI jumping about everytime the calendar is opened
						<Popover {...popoverProps}>
							{isCalendarOpen && (
								<CalendarRange
									{...calendarProps}
									css={{ minHeight: '200px' }} // Using 200px as a safety buffer so that when opening the date picker for the first time and the input is at the bottom of the screen, it can't render the calendar almost hidden, e.g. 2px height.
								/>
							)}
						</Popover>
					)}
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

const getRange = (startDate?: Date | string, endDate?: Date | string) => {
	const range: Record<string, boolean> = {};
	if (startDate && endDate) {
		let current = addDays(new Date(startDate), 1);
		const endDateAsDate = new Date(endDate);
		while (current < endDateAsDate) {
			range[current.toISOString()] = true;
			current = addDays(current, 1);
		}
	}
	return range;
};
