import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { SearchInput } from './SearchInput';

export default {
	title: 'forms/SearchInput',
	component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => {
	return <SearchInput {...args} />;
};

const ControlledTemplate: ComponentStory<typeof SearchInput> = (args) => {
	const [value, setValue] = useState('');
	return <SearchInput {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});
Basic.args = {
	label: 'Search',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Search',
	required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Search',
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Search',
	required: true,
	message: 'A search term is required to see results',
	invalid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Search',
	hint: 'Start typing to see results',
};

export const Block = Template.bind({});
Block.args = {
	label: 'Search',
	block: true,
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
	label: 'Search',
	block: true,
};
