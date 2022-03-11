import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconExamples } from './example';
import { AlertIcon } from './icons/AlertIcon';
import { iconColors } from './Icon';

export default {
	title: 'foundations/Icon',
	component: AlertIcon,
	argTypes: {
		color: {
			options: Object.keys(iconColors),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof AlertIcon>;

export const AllIcons: ComponentStory<typeof AlertIcon> = (args) => (
	<IconExamples {...args} />
);
AllIcons.args = {
	size: 'md',
	weight: 'regular',
};
