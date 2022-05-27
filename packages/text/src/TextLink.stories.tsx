import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';
import { TextLink } from './TextLink';

export default {
	title: 'foundations/Text/TextLink',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink {...args}>Internal link</TextLink>;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };
