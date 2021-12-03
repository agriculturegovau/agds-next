import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'package/box',
	component: Box,
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

/**
 * The Box with a Light theme applied
 */
export const LightBox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightBox.args = {
	children: 'A light box',
	theme: 'light',
	padding: 6,
	border: true,
	rounded: true,
};

export const DarkBox = Template.bind({});

DarkBox.args = {
	children: 'Dark box',
	theme: 'dark',
	background: 'page',
	color: 'text',
	paddingX: 6,
	paddingY: 6,
	border: true,
	rounded: true,
};
