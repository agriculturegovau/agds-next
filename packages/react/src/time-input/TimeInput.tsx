import { type ChangeEvent, type FocusEvent, useState, useEffect } from 'react';
import { TextInput, TextInputProps } from '@ag.ds-next/react/text-input';
import {
	formatTime,
	transformValuePropToInputValue,
	type TimeFormat,
} from './utils';

export function TimeInput({
	onChange: onChangeProp,
	timeFormat = 'h:mm aaa',
	value = {
		formatted: '',
		raw: '',
	},
	...props
}: Omit<TextInputProps, 'value'> & TimeInputProps) {
	const [inputValue, setInputValue] = useState(
		transformValuePropToInputValue(value.raw, timeFormat)
	);
	// Update the text input when the value updates
	useEffect(() => {
		setInputValue(transformValuePropToInputValue(value.raw, timeFormat));
	}, [timeFormat, value]);

	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		const inputValue = e.target?.value;
		const normalizedTime = formatTime(inputValue, 'HH:mm');

		onChangeProp?.({
			formatted: formatTime(inputValue, timeFormat),
			raw: normalizedTime,
		});
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target?.value;
		// Immediately update the input field
		setInputValue(inputValue);
	};

	return (
		<TextInput
			{...props}
			onBlur={onBlur}
			onChange={onChange}
			value={inputValue}
		/>
	);
}

type TimeValue = {
	formatted?: string | undefined;
	raw: string | undefined;
};

export type TimeInputProps = {
	onChange?: (args: TimeValue) => void;
	timeFormat: TimeFormat;
	value: TimeValue;
};
