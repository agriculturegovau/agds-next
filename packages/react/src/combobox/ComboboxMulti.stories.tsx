import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ComboboxMulti } from './ComboboxMulti';
import { COUNTRY_OPTIONS } from './test-utils';

const meta: Meta<typeof ComboboxMulti> = {
	title: 'forms/Combobox/ComboboxMulti',
	component: ComboboxMulti,
	render: function ComboboxMultiStory(props) {
		const [value, onChange] = useState<Option[]>([]);
		return <ComboboxMulti {...props} value={value} onChange={onChange} />;
	},
	args: {
		label: 'Select country',
		hint: 'Start typing to see results',
		options: COUNTRY_OPTIONS,
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

type Story = StoryObj<typeof ComboboxMulti>;

export const Basic: Story = {};

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
		message: 'Country is required',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};
