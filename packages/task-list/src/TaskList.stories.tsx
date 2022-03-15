import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	TaskListContainer,
	TaskList,
	TaskListItemLink,
	TaskListItemButton,
} from './index';

export default {
	title: 'forms/TaskList',
	component: TaskList,
	subcomponents: {
		TaskListContainer,
		TaskListItemLink,
		TaskListItemButton,
	},
} as ComponentMeta<typeof TaskList>;

const exampleLinkItems = [
	{
		href: '#',
		label: 'Introduction',
		message: 'This task has been complete',
		status: 'doing' as const,
	},
	{
		href: '#',
		label: 'Business Contacts',
		message: 'This task has been complete',
		status: 'todo' as const,
	},
	{
		href: '#',
		label: 'Case Studies',
		message: 'This task has been complete',
		status: 'done' as const,
	},
];

const exampleButtonItems = [
	{ onClick: console.log, label: 'Introduction', status: 'doing' as const },
	{ onClick: console.log, label: 'Business Contacts', status: 'todo' as const },
	{ onClick: console.log, label: 'Case Studies', status: 'done' as const },
];

export const OnLight: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
OnLight.args = {
	items: exampleLinkItems,
};

export const OnDark: ComponentStory<typeof TaskList> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<TaskList {...args} />
	</Box>
);
OnDark.args = {
	items: exampleLinkItems,
};

export const Button: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Button.args = {
	items: exampleButtonItems,
};

export const ModularLinks = () => (
	<TaskListContainer>
		{exampleLinkItems.map(({ label, ...props }, index) => (
			<TaskListItemLink key={index} {...props}>
				{label}
			</TaskListItemLink>
		))}
	</TaskListContainer>
);

export const ModularButtons = () => (
	<TaskListContainer>
		{exampleButtonItems.map(({ label, ...props }, index) => (
			<TaskListItemButton key={index} {...props}>
				{label}
			</TaskListItemButton>
		))}
	</TaskListContainer>
);
