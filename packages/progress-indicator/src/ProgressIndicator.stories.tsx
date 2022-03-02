import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicatorContainer,
	ProgressIndicator,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemButton,
} from './index';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
	subcomponents: {
		ProgressIndicatorContainer,
		ProgressIndicatorItemLink,
		ProgressIndicatorItemButton,
	},
} as ComponentMeta<typeof ProgressIndicator>;

const exampleLinkItems = [
	{ href: '#', label: 'Introduction', status: 'doing' as const },
	{ href: '#', label: 'Business Contacts', status: 'todo' as const },
	{ href: '#', label: 'Case Studies', status: 'done' as const },
];

const exampleButtonItems = [
	{ onClick: console.log, label: 'Introduction', status: 'doing' as const },
	{ onClick: console.log, label: 'Business Contacts', status: 'todo' as const },
	{ onClick: console.log, label: 'Case Studies', status: 'done' as const },
];

export const OnLight: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
OnLight.args = {
	items: exampleLinkItems,
};

export const OnDark: ComponentStory<typeof ProgressIndicator> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<ProgressIndicator {...args} />
	</Box>
);
OnDark.args = {
	items: exampleLinkItems,
};

export const Button: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
Button.args = {
	items: exampleButtonItems,
};

export const ModularLinks = () => (
	<ProgressIndicatorContainer>
		{exampleLinkItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorItemLink key={index} {...props}>
				{label}
			</ProgressIndicatorItemLink>
		))}
	</ProgressIndicatorContainer>
);

export const ModularButtons = () => (
	<ProgressIndicatorContainer>
		{exampleButtonItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorItemButton key={index} {...props}>
				{label}
			</ProgressIndicatorItemButton>
		))}
	</ProgressIndicatorContainer>
);
