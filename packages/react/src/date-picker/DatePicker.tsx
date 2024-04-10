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
import { CalendarSingle } from './Calendar';
import { CalendarProvider } from './CalendarContext';
import { DateInput } from './DatePickerInput';
import {
	parseDate,
	formatDate,
	constrainDate,
	transformValuePropToInputValue,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
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
	value,
	onBlur: onBlurProp,
	onChange,
	onInputChange: onInputChangeProp,
	minDate,
	maxDate,
	initialMonth,
	yearRange,
	inputRef,
	invalid = false,
	maxWidth = 'md',
	dateFormat = 'dd/MM/yyyy',
	...props
}: DatePickerProps) => {
	const triggerRef = useRef<HTMLButtonElement>(null);

	const [hasCalendarOpened, setHasCalendarOpened] = useState(false);
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const toggleCalendar = isCalendarOpen ? closeCalendar : openCalendar;

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
		const parsedDate = parseDate(inputValue);
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
	}, [value, dateFormat]);

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

	const valueAsDateOrUndefined = typeof value === 'string' ? undefined : value;

	const defaultMonth = getCalendarDefaultMonth(
		valueAsDateOrUndefined,
		initialMonth,
		yearRange
	);

	// These prop objects serve as a single source of truth for the duplicated Popovers and Calendars below
	// We duplicate the Popover + Calendar as a workaround for a bug that scrolls the page to the top on initial open of the calandar - https://github.com/gpbl/react-day-picker/discussions/2059
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
				dateFormat={dateFormat}
				maxWidth={maxWidth}
				invalid={{ field: invalid, input: invalid }}
				ref={inputRef}
				value={inputValue}
				onBlur={onInputBlur}
				onChange={onInputChange}
				buttonRef={triggerRef}
				buttonOnClick={() => {
					toggleCalendar();
					setHasCalendarOpened(true);
				}}
				buttonAriaLabel={getDateInputButtonAriaLabel(inputValue)}
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
						visibility={isCalendarOpen ? 'visible' : 'hidden'}
						css={{ minHeight: '200px' }} // Using 200px as a safety buffer so that opening the date picker for the first time when the input is at the botom of the screen doesn't render the calendar virtually hidden, e.g. 2px height.
					>
						{isCalendarOpen && <CalendarSingle {...calendarProps} />}
					</Popover>
				)}
			</CalendarProvider>
		</div>
	);
};
