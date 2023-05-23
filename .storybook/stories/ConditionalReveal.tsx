import { Meta } from '@storybook/react';
import { useCallback, useState } from 'react';
import {
	ControlGroup,
	Radio,
	ConditionalFieldContainer,
	Checkbox,
} from '@ag.ds-next/react/control-input';
import { TextInput } from '@ag.ds-next/react/text-input';

const meta: Meta = {
	title: 'Patterns/Conditionally revealed questions',
};

export default meta;

export const Radios = () => {
	const [value, setValue] = useState<string>();
	const handlerForKey = useCallback((key: string) => () => setValue(key), []);
	const isChecked = (key: string) => key === value;
	return (
		<ControlGroup label="Preferred contact method" required block>
			<Radio checked={isChecked('email')} onChange={handlerForKey('email')}>
				Email
			</Radio>
			{isChecked('email') && (
				<ConditionalFieldContainer>
					<TextInput type="email" label="Email address" required />
				</ConditionalFieldContainer>
			)}
			<Radio checked={isChecked('phone')} onChange={handlerForKey('phone')}>
				Phone
			</Radio>
			{isChecked('phone') && (
				<ConditionalFieldContainer>
					<TextInput label="Phone number" inputMode="numeric" required />
				</ConditionalFieldContainer>
			)}
			<Radio
				checked={isChecked('textMessage')}
				onChange={handlerForKey('textMessage')}
			>
				Text message
			</Radio>
			{isChecked('textMessage') && (
				<ConditionalFieldContainer>
					<TextInput label="Mobile phone number" inputMode="numeric" required />
				</ConditionalFieldContainer>
			)}
		</ControlGroup>
	);
};

export const RadiosInvalid = () => {
	const [value, setValue] = useState('email');
	const handlerForKey = useCallback((key: string) => () => setValue(key), []);
	const isChecked = (key: string) => key === value;
	return (
		<ControlGroup label="Preferred contact method" required block>
			<Radio checked={isChecked('email')} onChange={handlerForKey('email')}>
				Email
			</Radio>
			{isChecked('email') && (
				<ConditionalFieldContainer>
					<TextInput
						type="email"
						label="Email address"
						required
						invalid
						message="Enter a email address"
					/>
				</ConditionalFieldContainer>
			)}
			<Radio checked={isChecked('phone')} onChange={handlerForKey('phone')}>
				Phone
			</Radio>
			{isChecked('phone') && (
				<ConditionalFieldContainer>
					<TextInput
						label="Phone number"
						inputMode="numeric"
						required
						invalid
						message="Enter a phone number"
					/>
				</ConditionalFieldContainer>
			)}
			<Radio
				checked={isChecked('textMessage')}
				onChange={handlerForKey('textMessage')}
			>
				Text message
			</Radio>
			{isChecked('textMessage') && (
				<ConditionalFieldContainer>
					<TextInput
						label="Mobile phone number"
						inputMode="numeric"
						required
						invalid
						message="Enter a mobile phone number"
					/>
				</ConditionalFieldContainer>
			)}
		</ControlGroup>
	);
};

export const Checkboxes = () => {
	const [value, setValue] = useState<string[]>([]);
	const handlerForKey = useCallback(
		(key: string) => () =>
			setValue((value) =>
				value.includes(key) ? value.filter((v) => v !== key) : [...value, key]
			),
		[]
	);
	const isChecked = (key: string) => value.includes(key);
	return (
		<ControlGroup label="Preferred contact method" required block>
			<Checkbox checked={isChecked('email')} onChange={handlerForKey('email')}>
				Email
			</Checkbox>
			{isChecked('email') && (
				<ConditionalFieldContainer>
					<TextInput type="email" label="Email address" required />
				</ConditionalFieldContainer>
			)}
			<Checkbox checked={isChecked('phone')} onChange={handlerForKey('phone')}>
				Phone
			</Checkbox>
			{isChecked('phone') && (
				<ConditionalFieldContainer>
					<TextInput label="Phone number" inputMode="numeric" required />
				</ConditionalFieldContainer>
			)}
			<Checkbox
				checked={isChecked('textMessage')}
				onChange={handlerForKey('textMessage')}
			>
				Text message
			</Checkbox>
			{isChecked('textMessage') && (
				<ConditionalFieldContainer>
					<TextInput label="Mobile phone number" inputMode="numeric" required />
				</ConditionalFieldContainer>
			)}
		</ControlGroup>
	);
};
