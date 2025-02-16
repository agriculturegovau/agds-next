import {
	ChangeEvent,
	FocusEvent,
	InputHTMLAttributes,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';
import { FieldMaxWidth, useClickOutside, useTernaryState } from '../core';
import { Popover, usePopover } from '../_popover';
import { asDate } from './utils';
import { CalendarSingle } from './Calendar';
import { CalendarProvider } from './CalendarContext';
import { DateInput } from './DatePickerInput';
import {
	acceptedDateFormats,
	formatDate,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
	parseDate,
	transformValuePropToInputValue,
	type AcceptedDateFormats,
} from './utils';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseTextInputProps = {
	autoComplete?: NativeInputProps['autoComplete'];
	autoFocus?: NativeInputProps['autoFocus'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
};

export type DatePickerNextInputProps = BaseTextInputProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
};

type DatePickerNextCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
	/** The calendar month to initially show if no value is set. */
	initialMonth?: Date;
	/** The range of options to display in calendar year select. */
	yearRange?: { from: number; to: number };
};

type DatePickerNextBaseProps = {
	/** Specifies the date formats that can be parsed. */
	allowedDateFormats?: ReadonlyArray<AcceptedDateFormats>;
	/** The value of the field. */
	value: Date | string | undefined;
	/** Function to be fired following a change event. */
	onChange: (day: Date | string | undefined) => void;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
	/** Used to adjust the date format displayed in the text input and secondary label. */
	dateFormat?: AcceptedDateFormats;
};

export type DatePickerNextProps = DatePickerNextInputProps &
	DatePickerNextCalendarProps &
	DatePickerNextBaseProps;

export const DatePickerNext = ({
	allowedDateFormats: allowedDateFormatsProp = acceptedDateFormats,
	dateFormat = 'dd/MM/yyyy',
	initialMonth,
	inputRef,
	invalid = false,
	maxDate,
	maxWidth = 'md',
	minDate,
	onBlur: onBlurProp,
	onChange,
	value,
	yearRange,
	...props
}: DatePickerNextProps) => {
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
	const toggleCalendar = isCalendarOpen ? closeCalendar : openCalendar;

	const triggerRef = useRef<HTMLButtonElement>(null);

	const popover = usePopover();

	const onSelect = useCallback<SelectSingleEventHandler>(
		(_, selectedDay, modifiers) => {
			// If the day is disabled, do nothing
			if (modifiers.disabled) return;
			// Update the input field with the selected day
			setInputValue(formatDate(selectedDay, dateFormat));
			// Trigger the callback
			onChange(selectedDay);
			// Close the calendar and focus the calendar icon
			closeCalendar();
		},
		[onChange, closeCalendar, dateFormat]
	);

	const [inputValue, setInputValue] = useState(
		transformValuePropToInputValue(value, dateFormat)
	);

	const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		// Attempt to parse the date using the text input value
		const parsedDate = parseDate(inputValue, allowedDateFormats) || inputValue;

		onChange(parsedDate);

		onBlurProp?.(e);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setInputValue(inputValue);
	};

	// Update the text input when the value updates
	useEffect(() => {
		setInputValue(
			transformValuePropToInputValue(value, dateFormat, allowedDateFormats)
		);
	}, [allowedDateFormats, dateFormat, value]);

	// Close the calendar when the user clicks outside
	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [isCalendarOpen, closeCalendar]);

	useClickOutside([popover.popoverRef, triggerRef], handleClickOutside);

	// Close the calendar when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
				closeCalendar();
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

	const valueAsDateOrUndefined = asDate(value, allowedDateFormats);

	const defaultMonth = getCalendarDefaultMonth(
		valueAsDateOrUndefined,
		initialMonth,
		yearRange
	);

	// These prop objects serve as a single source of truth for the duplicated Popovers and Calendars below
	// We duplicate the Popover + Calendar as a workaround for a bug that scrolls the page to the top on initial open of the calendar - https://github.com/gpbl/react-day-picker/discussions/2059
	const popoverProps = useMemo(() => popover.getPopoverProps(), [popover]);
	const calendarProps = useMemo(
		() => ({
			defaultMonth,
			disabled: disabledCalendarDays,
			initialFocus: true,
			numberOfMonths: 1,
			onSelect,
			selected: valueAsDateOrUndefined,
		}),
		[defaultMonth, disabledCalendarDays, onSelect, valueAsDateOrUndefined]
	);

	return (
		<div {...popover.getReferenceProps()}>
			<DateInput
				{...props}
				buttonAriaLabel={getDateInputButtonAriaLabel({
					allowedDateFormats,
					value: inputValue,
				})}
				buttonOnClick={() => {
					toggleCalendar();
					setHasCalendarOpened(true);
				}}
				buttonRef={triggerRef}
				dateFormat={dateFormat}
				invalid={{ field: invalid, input: invalid }}
				isCalendarOpen={isCalendarOpen}
				maxWidth={maxWidth}
				onBlur={onInputBlur}
				onChange={onInputChange}
				ref={inputRef}
				secondaryLabelDate={minDate || maxDate}
				value={inputValue}
			/>
			<CalendarProvider yearRange={yearRange}>
				{/* We duplicate the Popover + Calendar as a workaround for a bug that scrolls the page to the top on initial open of the calandar - https://github.com/gpbl/react-day-picker/discussions/2059 */}
				{hasCalendarOpened ? ( // If the calendar has opened at least once, we conditionally render the Popover + children to prevent the scroll-to-top bug
					isCalendarOpen && (
						<Popover {...popoverProps}>
							<CalendarSingle {...calendarProps} />
						</Popover>
					)
				) : (
					// If the calendar has _not_ opened at least once, we conditionally render only the children of the Popover, i.e. the Calendar to prevent the UI jumping about everytime the calendar is opened
					<Popover
						{...popoverProps}
						css={{ minHeight: '200px' }} // Using 200px as a safety buffer so that when opening the date picker for the first time and the input is at the bottom of the screen, it can't render the calendar almost hidden, e.g. 2px height.
						visibility={isCalendarOpen ? 'visible' : 'hidden'}
					>
						{isCalendarOpen && <CalendarSingle {...calendarProps} />}
					</Popover>
				)}
			</CalendarProvider>
		</div>
	);
};
