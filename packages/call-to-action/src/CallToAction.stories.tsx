import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';
import { CallToAction } from './index';

export default {
	title: 'content/CallToAction',
	component: CallToAction,
} as ComponentMeta<typeof CallToAction>;

export const OnLight: ComponentStory<typeof CallToAction> = (args) => (
	<CallToAction {...args} />
);
OnLight.args = {
	children: 'Sign up',
	href: '#',
};

export const OnDark: ComponentStory<typeof CallToAction> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<CallToAction {...args} />
	</Box>
);
OnDark.args = {
	children: 'Sign up',
	href: '#',
};

export const Button: ComponentStory<typeof CallToAction> = (args) => (
	<CallToAction as={BaseButton} {...args} />
);
Button.args = {
	children: 'Sign up',
	onClick: console.log,
};
