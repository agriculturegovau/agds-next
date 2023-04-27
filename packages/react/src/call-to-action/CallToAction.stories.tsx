import { StoryObj, Meta } from '@storybook/react';
import { CallToActionLink, CallToActionButton } from './index';

const meta: Meta<typeof CallToActionLink> = {
	title: 'navigation/CallToAction',
	component: CallToActionLink,
};

export default meta;

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
