import {
	type ChangeEvent,
	type FocusEvent,
	type InputHTMLAttributes,
	type Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { type PropsSingle } from 'react-day-picker';
import { Popover, usePopover } from '../_popover';
import { type FieldMaxWidth, useClickOutside, useTernaryState } from '../core';
import { DateInput } from '../date-picker-next/DatePickerInput';
import {
	acceptedDateFormats,
	focusDay,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
	normaliseDateString,
	type AcceptedDateFormats,
} from '../date-picker-next/utils';
import { CalendarSingle } from './Calendar';
import { CalendarProvider } from './CalendarContext';
import {
	constrainDate,
	formatDate,
	parseDate,
	transformValuePropToInputValue,
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

export type DatePickerInputProps = BaseTextInputProps & {
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

type DatePickerCalendarProps = {
	/** If set, any days before this date will not be selectable. */
	minDate?: Date;
	/** If set, any days after this date will not be selectable. */
	maxDate?: Date;
	/** The calendar month to initially show if no value is set. */
	initialMonth?: Date;
	/** The range of options to display in calendar year select. */
	yearRange?: { from: number; to: number };
};

type DatePickerBaseProps = {
	/** Specifies the date formats that can be parsed. */
	allowedDateFormats?: ReadonlyArray<AcceptedDateFormats>;
	/** The value of the field. */
	value: Date | string | undefined;
	/** Function to be fired following a change event. */
	onChange: (day: Date | undefined) => void;
	/** Function to be fired when the input value is updated. */
	onInputChange?: (inputValue: string) => void;
	/** Ref to the input element. */
	inputRef?: Ref<HTMLInputElement>;
	/** Used to adjust the date format displayed in the text input and secondary label. */
	dateFormat?: AcceptedDateFormats;
};

export type DatePickerProps = DatePickerInputProps &
	DatePickerCalendarProps &
	DatePickerBaseProps;

export const DatePicker = ({
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
	onInputChange: onInputChangeProp,
	value,
	yearRange,
	...props
}: DatePickerProps) => {
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

	const triggerRef = useRef<HTMLButtonElement>(null);

	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const toggleCalendar = isCalendarOpen ? closeCalendar : openCalendar;

	const popover = usePopover();

	const closeCalendarAndFocusTrigger = useCallback(() => {
		closeCalendar();
		setTimeout(() => {
			triggerRef.current?.focus();
		}, 0);
	}, [closeCalendar, triggerRef]);

	const onSelect = useCallback<Exclude<PropsSingle['onSelect'], undefined>>(
		(_selected, triggeredDate, modifiers) => {
			// If the day is disabled, do nothing
			if (modifiers.disabled) return;
			// Update the input field with the selected day
			setInputValue(formatDate(triggeredDate, dateFormat));
			// Trigger the callback
			onChange(triggeredDate);
			// Close the calendar and focus the calendar icon
			closeCalendarAndFocusTrigger();
		},
		[closeCalendarAndFocusTrigger, dateFormat, onChange]
	);

	const [inputValue, setInputValue] = useState(
		transformValuePropToInputValue(value, dateFormat)
	);

	const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		// Attempt to parse the date using the text input value
		const parsedDate = parseDate(inputValue, allowedDateFormats);
		const constrainedDate = constrainDate(parsedDate, minDate, maxDate);

		if (!inputValue || constrainedDate) {
			onChange(constrainedDate);
		} else {
			onInputChangeProp?.(inputValue);
		}

		onBlurProp?.(e);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		// Immediately update the input field
		setInputValue(inputValue);
	};

	// Update the text input when the value updates
	useEffect(() => {
		setInputValue(transformValuePropToInputValue(value, dateFormat));
	}, [dateFormat, value]);

	// Close the calendar when the user clicks outside
	const handleClickOutside = useCallback(() => {
		if (isCalendarOpen) closeCalendar();
	}, [closeCalendar, isCalendarOpen]);

	useClickOutside([popover.popoverRef, triggerRef], handleClickOutside);

	// react-day-picker autoFocus was clashing with popover, the focus is set here when the calendar is opened
	useEffect(() => {
		// Wrap in timeout 0 to focus after all components renders
		setTimeout(() => {
			if (!isCalendarOpen) return;

			// Target focus on any currently selected elements
			if (focusDay('td[data-selected="true"]')) return;

			// Default return focus today
			focusDay('td[data-today="true"]');
		}, 0);
	}, [isCalendarOpen]);

	// Close the calendar when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isCalendarOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				// Close the calendar and focus the calendar icon
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
	}, [maxDate, minDate]);

	const valueAsDateOrUndefined =
		typeof value === 'string' ? normaliseDateString(value) : value;

	const defaultMonth = getCalendarDefaultMonth(
		valueAsDateOrUndefined,
		initialMonth,
		yearRange
	);

	const popoverProps = useMemo(() => popover.getPopoverProps(), [popover]);
	const calendarProps = useMemo(
		() => ({
			autoFocus: false, // as above, disabled autoFocus to prevent focus clashing and to set manual focus
			defaultMonth,
			disabled: disabledCalendarDays,
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
				buttonOnClick={toggleCalendar}
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
				{isCalendarOpen && (
					<Popover
						{...popoverProps}
						css={{ minHeight: '200px' }} // Using 200px as a safety buffer so that when opening the date picker for the first time and the input is at the bottom of the screen, it can't render the calendar almost hidden, e.g. 2px height.
						visibility={isCalendarOpen ? 'visible' : 'hidden'}
					>
						<CalendarSingle {...calendarProps} />
					</Popover>
				)}
			</CalendarProvider>
		</div>
	);
};
