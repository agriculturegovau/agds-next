import { ComponentStory, ComponentMeta } from '@storybook/react';
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
	{ href: '#', label: 'Check eligibility', status: 'done' as const },
	{ href: '#', label: 'Personal details', status: 'doing' as const },
	{ href: '#', label: 'Business details', status: 'todo' as const },
	{ href: '#', label: 'Export', status: 'todo' as const },
	{
		href: '#',
		label: 'Review and submit',
		message: 'Not available until previous tasks are done',
		status: 'blocked' as const,
	},
];

const exampleOrderedButtonItems = [
	{
		onClick: console.log,
		label: 'Check eligibility',
		status: 'done' as const,
	},
	{
		onClick: console.log,
		label: 'Personal details',
		status: 'done' as const,
	},
	{
		onClick: console.log,
		label: 'Business details',
		status: 'doing' as const,
	},
	{
		onClick: console.log,
		label: 'Export',
		status: 'todo' as const,
	},
	{
		onClick: console.log,
		label: 'Review and submit',
		message: 'Not available until previous tasks are done',
		status: 'blocked' as const,
	},
];

export const Unordered: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Unordered.args = {
	ordered: false,
	items: exampleLinkItems,
};

export const Ordered: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Ordered.args = {
	ordered: true,
	items: exampleLinkItems,
};

export const Button: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Button.args = {
	ordered: false,
	items: exampleOrderedButtonItems,
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
		{exampleOrderedButtonItems.map(({ label, ...props }, index) => (
			<TaskListItemButton key={index} {...props}>
				{label}
			</TaskListItemButton>
		))}
	</TaskListContainer>
);
