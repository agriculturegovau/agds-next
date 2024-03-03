// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import parseTime from 'user-time';
import { type ChangeEvent, type FocusEvent, useState, useEffect } from 'react';
import { TextInput, TextInputProps } from '@ag.ds-next/react/text-input';

export type TimeInputProps = {
	onChange?: (inputValue: string) => void;
	timeFormat: keyof typeof timeFormats;
};

const timeFormats = {
	'h:mm aaa': {
		hour: 'numeric',
		hourCycle: 'h12',
		minute: '2-digit',
	},
	'hh:mm aaa': {
		hour: '2-digit',
		hourCycle: 'h12',
		minute: '2-digit',
	},
	'HH:mm': {
		hour: '2-digit',
		hourCycle: 'h24',
		minute: '2-digit',
	},
} as const;

export function TimeInput({
	label = 'Time',
	onChange: onChangeProp,
	timeFormat = 'h:mm aaa',
	value,
	...props
}: TimeInputProps & TextInputProps) {
	// console.log(`parseTime`, parseTime);
	const [inputValue, setInputValue] = useState(value);
	// Update the text input when the value updates
	useEffect(() => {
		setInputValue(value);
	}, [value]);

	console.log(`inputValue`, inputValue);
	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		console.log(`onBlur e`, e);
		const inputValue = e.target?.value;
		console.log(`onBlur inputValue`, inputValue);

		try {
			const parsedTime = parseTime(inputValue, {
				timeFormat: timeFormats[timeFormat],
			});
			console.log(`parsedTime.formattedTime`, parsedTime.formattedTime);

			onChangeProp?.(parsedTime.formattedTime);
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
