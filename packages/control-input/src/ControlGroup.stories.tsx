import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup } from './ControlGroup';

export default {
	title: 'forms/ControlGroup',
	component: ControlGroup,
} as ComponentMeta<typeof ControlGroup>;

const Template: ComponentStory<typeof ControlGroup> = (args) => (
	<Stack gap={2}>
		<ControlGroup {...args}>
			<Checkbox checked>Coding</Checkbox>
			<Checkbox checked={false}>Art</Checkbox>
			<Checkbox checked disabled>
				Cooking
			</Checkbox>
			<Checkbox checked={false} disabled>
				Reading
			</Checkbox>
		</ControlGroup>
		<ControlGroup {...args}>
			<Radio checked>Coding</Radio>
			<Radio checked={false}>Music</Radio>
			<Radio checked={false} disabled>
				Cooking
			</Radio>
			<Radio disabled>Reading</Radio>
		</ControlGroup>
	</Stack>
);

export const OnLight: ComponentStory<typeof ControlGroup> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	label: 'Choose your interests',
};

export const OnDark: ComponentStory<typeof ControlGroup> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	label: 'Choose your interests',
};

export const Block = Template.bind({});
Block.args = {
	label: 'Choose your interests',
	block: true,
};

export const Required = Template.bind({});
Required.args = {
	label: 'Choose your interests',
	block: true,
	required: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Choose your interests',
	hint: 'This is a hint',
	block: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Choose your interests',
	message: 'Please select an interest',
	required: true,
	block: true,
	invalid: true,
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
	label: 'Choose your interests',
	requiredLabel: false,
};
