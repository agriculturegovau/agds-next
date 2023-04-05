import { Meta, StoryObj } from '@storybook/react';
import {
	TaskListContainer,
	TaskList,
	TaskListHeading,
	TaskListItemsContainer,
	TaskListItemLink,
	TaskListItemButton,
} from './index';

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

const meta: Meta<typeof TaskList> = {
	title: 'forms/TaskList',
	component: TaskList,
	args: {
		items: exampleLinkItems,
	},
};

export default meta;

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

type Story = StoryObj<typeof TaskList>;

export const Unordered: Story = {};

export const Ordered: Story = {
	args: {
		ordered: true,
	},
};

export const RecentlyCompleted: Story = {
	args: {
		items: exampleLinkItems.map((item, idx) => {
			if (idx !== 1) return item;
			return {
				...item,
				status: 'doneRecently',
			};
		}),
	},
};

export const Button: Story = {
	args: {
		items: exampleOrderedButtonItems,
	},
};

export const ModularLinks = () => (
	<TaskListContainer>
		<TaskListHeading stepsCompleted={1} totalSteps={5} />
		<TaskListItemsContainer>
			{exampleLinkItems.map(({ label, ...props }, index) => (
				<TaskListItemLink key={index} {...props}>
					{label}
				</TaskListItemLink>
			))}
		</TaskListItemsContainer>
	</TaskListContainer>
);

export const ModularButtons = () => (
	<TaskListContainer>
		<TaskListHeading stepsCompleted={2} totalSteps={5} />
		<TaskListItemsContainer>
			{exampleOrderedButtonItems.map(({ label, ...props }, index) => (
				<TaskListItemButton key={index} {...props}>
					{label}
				</TaskListItemButton>
			))}
		</TaskListItemsContainer>
	</TaskListContainer>
);
