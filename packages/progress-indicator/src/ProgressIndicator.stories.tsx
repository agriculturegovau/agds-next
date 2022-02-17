import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicatorContainer,
	ProgressIndicator,
	ProgressIndicatorItem,
} from './index';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
} as ComponentMeta<typeof ProgressIndicator>;

const exampleItems = [
	{ href: '#', label: 'Introduction', status: 'doing' as const },
	{ href: '#', label: 'Business Contacts', status: 'todo' as const },
	{ href: '#', label: 'Case Studies', status: 'done' as const },
];

const Template = () => <ProgressIndicator items={exampleItems} />;

export const ProgressIndicatorLight = () => (
	<Box palette="light" background="body" padding={1}>
		<Template />
	</Box>
);

export const ProgressIndicatorLightAlt = () => (
	<Box palette="light" background="bodyAlt" padding={1}>
		<Template />
	</Box>
);

export const ProgressIndicatorDark = () => (
	<Box palette="dark" background="body" padding={1}>
		<Template />
	</Box>
);

export const ProgressIndicatorDarkAlt = () => (
	<Box palette="dark" background="bodyAlt" padding={1}>
		<Template />
	</Box>
);

export const Modular = () => (
	<ProgressIndicatorContainer>
		{exampleItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorItem key={index} {...props}>
				{label}
			</ProgressIndicatorItem>
		))}
	</ProgressIndicatorContainer>
);
