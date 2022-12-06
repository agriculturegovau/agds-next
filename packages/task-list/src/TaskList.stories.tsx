import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import {
	TaskListContainer,
	TaskList,
	TaskListHeading,
	TaskListItemLink,
	TaskListItemButton,
} from './index';

export default {
	title: 'forms/TaskList',
	component: TaskList,
	subcomponents: {
		TaskListContainer,
		TaskListHeading,
		TaskListItemLink,
		TaskListItemButton,
	},
} as ComponentMeta<typeof TaskList>;

const exampleLinkItems = [
	{
		href: '#',
		label: 'Check eligibility',
		message: 'Short description of the task',
		status: 'done' as const,
	},
	{
		href: '#',
		label: 'Personal details',
		message: 'Short description of the task',
		status: 'doing' as const,
	},
	{
		href: '#',
		label: 'Business details',
		message: 'Short description of the task',
		status: 'todo' as const,
	},
	{
		href: '#',
		label: 'Export',
		message: 'Short description of the task',
		status: 'todo' as const,
	},
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

export const RecentlyCompleted: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
RecentlyCompleted.args = {
	items: [
		exampleLinkItems[0],
		{
			...exampleLinkItems[0],
			label: 'My details',
			status: 'doneRecently' as const,
		},
		...exampleLinkItems.slice(1),
	],
};

export const Button: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Button.args = {
	ordered: false,
	items: exampleOrderedButtonItems,
};

export const ModularLinks = () => (
	<Stack gap={1.5}>
		<TaskListHeading stepsCompleted={1} totalSteps={5} />
		<TaskListContainer>
			{exampleLinkItems.map(({ label, ...props }, index) => (
				<TaskListItemLink key={index} {...props}>
					{label}
				</TaskListItemLink>
			))}
		</TaskListContainer>
	</Stack>
);

export const ModularButtons = () => (
	<Stack gap={1.5}>
		<TaskListHeading stepsCompleted={2} totalSteps={5} />
		<TaskListContainer>
			{exampleOrderedButtonItems.map(({ label, ...props }, index) => (
				<TaskListItemButton key={index} {...props}>
					{label}
				</TaskListItemButton>
			))}
		</TaskListContainer>
	</Stack>
);
