import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ComboboxAsync } from './ComboboxAsync';
import { COUNTRY_OPTIONS } from './test-utils';

const meta: Meta<typeof ComboboxAsync> = {
	title: 'forms/Combobox/ComboboxAsync',
	component: ComboboxAsync,
	render: function ComboboxAsyncStory(props) {
		const [value, onChange] = useState<Option | null>(null);
		return (
			<ComboboxAsync
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
	args: {
		label: 'Select country',
		hint: 'Start typing to see results',
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

type Story = StoryObj<typeof ComboboxAsync>;

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
