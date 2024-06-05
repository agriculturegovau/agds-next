import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { type DefaultComboboxOption } from '../combobox';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
	title: 'Forms/TimePicker',
	component: TimePicker,
	args: {
		label: 'Select a time',
		hint: 'Start typing to see results',
	},
	render: function TimePickerStory(props) {
		const [value, setValue] = useState<DefaultComboboxOption | null>(null);
		return <TimePicker {...props} value={value} onChange={setValue} />;
	},
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {};

export const CustomRange: Story = {
	args: {
		min: '09:00',
		max: '17:00',
	},
};

export const CustomInterval: Story = {
	args: {
		interval: 60,
	},
};

export const CustomTimeFormat: Story = {
	args: {
		timeFormat: 'HH:mm',
	},
};

export const CustomRangeIntervalAndTimeFormat: Story = {
	args: {
		interval: 60,
		min: '09:00',
		max: '17:00',
		timeFormat: 'HH:mm',
	},
};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		invalid: true,
		message: 'Time is required',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const Clearable: Story = {
	args: {
		clearable: true,
	},
};
