import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CallToActionLink, CallToActionButton } from './index';

export default {
	title: 'Components/CallToAction',
	component: CallToActionLink,
	subcomponents: { CallToActionButton },
} as ComponentMeta<typeof CallToActionLink>;

export const Basic: ComponentStory<typeof CallToActionLink> = (args) => (
	<CallToActionLink {...args} />
);
Basic.args = {
	children: 'Sign up',
	href: '#',
};

const Button: ComponentStory<typeof CallToActionButton> = (args) => (
	<CallToActionButton {...args} />
);
Button.args = {
	children: 'Sign up',
	onClick: console.log,
};
