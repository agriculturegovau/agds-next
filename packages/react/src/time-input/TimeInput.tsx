import { useState } from 'react';
import { format } from 'date-fns';
import { TextInput, TextInputProps } from '@ag.ds-next/react/text-input';

export type TimeInputProps = Omit<TextInputProps, 'onChange'> & {
	value?: string;
	onChange?: (value: string) => void;
};

export function TimeInput(props: TimeInputProps) {
	const [internalValue, setInternalValue] = useState(props.value);

	const value =
		(typeof props.value === 'undefined' ? internalValue : props.value) ?? '';

	function onChange(value: string) {
		setInternalValue(value);
		props.onChange?.(value);
	}

	// On blur of the input, attempt to parse the input value as a date/time
	// FIXME This should probably happen on debounce, not on blur.
	// We use `useDebouncedCallback` in date picker and combobox
	function onBlur() {
		if (!value) return;
		try {
			const parsedValue = parseHumanReadableTime(value);
			if (!parsedValue) return;
			const f = format(parsedValue, 'hh:mm aaa');
			if (f !== value) onChange(f);
		} catch {
			console.log('error');
		}
	}

	return (
		<TextInput
			{...props}
			label="Time"
			value={value}
			onChange={(event) => onChange(event.target.value)}
			onBlur={onBlur}
		/>
	);
}

// TODO This logic isn't perfect, but it's good enough for a prototype. It was mainly written by ChatGPT.
// TODO consider using date-fns, similar to what we do in `parseDate` function in packages/react/src/date-picker/utils.ts
function parseHumanReadableTime(input: string): Date | null {
	input = input.replace(/\s/g, '').toLowerCase();

	const regex12Hour = /^(\d{1,2})(?::?(\d{2}))?(am|pm)?$/;
	const regex24Hour = /^(\d{2})(?::?(\d{2}))?$/;

	const match12Hour = input.match(regex12Hour);
	const match24Hour = input.match(regex24Hour);

	if (match12Hour) {
		let hours = parseInt(match12Hour[1]);
		const minutes = match12Hour[2] ? parseInt(match12Hour[2]) : 0;
		const period = match12Hour[3];

		if (period === 'pm' && hours !== 12) {
			hours += 12;
		} else if (period === 'am' && hours === 12) {
			hours = 0;
		}

		const currentDate = new Date();
		currentDate.setHours(hours, minutes, 0, 0);
		return currentDate;
	} else if (match24Hour) {
		const hours = parseInt(match24Hour[1]);
		const minutes = parseInt(match24Hour[2]) || 0;

		if (hours < 24 && minutes < 60) {
			const currentDate = new Date();
			currentDate.setHours(hours, minutes, 0, 0);
			return currentDate;
		}
	}

	return null;
}
