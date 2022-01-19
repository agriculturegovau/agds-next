import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { IconExamples } from './example';

export default {
	title: 'content/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args, context) => (
	<Icon {...args} />
);

export const IconDark = Template.bind({});
IconDark.args = {
	theme: 'dark',
	icon: 'arrowDown',
	size: 4,
};

export const IconDarkAlt = Template.bind({});
IconDarkAlt.args = {
	theme: 'darkAlt',
	icon: 'arrowDown',
	size: 4,
};

export const IconLight = Template.bind({});
IconLight.args = {
	theme: 'light',
	icon: 'arrowDown',
	size: 4,
};

export const IconLightAlt = Template.bind({});
IconLightAlt.args = {
	theme: 'lightAlt',
	icon: 'arrowDown',
	size: 4,
};

export const AllIcons: ComponentStory<typeof Icon> = (args) => (
	<IconExamples {...args} />
);
