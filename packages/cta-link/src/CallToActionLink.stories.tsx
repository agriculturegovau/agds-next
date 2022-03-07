import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { CallToActionLink } from './index';

export default {
	title: 'navigation/CallToActionLink',
	component: CallToActionLink,
} as ComponentMeta<typeof CallToActionLink>;

export const OnLight: ComponentStory<typeof CallToActionLink> = (args) => (
	<CallToActionLink {...args} />
);
OnLight.args = {
	children: 'Sign up',
	href: '#',
};

export const OnDark: ComponentStory<typeof CallToActionLink> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<CallToActionLink {...args} />
	</Box>
);
OnDark.args = {
	children: 'Sign up',
	href: '#',
};
