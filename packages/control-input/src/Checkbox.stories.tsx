import React, { useState } from 'react';
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
};

export const LightAltCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="light" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
LightAltCheckbox.args = {
	children: 'Example',
};

export const DarkCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="dark" background="body" padding={1}>
		<Template {...args} />
	</Box>
);
DarkCheckbox.args = {
	children: 'Example',
};

export const DarkAltCheckbox: ComponentStory<typeof Checkbox> = (args) => (
	<Box palette="dark" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
DarkAltCheckbox.args = {
	children: 'Example',
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
	size: 'sm',
	children: 'Small example',
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
	children: 'Disabled',
};

export const InvalidCheckbox = Template.bind({});
InvalidCheckbox.args = {
	children: 'Invalid',
	invalid: true,
};

export const ValidCheckbox = Template.bind({});
ValidCheckbox.args = {
	children: 'Valid',
	valid: true,
};

export const ControlledCheckbox = () => {
	const [checked, setChecked] = useState(false);
	return (
		<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
			{checked ? 'Checked' : 'Unchecked'}
		</Checkbox>
	);
};
