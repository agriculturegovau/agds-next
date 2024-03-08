// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import parseTimeOriginal from 'user-time';
import { type ChangeEvent, type FocusEvent, useState, useEffect } from 'react';
import { TextInput, TextInputProps } from '@ag.ds-next/react/text-input';
import {
	parseTime,
	transformValuePropToInputValue,
	type TimeFormat,
} from './utils';

export function TimeInput({
	label = 'Time',
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

		try {
			const parsedTime = parseTime(inputValue, 'HH:mm');
			console.log(`parsedTime`, parsedTime);

			onChangeProp?.(parsedTime);
		} catch (e) {
			console.warn(e);

			onChangeProp?.(inputValue);
		}
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
			label={label}
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

export const isValidTime = (value: string) => {
	try {
		parseTimeOriginal(value, {
			timeFormat: 'HH:mm',
		});
		return true;
	} catch (e) {
		return false;
	}
};
