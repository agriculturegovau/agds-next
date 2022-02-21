import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { IconExamples } from './example';

export default {
	title: 'foundations/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
Basic.args = {
	icon: 'avatar',
	size: 4,
};

export const AllIcons: ComponentStory<typeof Icon> = () => <IconExamples />;
