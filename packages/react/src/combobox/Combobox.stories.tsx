import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from './Combobox';
import { COUNTRIES } from './test-utils';

export default {
	title: 'forms/Combobox/Combobox',
	component: Combobox,
} as ComponentMeta<typeof Combobox>;

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRIES,
};

type Option = (typeof COUNTRIES)[number];

const Template: ComponentStory<typeof Combobox> = (args) => {
	const [value, onChange] = useState<Option | null>(null);
	return <Combobox {...args} value={value} onChange={onChange} />;
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
