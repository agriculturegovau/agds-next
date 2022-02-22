import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicatorContainer,
	ProgressIndicator,
	ProgressIndicatorItem,
} from './index';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
	subcomponents: { ProgressIndicatorContainer, ProgressIndicatorItem },
} as ComponentMeta<typeof ProgressIndicator>;

const exampleItems = [
	{ href: '#', label: 'Introduction', status: 'doing' as const },
	{ href: '#', label: 'Business Contacts', status: 'todo' as const },
	{ href: '#', label: 'Case Studies', status: 'done' as const },
];

export const OnLight: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
OnLight.args = {
	items: exampleItems,
};

export const OnDark: ComponentStory<typeof ProgressIndicator> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<ProgressIndicator {...args} />
	</Box>
);
OnDark.args = {
	items: exampleItems,
};

export const Modular = () => (
	<ProgressIndicatorContainer>
		{exampleItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorItem key={index} {...props}>
				{label}
			</ProgressIndicatorItem>
		))}
	</ProgressIndicatorContainer>
);
