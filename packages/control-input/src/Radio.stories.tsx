import React from 'react';
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
	checked: true,
};

export const LightAltRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="light" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
LightAltRadio.args = {
	children: 'Example',
	checked: true,
};

export const DarkRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="dark" background="body" padding={1}>
		<Template {...args} />
	</Box>
);
DarkRadio.args = {
	children: 'Example',
	checked: true,
};

export const DarkAltRadio: ComponentStory<typeof Radio> = (args) => (
	<Box palette="dark" background="bodyAlt" padding={1}>
		<Template {...args} />
	</Box>
);
DarkAltRadio.args = {
	children: 'Example',
	checked: true,
};

export const SmallRadio = Template.bind({});
SmallRadio.args = {
	size: 'sm',
	children: 'Small example',
	checked: true,
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
	children: 'Disabled',
	disabled: true,
	checked: true,
};

export const InvalidRadio = Template.bind({});
InvalidRadio.args = {
	children: 'Invalid',
	invalid: true,
	checked: true,
};

export const ValidRadio = Template.bind({});
ValidRadio.args = {
	children: 'Valid',
	valid: true,
	checked: true,
};
