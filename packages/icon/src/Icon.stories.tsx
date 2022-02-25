import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { IconExamples } from './example';
import { AlignJustifyIcon } from './iconss/alert';
import { ChevronLeftIcon } from './iconss/ChevronLeftIcon';

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

export const Align = () => <AlignJustifyIcon size={6} />;
export const AlignSmall = () => <AlignJustifyIcon size={2} />;
export const ChevronsLeft = () => (
	<>
		<ChevronLeftIcon size={4} />
		<ChevronLeftIcon size={1} />
	</>
);
