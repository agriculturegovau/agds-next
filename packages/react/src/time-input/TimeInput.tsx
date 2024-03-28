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
const STABLE_DEFAUT_VALUE = {
	formatted: '',
	raw: '',
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
			transformValuePropToInputValue(value?.raw, timeFormatProp)
		);
		// Update the text input when the value updates
		useEffect(() => {
			setInputValue(transformValuePropToInputValue(value.raw, timeFormatProp));
		}, [timeFormatProp, value]);

		const onBlur = (e: FocusEvent<HTMLInputElement>) => {
			const inputValue = e.target?.value;
			const normalizedTime = formatTime(inputValue, 'HH:mm');

			onChangeProp?.({
				formatted: formatTime(inputValue, timeFormatProp),
				raw: normalizedTime,
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

export type TimeValue = {
	formatted?: string;
	raw?: string;
};

export type TimeInputProps = Omit<TextInputProps, 'onChange' | 'value'> & {
	onChange?: (args: TimeValue) => void;
	timeFormat?: TimeFormat;
	value?: TimeValue;
};
