import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ComboboxAsyncMulti } from './ComboboxAsyncMulti';
import { COUNTRY_OPTIONS } from './test-utils';

const meta: Meta<typeof ComboboxAsyncMulti> = {
	title: 'forms/Combobox/ComboboxAsyncMulti',
	component: ComboboxAsyncMulti,
	render: function ComboboxAsyncMultiStory(props) {
		const [value, onChange] = useState<Option[]>([]);
		return (
			<ComboboxAsyncMulti
				{...props}
				value={value}
				onChange={onChange}
				loadOptions={async function loadOptions() {
					// Simulate a slow network connection
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return COUNTRY_OPTIONS;
				}}
			/>
		);
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof ComboboxAsyncMulti>;

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
