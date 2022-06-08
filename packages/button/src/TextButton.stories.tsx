import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { TextButton } from './TextButton';

export default {
	title: 'forms/Button/TextButton',
	component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => {
	return <TextButton {...args} />;
};

export const OnLight = Template.bind({});
OnLight.args = {
	children: 'Button Link',
};

export const OnDark: ComponentStory<typeof TextButton> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	children: 'Button Link',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Button Link',
	disabled: true,
};
