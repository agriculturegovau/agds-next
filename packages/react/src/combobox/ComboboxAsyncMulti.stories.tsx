import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ComboboxAsyncMulti } from './ComboboxAsyncMulti';
import { COUNTRY_OPTIONS } from './test-utils';

export default {
	title: 'forms/Combobox/ComboboxAsyncMulti',
} as ComponentMeta<typeof ComboboxAsyncMulti>;

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Option = (typeof COUNTRY_OPTIONS)[number];

const Template: ComponentStory<typeof ComboboxAsyncMulti> = (args) => {
	const [value, onChange] = useState<Option[] | null>(null);
	return (
		<ComboboxAsyncMulti
			{...args}
			value={value}
			onChange={onChange}
			loadOptions={async function loadOptions() {
				// Simulate a slow network connection
				await new Promise((resolve) => setTimeout(resolve, 1000));
				return COUNTRY_OPTIONS;
			}}
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
