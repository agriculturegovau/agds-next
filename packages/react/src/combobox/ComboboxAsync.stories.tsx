import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ComboboxAsync } from './ComboboxAsync';
import { COUNTRY_OPTIONS } from './test-utils';

export default {
	title: 'forms/Combobox/ComboboxAsync',
	component: ComboboxAsync,
} as ComponentMeta<typeof ComboboxAsync>;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

const Template: ComponentStory<typeof ComboboxAsync> = ({
	loadOptions,
	...args
}) => {
	const [value, onChange] = useState<Option | null>(null);
	return (
		<ComboboxAsync
			value={value}
			onChange={onChange}
			loadOptions={async function loadOptions() {
				// Simulate a slow network connection
				await new Promise((resolve) => setTimeout(resolve, 1000));
				return COUNTRY_OPTIONS;
			}}
			{...args}
		/>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	...defaultArgs,
};

export const Required = Template.bind({});
Required.args = {
	...defaultArgs,
	required: true,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	...defaultArgs,
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultArgs,
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultArgs,
	invalid: true,
	message: 'Country is required',
};

export const Block = Template.bind({});
Block.args = {
	...defaultArgs,
	block: true,
};
