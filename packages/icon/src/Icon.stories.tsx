import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconExamples } from './example';
import { AlertIcon } from './icons/AlertIcon';

export default {
	title: 'foundations/Icon',
	component: AlertIcon,
} as ComponentMeta<typeof AlertIcon>;

export const Alert: ComponentStory<typeof AlertIcon> = (args) => (
	<AlertIcon {...args} />
);
Alert.args = {
	size: 4,
};

export const AllIcons: ComponentStory<typeof AlertIcon> = (args) => (
	<IconExamples {...args} />
);
AllIcons.args = {
	size: 2,
};
