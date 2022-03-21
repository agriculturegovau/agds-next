import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Flex } from '@ag.ds-next/box';
import { CalendarIcon } from '@ag.ds-next/icon';
import { TextInput } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { Calendar, CalendarProps } from './Calendar';
import { Button } from '@ag.ds-next/button';
import { format, parse, isValid } from 'date-fns';

export type DatePickerProps = CalendarProps & {
	value: Date | undefined;
	onChange: (day: Date | undefined) => void;

	disabled?: boolean;
	label: string;
	required?: boolean;
	requiredLabel?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
	block?: boolean;
};

export const DatePicker = ({
	value,
	onChange,
	label,
	invalid,
	valid,
	message,
	disabled,
	required,
	requiredLabel,
	hint,
}: DatePickerProps) => {
	const [open, setOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const [referenceElement, setReferenceElement] =
		useState<HTMLInputElement | null>(null);

	const [popperElement, setPopperElement] = useState(null);

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

	const [inputValue, setInputValue] = useState('');

	const onDayClick = useCallback(
		(day: Date) => {
			setOpen(false);
			setInputValue(format(day, 'dd/MM/yyyy'));
			onChange(day);
			triggerRef.current?.focus();
		},
		[onChange]
	);

	// TODO debounced
	const onInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setInputValue(value);

			// Check if the user has a entered a full date (31/01/2000)
			if (value.length !== 10) {
				onChange(undefined);
				return;
			}

			const parsedDate = parse(value, 'dd/MM/yyyy', new Date());
			onChange(isValid(parsedDate) ? parsedDate : undefined);
		},
		[onChange]
	);

	return (
		<div>
			<Flex alignItems="flex-end">
				<TextInput
					ref={setReferenceElement}
					value={inputValue}
					onChange={onInputChange}
					placeholder="DD/MM/YYYY"
					label={label}
					invalid={invalid}
					valid={valid}
					message={message}
					disabled={disabled}
					required={required}
					requiredLabel={requiredLabel}
					hint={hint}
					css={{
						borderRight: 'none',
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
				/>
				<Button
					type="button"
					variant="secondary"
					ref={triggerRef}
					onClick={() => setOpen(true)}
					disabled={disabled}
					css={{
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
						paddingLeft: mapSpacing(1),
						paddingRight: mapSpacing(1),
					}}
				>
					<CalendarIcon size="md" />
				</Button>
			</Flex>
			{open && (
				<div
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
				>
					<Calendar
						initialMonth={value}
						selectedDays={[value]}
						onDayClick={onDayClick}
					/>
				</div>
			)}
		</div>
	);
};
