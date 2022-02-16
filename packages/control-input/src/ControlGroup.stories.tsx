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
			<Checkbox>Music</Checkbox>
			<Checkbox>Art</Checkbox>
			<Checkbox checked disabled>
				Cooking
			</Checkbox>
			<Checkbox disabled>Reading</Checkbox>
		</ControlGroup>
		<ControlGroup {...args}>
			<Radio checked>Coding</Radio>
			<Radio>Music</Radio>
			<Radio>Art</Radio>
			<Radio checked disabled>
				Cooking
			</Radio>
			<Radio disabled>Reading</Radio>
		</ControlGroup>
	</Stack>
);

export const LightControlGroup = Template.bind({});
LightControlGroup.args = {
	title: 'Choose your interests',
};

export const DarkControlGroup: ComponentStory<typeof ControlGroup> = (args) => (
	<Box background="body" padding={1} dark>
		<Template {...args} />
	</Box>
);
DarkControlGroup.args = {
	title: 'Choose your interests',
};

export const BloxControlGroup = Template.bind({});
BloxControlGroup.args = {
	title: 'Choose your interests',
	block: true,
};
