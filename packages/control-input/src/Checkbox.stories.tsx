import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Checkbox } from './Checkbox';

export default {
	title: 'forms/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const OnLight: ComponentStory<typeof Checkbox> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	children: 'Example',
	checked: true,
};

export const OnDark: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	children: 'Example',
	checked: true,
};

export const Size = Template.bind({});
Size.args = {
	size: 'sm',
	children: 'Small example',
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled',
	disabled: true,
	checked: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	children: 'Invalid',
	invalid: true,
	checked: true,
};

export const Valid = Template.bind({});
Valid.args = {
	children: 'Valid',
	valid: true,
	checked: true,
};
