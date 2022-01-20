import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { IconExamples } from './example';

export default {
	title: 'content/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

export const Primary: ComponentStory<typeof Icon> = (args, context) => (
	<Icon {...args} />
);
Primary.args = {
	icon: 'avatar',
	size: 4,
};

export const AllIcons: ComponentStory<typeof Icon> = () => <IconExamples />;
