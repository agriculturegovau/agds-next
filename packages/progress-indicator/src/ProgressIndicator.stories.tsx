import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicator,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemButton,
} from './index';
import {
	ProgressIndicatorList,
	ProgressIndicatorListItem,
} from './ProgressIndicatorList';
import { ButtonLink } from '@ag.ds-next/button';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
	subcomponents: {
		ProgressIndicatorListItem,
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
	<ProgressIndicatorList>
		{exampleLinkItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorListItem key={index}>
				<ProgressIndicatorItemLink {...props}>
					{label}
				</ProgressIndicatorItemLink>
			</ProgressIndicatorListItem>
		))}
	</ProgressIndicatorList>
);

export const ModularButtons = () => (
	<ProgressIndicatorList>
		{exampleButtonItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorListItem key={index}>
				<ProgressIndicatorItemButton {...props}>
					{label}
				</ProgressIndicatorItemButton>
			</ProgressIndicatorListItem>
		))}
	</ProgressIndicatorList>
);

export const TaskList = () => (
	<ProgressIndicatorList>
		{exampleButtonItems.map(({ label, ...props }, index) => (
			<ProgressIndicatorListItem key={index}>
				<ProgressIndicatorItemButton {...props}>
					{label}
					<Text color="muted">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text>
				</ProgressIndicatorItemButton>
				<ButtonLink href="#" variant="secondary" size="sm">
					Example
				</ButtonLink>
			</ProgressIndicatorListItem>
		))}
	</ProgressIndicatorList>
);
