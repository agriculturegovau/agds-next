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
	value,
	...props
}: Exclude<TextInputProps, 'value'> & TimeInputProps) {
	const [inputValue, setInputValue] = useState(
		transformValuePropToInputValue(value, timeFormat)
	);
	console.log(`value`, value);
	// Update the text input when the value updates
	useEffect(() => {
		setInputValue(transformValuePropToInputValue(value, timeFormat));
	}, [timeFormat, value]);

	console.log(`inputValue`, inputValue);
	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		console.log(`onBlur e`, e);
		const inputValue = e.target?.value;
		console.log(`onBlur inputValue`, inputValue);

		const normalizedTime = formatTime(inputValue, 'HH:mm');
		console.log(`normalizedTime`, normalizedTime);

		onChangeProp?.(normalizedTime);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(`onChange e`, e);
		const inputValue = e.target?.value;
		console.log(`onChange inputValue`, inputValue);
		// Immediately update the input field
		setInputValue(inputValue);
	};

	return (
		<TextInput
			{...props}
			value={inputValue}
			onBlur={onBlur}
			onChange={onChange}
		/>
	);
}

export type TimeInputProps = {
	onChange?: (inputValue: string) => void;
	timeFormat: TimeFormat;
	value: string | undefined;
};
