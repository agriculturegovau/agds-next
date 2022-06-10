import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseButton } from '@ag.ds-next/button';
import { TextLink } from './TextLink';

export default {
	title: 'navigation/TextLink',
	component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	return <TextLink {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };

export const AsButton = Template.bind({});
AsButton.args = {
	as: BaseButton,
	children: 'Button element',
	onClick: console.log,
};
