import { Meta, StoryObj } from '@storybook/react';
import { CallToActionLink, CallToActionButton } from './index';

export default {
	title: 'navigation/CallToAction',
	component: CallToActionLink,
	subcomponents: { CallToActionButton },
} as Meta<typeof CallToActionLink>;

export const Basic: StoryObj<typeof CallToActionLink> = {
	args: {
		children: 'Sign up',
		href: '#',
	},
};

export const Button: StoryObj<typeof CallToActionButton> = {
	render: (args) => <CallToActionButton {...args} />,
	args: {
		children: 'Sign up',
		onClick: console.log,
	},
};
