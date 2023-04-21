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
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof ComboboxMulti>;

export const Basic: Story = {
	args: defaultArgs,
};

export const Required: Story = {
	args: {
		...defaultArgs,
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		...defaultArgs,
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		message: 'Country is required',
	},
};

export const Block: Story = {
	args: {
		...defaultArgs,
		block: true,
	},
};
