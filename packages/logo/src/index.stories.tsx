import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { AWELogo } from './index';

export default {
	title: 'layout/AWELogo',
	component: AWELogo,
	// subcomponents: [AWELogoContainer],
} as ComponentMeta<typeof AWELogo>;

export const Light: ComponentStory<typeof AWELogo> = (args) => (
	<AWELogo {...args} />
);
Light.args = {
	theme: 'light',
	maxWidth: 600,
	padding: 2,
};

export const Dark: ComponentStory<typeof AWELogo> = (args) => (
	<AWELogo {...args} />
);
Dark.args = {
	theme: 'dark',
	background: 'page',
	maxWidth: 600,
	padding: 2,
};
