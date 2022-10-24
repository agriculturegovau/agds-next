import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from './TextLink';

export default {
	title: 'Components/TextLink',
	component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };
