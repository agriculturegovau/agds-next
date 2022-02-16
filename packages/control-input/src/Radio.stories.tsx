import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Radio } from './Radio';

export default {
	title: 'forms/Radio',
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const LightRadio = Template.bind({});
LightRadio.args = {
	children: 'Example',
};

export const LightAltRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="light" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
LightAltRadio.args = {
	children: 'Example',
};

export const DarkRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="dark" background="body" padding={1}>
		<Template {...args} />
	</Box>
);
DarkRadio.args = {
	children: 'Example',
};

export const DarkAltRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="dark" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
DarkAltRadio.args = {
	children: 'Example',
};

export const SmallRadio = Template.bind({});
SmallRadio.args = {
	size: 'sm',
	children: 'Small example',
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
	children: 'Disabled',
};

export const InvalidRadio = Template.bind({});
InvalidRadio.args = {
	children: 'Invalid',
	invalid: true,
};

export const ValidRadio = Template.bind({});
ValidRadio.args = {
	children: 'Valid',
	valid: true,
};

export const ControlledRadio = () => {
	const [checked, setChecked] = useState(false);
	return (
		<Radio checked={checked} onChange={(e) => setChecked(e.target.checked)}>
			{checked ? 'Checked' : 'Unchecked'}
		</Radio>
	);
};
