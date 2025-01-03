import {
	ChangeEvent,
	FocusEvent,
	useCallback,
	Ref,
	useRef,
	useState,
	useEffect,
	useMemo,
	// Profiler,
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
	// packs,
} from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { visuallyHiddenStyles } from '../a11y';
import { Popover, usePopover } from '../_popover';
import {
	acceptedDateFormats,
	// constrainDate,
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
// import { ensureValidDateRange, getCalendarDefaultMonth } from './utils';

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

	const [hoveredDay, setHoveredDay] = useState<Date>();

	const onHover = useCallback(
		(date: Date) => {
			// console.log(`onHover`, date);
			setHoveredDay(date);
		},
		[setHoveredDay]
	);

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
			// console.log(`_`, _);
			// console.log(`selectedDay`, selectedDay);
			// console.log(`activeModifiers`, activeModifiers);
			if (!inputMode || activeModifiers.disabled) return;

			const range = {
				from: valueAsDateOrUndefined.from || fromInputValue,
				to: valueAsDateOrUndefined.to || toInputValue,
			} as DateRange;

			if (inputMode === 'from') {
				range.from = selectedDay;

				// if (range.to && isAfter(range.from, range.to)) {
				// 	range.to = undefined;
				// }
			} else {
				range.to = selectedDay;

				// if (range.from && isBefore(range.to, range.from)) {
				// 	range.from = undefined;
				// }
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
		const parsedDate = parseDate(inputValue, allowedDateFormats);

		// Ensure the text entered in both fields are valid dates
		// const constrainedFromDate = constrainDate(parsedDate, minDate, maxDate);
		// const constrainedToDate =
		// 	valueAsDateOrUndefined.to ||
		// 	constrainDate(
		// 		// TODO: Use Chris' normalise function
		// 		parseDate(toInputValue, allowedDateFormats),
		// 		minDate,
		// 		maxDate
		// 	) ||
		// 	toInputValue;

		// console.log(`****** constrainedToDate`, constrainedToDate);

		// const range = {
		// 	from: constrainedFromDate,
		// 	to: constrainedToDate,
		// } as DateRange;
		const range = {
			from: parsedDate,
			to:
				valueAsDateOrUndefined.to ||
				parseDate(toInputValue, allowedDateFormats) ||
				toInputValue,
		} as DateRange;

		// if (range.from && range.to && isAfter(range.from, range.to)) {
		// 	range.from = undefined;
		// }

		// if (!inputValue || constrainedFromDate) {
		// 	onChange(range);
		// } else {
		// 	onFromInputChangeProp?.(inputValue);
		// }

		if (
			(inputValue &&
				(!isValidDate(range.from) ||
					(range.from && range.to && isAfter(range.from, range.to)))) ||
			(minDate && range.from && isBefore(range.from, minDate)) ||
			(maxDate && range.from && isAfter(range.from, maxDate))
		) {
			onFromInputChangeProp?.(inputValue);
		} else if (!inputValue || range.from) {
			onChange(range);
			// if (maxDate && range.to && isAfter(range.to, maxDate)) {
			// 	onToInputChangeProp?.(toInputValue);
			// }
			// } else {
		}
	};

	const onFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setFromInputValue(inputValue);
	};

	const onToInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		// console.group('onToInputBlur');
		const inputValue = e.target.value;
		const parsedDate = parseDate(inputValue, allowedDateFormats);
		console.log(`parsedDate`, parsedDate);

		// // Ensure the text entered in both fields are valid dates
		// const constrainedToDate = constrainDate(parsedDate, minDate, maxDate);
		// console.log(`constrainedToDate`, constrainedToDate);
		// const constrainedFromDate =
		// 	valueAsDateOrUndefined.from ||
		// 	constrainDate(
		// 		// TODO: Use Chris' normalise function
		// 		parseDate(fromInputValue, allowedDateFormats),
		// 		minDate,
		// 		maxDate
		// 	) ||
		// 	fromInputValue;

		// console.log(`constrainedFromDate`, constrainedToDate);
		const range = {
			from:
				valueAsDateOrUndefined.from ||
				parseDate(fromInputValue, allowedDateFormats) ||
				fromInputValue,
			to: parsedDate,
		} as DateRange;

		// if (range.to && range.from && isBefore(range.to, range.from)) {
		// 	range.to = undefined;
		// }

		if (
			(inputValue &&
				(!isValidDate(parsedDate) ||
					(range.to && range.from && isBefore(range.to, range.from)))) ||
			(minDate && range.to && isBefore(range.to, minDate)) ||
			(maxDate && range.to && isAfter(range.to, maxDate))
		) {
			onToInputChangeProp?.(inputValue);
		} else if (!inputValue || range.to) {
			onChange(range);
			// if (minDate && range.from && isBefore(range.from, minDate)) {
			// 	onFromInputChangeProp?.(fromInputValue);
			// }
			// } else {
		}
		// console.groupEnd('onToInputBlur');
	};

	const onToInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setToInputValue(inputValue);
	};

	// Update the text inputs when the value updates
	useEffect(() => {
		// console.log(`value`, value);
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

	// console.log(`valueAsDateOrUndefined.from`, valueAsDateOrUndefined.from);
	// console.log(`hoveredDay`, hoveredDay);
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
	}, 200);

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
			selected: valueAsDateOrUndefined,
			modifiers: {
				// fromRange: (day: Date) => {
				// 	// console.log(`day`, day);
				// 	return fromRange().some(
				// 		(r) => r.toDateString() === day.toDateString()
				// 	);
				// 	// return range().includes(day);
				// },
				fromRange: (day: Date) => {
					// console.log(`day`, day);
					// console.log(`fromRange()`, fromRange());
					return fromRange()[day.toDateString()];
					// return range().includes(day);
				},
				// fromRange: (day: Date) => {
				// 	// console.log(`day`, day);
				// 	// console.log(`fromRange()`, fromRange());
				// 	return fromRange().has(day.toDateString());
				// 	// return range().includes(day);
				// },
				// qux: range(),
				// 	foo: hoveredDay,
			},
			modifiersClassNames: {
				fromRange: 'range',
				// 	foo: 'baz',
			},
			onHover,
			clearHoveredDay,
		}),
		[
			defaultMonth,
			disabledCalendarDays,
			clearHoveredDay,
			// hoveredDay,
			inputMode,
			numberOfMonths,
			onSelect,
			valueAsDateOrUndefined,
			onHover,
			fromRange,
		]
	);

	return (
		// <Profiler
		// 	id="drp"
		// 	onRender={(id, phase, duration) => {
		// 		console.log(id, phase, duration);
		// 	}}
		// >
		<FieldContainer invalid={invalid} id={fieldsetId}>
			<Box as="fieldset">
				{/* Legend needs to be the first element, so if none is supplied render a visually hidden element. */}
				<FieldLabel
					as="legend"
					required={required}
					hideOptionalLabel={hideOptionalLabel}
					css={legend ? undefined : visuallyHiddenStyles}
				>
					{legend ?? 'Date range'}
				</FieldLabel>
				<Stack
					gap={0.5}
					css={{ marginTop: legend ? mapSpacing(0.5) : undefined }}
				>
					{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
					{message && invalid ? (
						<FieldMessage id={messageId}>{message}</FieldMessage>
					) : null}
					<Flex {...popover.getReferenceProps()} flexWrap="wrap" inline gap={1}>
						<DateInput
							aria-describedby={
								fromDescribedByIds.length > 0 ? fromDescribedByIds : null
							}
							ref={fromInputRef}
							label={fromLabel}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							value={fromInputValue}
							onBlur={onFromInputBlur}
							onChange={onFromInputChange}
							buttonRef={fromTriggerRef}
							buttonOnClick={onFromTriggerClick}
							buttonAriaLabel={getDateInputButtonAriaLabel({
								allowedDateFormats,
								rangeName: 'start',
								value: fromInputValue,
							})}
							disabled={disabled}
							required={required}
							invalid={{ field: false, input: fromInvalid }}
							dateFormat={dateFormat}
							highlight={isCalendarOpen && inputMode === 'from'}
							id={fromId}
						/>
						<DateInput
							aria-describedby={
								toDescribedByIds.length > 0 ? toDescribedByIds : null
							}
							ref={toInputRef}
							label={toLabel}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							value={toInputValue}
							onBlur={onToInputBlur}
							onChange={onToInputChange}
							buttonRef={toTriggerRef}
							buttonOnClick={onToTriggerClick}
							buttonAriaLabel={getDateInputButtonAriaLabel({
								allowedDateFormats,
								rangeName: 'end',
								value: toInputValue,
							})}
							disabled={disabled}
							required={required}
							invalid={{ field: false, input: toInvalid }}
							dateFormat={dateFormat}
							highlight={isCalendarOpen && inputMode === 'to'}
							id={toId}
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
		// </Profiler>
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

const getRange = (startDate?: Date, endDate?: Date) => {
	// if (startDate && endDate) {
	// 	const range = [];
	// 	let current = addDays(startDate, 1);
	// 	while (current < endDate) {
	// 		// console.log(`current, hoverDate`, current, hoverDate);
	// 		range.push(current);
	// 		current = addDays(current, 1);
	// 	}
	// 	return range;
	// }
	// return [];
	// const range = new Set();
	// if (startDate && endDate) {
	// 	// const range = [];
	// 	let current = addDays(startDate, 1);
	// 	while (current < endDate) {
	// 		// console.log(`current, hoverDate`, current, hoverDate);
	// 		range.add(current.toDateString());
	// 		current = addDays(current, 1);
	// 	}
	// }
	// return range;
	const range: Record<string, boolean> = {};
	if (startDate && endDate) {
		let current = addDays(startDate, 1);
		while (current < endDate) {
			// console.log(`current, hoverDate`, current, hoverDate);
			range[current.toDateString()] = true;
			current = addDays(current, 1);
		}
	}
	return range;
	// return {};
};
