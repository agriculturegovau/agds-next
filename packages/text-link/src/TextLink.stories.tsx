import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from './TextLink';

export default {
	title: 'Navigation/TextLink',
	component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink {...args}>Internal link</TextLink>;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };

export const AsButton: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink as="button" onClick={console.log} {...args} />;
};
AsButton.args = { children: 'Button' };
