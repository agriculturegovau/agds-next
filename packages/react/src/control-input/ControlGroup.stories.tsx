import { useCallback, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup, ControlGroupProps } from './ControlGroup';

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
