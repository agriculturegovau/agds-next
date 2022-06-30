import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink, TextButton } from './TextLink';

export default {
	title: 'navigation/TextLink',
	subcomponents: { TextButton },
	component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };

export const Button: ComponentStory<typeof TextButton> = (args) => (
	<TextButton {...args} />
);
Button.args = {
	children: 'Button element',
	onClick: console.log,
};
