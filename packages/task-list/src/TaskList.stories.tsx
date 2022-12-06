import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	TaskListContainer,
	TaskList,
	TaskListHeading,
	TaskListItemsContainer,
	TaskListItemLink,
	TaskListItemButton,
} from './index';

export default {
	title: 'forms/TaskList',
	component: TaskList,
	subcomponents: {
		TaskListContainer,
		TaskListHeading,
		TaskListItemsContainer,
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

const Template: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);

export const Unordered = Template.bind({});
Unordered.args = {
	items: exampleLinkItems,
};

export const Ordered = Template.bind({});
Ordered.args = {
	ordered: true,
	items: exampleLinkItems,
};

export const RecentlyCompleted = Template.bind({});
RecentlyCompleted.args = {
	items: exampleLinkItems.map((item, idx) => {
		if (idx !== 1) return item;
		return {
			...item,
			status: 'doneRecently',
		};
	}),
};

export const Button = Template.bind({});
Button.args = {
	items: exampleOrderedButtonItems,
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
