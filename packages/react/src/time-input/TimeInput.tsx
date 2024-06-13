'use client';
import {
	forwardRef,
	type ChangeEvent,
	type FocusEvent,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Field } from '../field';
import { TextInputProps, textInputStyles } from '../text-input';
import {
	acceptedTimeFormats,
	formatTime,
	transformValuePropToInputValue,
	type TimeFormat,
} from './utils';

// This const object is required for the tests and also makes the component slightly more performant
const STABLE_DEFAUT_VALUE: TimeValue = {
	formatted: '',
	value: '',
};

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
	function TimeInput(
		{
			block,
			hideOptionalLabel,
			hint,
			id,
			invalid,
			label,
			maxWidth = 'md',
			message,
			onBlur: onBlurProp,
			onChange: onChangeProp,
			required,
			timeFormat: timeFormatProp = 'h:mm aaa',
			value = STABLE_DEFAUT_VALUE,
			...props
		},
		ref
	) {
		const [inputValue, setInputValue] = useState(
			transformValuePropToInputValue(value?.value, timeFormatProp)
		);
		// Update the input when the value and/or timeFormat updates
		useEffect(() => {
			setInputValue(
				transformValuePropToInputValue(value.value, timeFormatProp)
			);
		}, [timeFormatProp, value]);

		const onBlur = (e: FocusEvent<HTMLInputElement>) => {
			const inputValue = e.target?.value;
			const normalizedTime = formatTime(inputValue, 'HH:mm');

			onChangeProp?.({
				formatted: formatTime(inputValue, timeFormatProp),
				value: normalizedTime,
			});

			onBlurProp?.(e);
		};

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			const inputValue = e.target?.value;
			// Immediately update the input field
			setInputValue(inputValue);
		};

		const secondaryLabel = useMemo(() => {
			const timeFormat = acceptedTimeFormats.includes(timeFormatProp)
				? timeFormatProp
				: 'h:mm aaa';
			return '(e.g. ' + formatTime('21:30', timeFormat) + ')';
		}, [timeFormatProp]);

		const styles = textInputStyles({ block, maxWidth });

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={hint}
				id={id}
				invalid={invalid}
				label={label}
				maxWidth={maxWidth}
				message={message}
				required={Boolean(required)}
				secondaryLabel={secondaryLabel}
			>
				{(a11yProps) => (
					<input
						{...a11yProps}
						css={styles}
						onBlur={onBlur}
						onChange={onChange}
						ref={ref}
						type="text"
						value={inputValue}
						{...props}
					/>
				)}
			</Field>
		);
	}
);

export type TimeValue =
	| {
			/** The time in the format that is displayed to the user **/
			formatted?: string;
			/** The time in a consistent 24 hour format **/
			value: string;
	  }
	| undefined;

export type TimeInputProps = Omit<TextInputProps, 'onChange' | 'value'> & {
	/** Function to be fired following a change event. */
	onChange?: (args: TimeValue) => void;
	/** The format to render the value and hint text. */
	timeFormat?: TimeFormat;
	/** The value of the input. */
	value?: TimeValue;
};
