import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Flex } from '@ag.ds-next/box';
import { useClickOutside, useTernaryState } from '@ag.ds-next/core';
import { Calendar, CalendarProps } from './Calendar';
import { format, parse, isValid } from 'date-fns';
// import { DateUtils } from 'react-day-picker';
import { DateInput } from './DatePickerInput';

export type DateRange = {
	from: Date | undefined;
	to: Date | undefined;
};

export type DateRangePickerProps = CalendarProps & {
	disabled?: boolean;
	value: DateRange;
	onChange: (day: DateRange) => void;
	fromLabel?: string;
	toLabel?: string;
	requiredLabel?: boolean;
};

export const DateRangePicker = ({
	disabled,
	value,
	onChange,
	fromLabel = 'From',
	toLabel = 'To',
}: DateRangePickerProps) => {
	const [isCalendarOpen, openCalendar, closeCalendar] = useTernaryState(false);
	const [mode, setMode] = useState<'start' | 'end'>();

	const startTriggerRef = useRef<HTMLButtonElement>(null);
	const endTriggerRef = useRef<HTMLButtonElement>(null);

	const onStartTriggerClick = useCallback(() => {
		setMode('start');
		openCalendar();
	}, [openCalendar]);

	const onEndTriggerClick = useCallback(() => {
		setMode('end');
		openCalendar();
	}, [openCalendar]);

	const [referenceElement, setReferenceElement] =
		useState<HTMLDivElement | null>(null);

	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement: 'bottom-start',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 8],
				},
			},
		],
	});

	const clickOutsideRef = useRef(popperElement);
	clickOutsideRef.current = popperElement;
	useClickOutside(clickOutsideRef, closeCalendar);

	const onDayClick = useCallback(
		(day: Date) => {
			const rawRange =
				mode === 'start'
					? { from: day, to: value.to }
					: { from: value.from, to: day };

			const range = {
				from: rawRange.from || undefined,
				to: rawRange.to || undefined,
			};

			onChange(range);
			setStartInputValue(range.from ? format(range.from, 'dd/MM/yyyy') : '');
			setEndInputValue(range.to ? format(range.to, 'dd/MM/yyyy') : '');

			if (mode === 'start') {
				setMode('end');
				endTriggerRef.current?.focus();
			}

			if (mode === 'end') {
				if (!range.from) {
					setMode('start');
					startTriggerRef.current?.focus();
					return;
				}
				setMode(undefined);
			}

			if (mode === 'end' && range.from && range.to) {
				closeCalendar();
			}
		},
		[mode, value, onChange, closeCalendar]
	);

	const [startInputValue, setStartInputValue] = useState('');

	const onStartInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			setStartInputValue(inputValue);

			// Check if the user has a entered a full date (31/01/2000)
			if (inputValue.length !== 10) {
				onChange({ ...value, from: undefined });
				return;
			}

			const parsedDate = parse(inputValue, 'dd/MM/yyyy', new Date());
			onChange({
				...value,
				from: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value]
	);

	const [endInputValue, setEndInputValue] = useState('');

	const onEndInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target.value;
			setEndInputValue(inputValue);

			// Check if the user has a entered a full date (31/01/2000)
			if (inputValue.length !== 10) {
				onChange({ ...value, to: undefined });
				return;
			}

			const parsedDate = parse(inputValue, 'dd/MM/yyyy', new Date());
			onChange({
				...value,
				to: isValid(parsedDate) ? parsedDate : undefined,
			});
		},
		[onChange, value]
	);

	return (
		<div>
			<Flex inline gap={1} ref={setReferenceElement}>
				<DateInput
					label={fromLabel}
					value={startInputValue}
					onChange={onStartInputChange}
					placeholder="DD/MM/YYYY"
					buttonRef={startTriggerRef}
					buttonOnClick={onStartTriggerClick}
					disabled={disabled}
					// requiredLabel={requiredLabel}
				/>
				<DateInput
					label={toLabel}
					value={endInputValue}
					onChange={onEndInputChange}
					placeholder="DD/MM/YYYY"
					buttonRef={endTriggerRef}
					buttonOnClick={onEndTriggerClick}
					disabled={disabled}
					// requiredLabel={requiredLabel}
				/>
			</Flex>
			{isCalendarOpen ? (
				<div
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<Calendar
						initialMonth={mode === 'start' ? value.from : value.to}
						selectedDays={[value.from, value]}
						onDayClick={onDayClick}
						modifiers={{ start: value.from, end: value.to }}
						numberOfMonths={2}
						range
					/>
				</div>
			) : null}
		</div>
	);
};
