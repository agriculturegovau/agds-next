import {
	ChangeEvent,
	useCallback,
	Ref,
	useRef,
	useState,
	useEffect,
	useMemo,
} from 'react';
import { SelectRangeEventHandler } from 'react-day-picker';
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
	getValidDateRange,
	parseDate,
	formatDate,
	constrainDate,
	transformValuePropToInputValue,
} from '../date-picker/utils';
import { CalendarRange } from '../date-picker/Calendar';
import { DateInput } from './../date-picker/DatePickerInput';

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
}: DateRangePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const [inputMode, setInputMode] = useState<'from' | 'to'>();

	const fromTriggerRef = useRef<HTMLButtonElement>(null);
	const toTriggerRef = useRef<HTMLButtonElement>(null);

	function onFromTriggerClick() {
		if (isCalendarOpen) {
			closeCalendar();
			setInputMode(undefined);
		} else {
			setInputMode('from');
			openCalendar();
		}
	}

	function onToTriggerClick() {
		if (isCalendarOpen) {
			closeCalendar();
			setInputMode(undefined);
		} else {
			setInputMode('to');
			openCalendar();
		}
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
			const range = getValidDateRange(
				inputMode,
				selectedDay,
				valueAsDateOrUndefined
			);
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
		[closeCalendar, inputMode, onChange, valueAsDateOrUndefined]
	);

	// From input state
	const [fromInputValue, setFromInputValue] = useState(
		transformValuePropToInputValue(value.from)
	);
	const onFromInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			// Immediately update the input field
			setFromInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			const containedDate = constrainDate(parsedDate, minDate, maxDate);

			const nextValue = {
				from: containedDate,
				to: valueAsDateOrUndefined.to,
			};

			// When there is no value OR there is a valid date, only trigger the `onChange` callback
			// `onInputChange` will not be called
			if (!inputValue || containedDate) {
				onChange(nextValue);
				return;
			}

			onChange(nextValue);
			onFromInputChangeProp?.(inputValue);
		},
		[maxDate, minDate, onChange, valueAsDateOrUndefined, onFromInputChangeProp]
	);

	// To input state
	const [toInputValue, setToInputValue] = useState(
		transformValuePropToInputValue(value.to)
	);
	const onToInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			// Immediately update the input field
			setToInputValue(inputValue);
			// Ensure the text entered is a valid date
			const parsedDate = parseDate(inputValue);
			const containedDate = constrainDate(parsedDate, minDate, maxDate);

			const nextValue = {
				from: valueAsDateOrUndefined.from,
				to: containedDate,
			};

			// When there is no value OR there is a valid date, only trigger the `onChange` callback
			// `onInputChange` will not be called
			if (!inputValue || containedDate) {
				onChange(nextValue);
				return;
			}

			onChange(nextValue);
			onToInputChangeProp?.(inputValue);
		},
		[maxDate, minDate, onChange, onToInputChangeProp, valueAsDateOrUndefined]
	);

	// Update the text inputs when the value updates
	useEffect(() => {
		setFromInputValue(transformValuePropToInputValue(value.from));
		setToInputValue(transformValuePropToInputValue(value.to));
	}, [value]);

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

	const { fieldsetId, hintId, messageId } = useDateRangePickerIds(id);
	const describedByIds = [
		invalid && message ? messageId : null,
		hint ? hintId : null,
	].filter(Boolean);
	const describedBy = describedByIds.length
		? describedByIds.join(' ')
		: undefined;

	return (
		<FieldContainer invalid={invalid} id={fieldsetId}>
			<fieldset
				aria-describedby={describedBy}
				css={{ padding: 0, margin: 0, border: 'none' }}
			>
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
							ref={fromInputRef}
							label={fromLabel}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							value={fromInputValue}
							onChange={onFromInputChange}
							buttonRef={fromTriggerRef}
							buttonOnClick={onFromTriggerClick}
							disabled={disabled}
							required={required}
							invalid={{ field: false, input: fromInvalid }}
						/>
						<DateInput
							ref={toInputRef}
							label={toLabel}
							hideOptionalLabel={hideOptionalLabel || Boolean(legend)}
							value={toInputValue}
							onChange={onToInputChange}
							buttonRef={toTriggerRef}
							buttonOnClick={onToTriggerClick}
							disabled={disabled}
							required={required}
							invalid={{ field: false, input: toInvalid }}
						/>
					</Flex>
				</Stack>
				{isCalendarOpen && (
					<Popover {...popover.getPopoverProps()}>
						<CalendarRange
							initialFocus
							defaultMonth={valueAsDateOrUndefined.from}
							selected={valueAsDateOrUndefined}
							onSelect={onSelect}
							numberOfMonths={numberOfMonths}
							disabled={disabledCalendarDays}
							yearRange={yearRange}
						/>
					</Popover>
				)}
			</fieldset>
		</FieldContainer>
	);
};

export function useDateRangePickerIds(idProp?: string) {
	const autoId = useId(idProp);
	const fieldsetId = idProp ? idProp : `date-range-picker-${autoId}`;
	const hintId = `date-range-picker-${autoId}-hint`;
	const messageId = `date-range-picker-${autoId}-message`;
	return { fieldsetId, hintId, messageId };
}
