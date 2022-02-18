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

export const LightCheckbox = Template.bind({});
LightCheckbox.args = {
	children: 'Example',
	checked: true,
};

export const LightAltCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="light" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
LightAltCheckbox.args = {
	children: 'Example',
	checked: true,
};

export const DarkCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="dark" background="body" padding={1}>
		<Template {...args} />
	</Box>
);
DarkCheckbox.args = {
	children: 'Example',
	checked: true,
};

export const DarkAltCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="dark" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
DarkAltCheckbox.args = {
	children: 'Example',
	checked: true,
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
	size: 'sm',
	children: 'Small example',
	checked: true,
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
	children: 'Disabled',
	disabled: true,
	checked: true,
};

export const InvalidCheckbox = Template.bind({});
InvalidCheckbox.args = {
	children: 'Invalid',
	invalid: true,
	checked: true,
};

export const ValidCheckbox = Template.bind({});
ValidCheckbox.args = {
	children: 'Valid',
	valid: true,
	checked: true,
};
