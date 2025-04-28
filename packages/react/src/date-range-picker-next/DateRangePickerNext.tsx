import { addDays, isAfter, isBefore } from 'date-fns';
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
import { useDebouncedCallback } from 'use-debounce';
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
import { CalendarRange } from '../date-picker-next/Calendar';
import { CalendarProvider } from '../date-picker-next/CalendarContext';
import { DateInput } from '../date-picker-next/DatePickerInput';
import {
	acceptedDateFormats,
	asDate,
	formatDate,
	getDateInputButtonAriaLabel,
	parseDate,
	transformValuePropToInputValue,
	type AcceptedDateFormats,
} from '../date-picker-next/utils';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { getCalendarDefaultMonth, getHoverRange } from './utils';

export type DateRange = {
	from: Date | string | undefined;
	to: Date | string | undefined;
};

type DateRangePickerNextCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
};

export type DateRangePickerNextProps = DateRangePickerNextCalendarProps & {
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
	value: DateRange;
	/** Function to be fired following a change event. */
	onChange: (day: DateRange) => void;
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

export const DateRangePickerNext = ({
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
}: DateRangePickerNextProps) => {
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
		if (!hasCalendarOpened) setHasCalendarOpened(true);
		isCalendarOpen && inputMode === 'from'
			? closeCalendarAndFocusTrigger()
			: openCalendar();
	}

	function onToTriggerClick() {
		setInputMode('to');
		if (!hasCalendarOpened) setHasCalendarOpened(true);
		isCalendarOpen && inputMode === 'to'
			? closeCalendarAndFocusTrigger()
			: openCalendar();
	}

	const popover = usePopover();

	const valueAsDateOrUndefined = useMemo(
		() => ({
			from: asDate(value.from, allowedDateFormats),
			to: asDate(value.to, allowedDateFormats),
		}),
		[allowedDateFormats, value]
	);

	const [hoveredDay, setHoveredDay] = useState<string>();

	const onHover = useCallback((date: Date) => {
		setHoveredDay(date.toISOString());
	}, []);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		transformValuePropToInputValue(value.from, dateFormat, allowedDateFormats)
	);

	// To input state
	const [toInputValue, setToInputValue] = useState(
		transformValuePropToInputValue(value.to, dateFormat, allowedDateFormats)
	);

	const onSelect = useCallback<Exclude<PropsRange['onSelect'], undefined>>(
		(_selected, triggeredDate, modifiers) => {
			if (!inputMode || modifiers.disabled) return;

			const range = {
				from: valueAsDateOrUndefined.from || fromInputValue,
				to: valueAsDateOrUndefined.to || toInputValue,
			};

			range[inputMode] = triggeredDate;

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
			dateFormat,
			fromInputValue,
			inputMode,
			onChange,
			setInputMode,
			toInputValue,
			valueAsDateOrUndefined,
		]
	);

	const onFromInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const parsedDate = parseDate(inputValue, allowedDateFormats) || inputValue;

		onChange({
			from: parsedDate,
			to: valueAsDateOrUndefined.to || toInputValue,
		});
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
		});
	};

	const onToInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setToInputValue(inputValue);
	};

	// Update the text inputs when the value updates
	useEffect(() => {
		setFromInputValue(
			transformValuePropToInputValue(value.from, dateFormat, allowedDateFormats)
		);
		setToInputValue(
			transformValuePropToInputValue(value.to, dateFormat, allowedDateFormats)
		);
	}, [allowedDateFormats, dateFormat, value]);

	// Close the calendar when the user clicks outside
	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside(
		[popover.popoverRef, fromTriggerRef, toTriggerRef],
		handleClickOutside
	);

	// react-day-picker autoFocus was clashing with popover, the focus is set here when the calendar is opened
	// The focus is also set manually to allow us to focus on the end-date when the 'change end date' button is pressed
	useEffect(
		() => {
			// Wrap in timeout 0 to focus after all components renders
			setTimeout(() => {
				if (!isCalendarOpen) return;

				const { from, to } = valueAsDateOrUndefined;
				// Focus on the start or end day based on the input mode and if both range days have been selected
				if (inputMode === 'from' && from && to) {
					if (focusDay('td[data-start-day="true"]')) return;
				}
				if (inputMode === 'to' && from && to) {
					if (focusDay('td[data-end-day="true"]')) return;
				}

				// Target focus on any currently selected elements (e.g. if to is after)
				// This covers if dates are mismatched (from is after to) or if only range is selected
				if (focusDay('td[data-selected="true"]')) return;

				// Default return focus today
				focusDay('td[data-today="true"]');
			}, 0);
		},
		// Only run this event when the calendar opens
		// eslint-disable-next-line
		[isCalendarOpen]
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
		window.addEventListener('keydown', handleKeyDown, { capture: true });
		return () =>
			window.removeEventListener('keydown', handleKeyDown, { capture: true });
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
		useDateRangePickerNextIds(id);
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

	const hoverRange = useCallback(
		() =>
			getHoverRange(
				inputMode,
				hoveredDay,
				valueAsDateOrUndefined.from,
				valueAsDateOrUndefined.to
			),
		[hoveredDay, inputMode, valueAsDateOrUndefined]
	);

	const clearHoveredDay = useDebouncedCallback(() => {
		setHoveredDay(undefined);
	}, 100);

	const popoverProps = useMemo(() => popover.getPopoverProps(), [popover]);
	const calendarProps = useMemo(
		() => ({
			autoFocus: false, // as above, disabled autoFocus to prevent focus clashing and to set manual focus
			defaultMonth,
			disabled: disabledCalendarDays,
			inputMode,
			modifiers: {
				hoverRange: (day: Date) => hoverRange()[day.toISOString()],
			},
			modifiersClassNames: {
				hoverRange: 'hover-range',
			},
			numberOfMonths,
			onSelect,
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
		}),
		[
			defaultMonth,
			disabledCalendarDays,
			hoverRange,
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

		// Check if the number of table months have decreased
		if (shownMonths > numberOfMonths) {
			// Don't change focus if user is on a table cell
			if (document.activeElement?.nodeName !== 'TD') {
				// Get all table dates and focus on the last date
				const tableDates = calendarRef.current.querySelectorAll('td.rdp-day');
				const lastDate = tableDates[tableDates.length - 1];
				if (lastDate instanceof HTMLElement && lastDate.focus) {
					lastDate.focus();
				}
			}
		}

		// Update table size changes to new count
		setShownMonths(numberOfMonths);
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
							highlight={isCalendarOpen && inputMode === 'from'}
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
							highlight={isCalendarOpen && inputMode === 'to'}
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
				<CalendarProvider
					clearHoveredDay={clearHoveredDay}
					onHover={onHover}
					yearRange={yearRange}
				>
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

export function useDateRangePickerNextIds(idProp?: string) {
	const autoId = useId(idProp);
	const fieldsetId = idProp || `date-range-picker-${autoId}`;
	const hintId = `date-range-picker-${autoId}-hint`;
	const messageId = `date-range-picker-${autoId}-message`;
	const fromId = `date-range-picker-${autoId}-from`;
	const toId = `date-range-picker-${autoId}-to`;
	return { fieldsetId, fromId, hintId, messageId, toId };
}

// Attempts focus on target and returns true if successful
function focusDay(queryTarget: string) {
	const day = document.querySelector(queryTarget);
	if (!day) return false;

	if (day instanceof HTMLElement && day.focus) {
		day.focus();
		return true;
	}
	return false;
}
