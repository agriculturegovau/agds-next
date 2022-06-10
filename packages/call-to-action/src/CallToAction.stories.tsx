import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseButton } from '@ag.ds-next/button';
import { CallToAction } from './CallToAction';

export default {
	title: 'navigation/CallToAction',
	component: CallToAction,
} as ComponentMeta<typeof CallToAction>;

const Template: ComponentStory<typeof CallToAction> = (args) => {
	return <CallToAction {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
	children: 'Sign up',
	href: '#',
};

export const AsButton = Template.bind({});
AsButton.args = {
	as: BaseButton,
	children: 'Button element',
	onClick: console.log,
};
