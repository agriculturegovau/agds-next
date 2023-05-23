import { useCallback, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../text-input';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup, ControlGroupProps } from './ControlGroup';
import { ConditionalFieldContainer } from './ConditionalFieldContainer';

const meta: Meta<typeof ControlGroup> = {
	title: 'forms/ControlGroup',
	component: ControlGroup,
};

export default meta;

type Story = StoryObj<typeof ControlGroup>;

function CheckboxTemplate({
	label = 'Preferred contact method',
	block = true,
	...props
}: ControlGroupProps) {
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
		<ControlGroup label={label} block={block} {...props}>
			<Checkbox checked={isChecked('email')} onChange={handlerForKey('email')}>
				Email
			</Checkbox>
			<Checkbox checked={isChecked('phone')} onChange={handlerForKey('phone')}>
				Phone
			</Checkbox>
			<Checkbox
				checked={isChecked('textMessage')}
				onChange={handlerForKey('textMessage')}
			>
				Text message
			</Checkbox>
		</ControlGroup>
	);
}

export const CheckboxGroup: Story = {
	args: {},
	render: CheckboxTemplate,
};

export const CheckboxGroupHint: Story = {
	args: {
		hint: 'Select all that apply',
	},
	render: CheckboxTemplate,
};

export const CheckboxGroupInline: Story = {
	args: {
		block: false,
	},
	render: CheckboxTemplate,
};

export const CheckboxGroupRequired: Story = {
	args: {
		required: true,
	},
	render: CheckboxTemplate,
};

export const CheckboxGroupHideOptionalLabel: Story = {
	args: {
		hideOptionalLabel: true,
	},
	render: CheckboxTemplate,
};

export const CheckboxGroupInvalid: Story = {
	args: {
		message: 'Select a preferred contact method',
		required: true,
		invalid: true,
	},
	render: CheckboxTemplate,
};

export const CheckboxGroupWithConditionalReveal: Story = {
	args: {
		label: 'Preferred contact method',
		block: true,
	},
	render: function Render(args) {
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
			<ControlGroup {...args}>
				<Checkbox
					checked={isChecked('email')}
					onChange={handlerForKey('email')}
				>
					Email
				</Checkbox>
				{isChecked('email') && (
					<ConditionalFieldContainer>
						<TextInput type="email" label="Email address" required />
					</ConditionalFieldContainer>
				)}
				<Checkbox
					checked={isChecked('phone')}
					onChange={handlerForKey('phone')}
				>
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
						<TextInput
							label="Mobile phone number"
							inputMode="numeric"
							required
						/>
					</ConditionalFieldContainer>
				)}
			</ControlGroup>
		);
	},
};

function RadioTemplate({
	label = 'Preferred contact method',
	block = true,
	...props
}: ControlGroupProps) {
	const [value, setValue] = useState<string>();
	const handlerForKey = useCallback((key: string) => () => setValue(key), []);
	const isChecked = (key: string) => key === value;
	return (
		<ControlGroup label={label} block={block} {...props}>
			<Radio checked={isChecked('email')} onChange={handlerForKey('email')}>
				Email
			</Radio>
			<Radio checked={isChecked('phone')} onChange={handlerForKey('phone')}>
				Phone
			</Radio>
			<Radio
				checked={isChecked('textMessage')}
				onChange={handlerForKey('textMessage')}
			>
				Text message
			</Radio>
		</ControlGroup>
	);
}

export const RadioGroup: Story = {
	args: {},
	render: RadioTemplate,
};

export const RadioGroupHint: Story = {
	args: {
		hint: 'Select one option',
	},
	render: RadioTemplate,
};

export const RadioGroupInline: Story = {
	args: {
		block: false,
	},
	render: RadioTemplate,
};

export const RadioGroupRequired: Story = {
	args: {
		required: true,
	},
	render: RadioTemplate,
};

export const RadioGroupHideOptionalLabel: Story = {
	args: {
		hideOptionalLabel: true,
	},
	render: RadioTemplate,
};

export const RadioGroupInvalid: Story = {
	args: {
		message: 'Select a preferred contact method',
		required: true,
		invalid: true,
	},
	render: RadioTemplate,
};

export const RadioGroupWithConditionalReveal: Story = {
	args: {
		label: 'Preferred contact method',
		required: true,
		block: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState<string>();
		const handlerForKey = useCallback((key: string) => () => setValue(key), []);
		const isChecked = (key: string) => key === value;
		return (
			<ControlGroup {...args}>
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
						<TextInput
							label="Mobile phone number"
							inputMode="numeric"
							required
						/>
					</ConditionalFieldContainer>
				)}
			</ControlGroup>
		);
	},
};

export const RadioGroupWithInvalidConditionalReveal: Story = {
	args: {
		label: 'Preferred contact method',
		required: true,
		block: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState('email');
		const handlerForKey = useCallback((key: string) => () => setValue(key), []);
		const isChecked = (key: string) => key === value;
		return (
			<ControlGroup {...args}>
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
	},
};
