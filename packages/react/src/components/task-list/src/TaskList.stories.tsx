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

const exampleOrderedLinkItems = [
	{ href: '#', label: 'Check eligibility', status: 'done' as const },
	{ href: '#', label: 'Lorem ipsum dolor sit amet', status: 'done' as const },
	{ href: '#', label: 'Case Studies', status: 'doing' as const },
	{
		href: '#',
		label: 'Review and submit',
		message: 'Not available until previous tasks are done',
		status: 'todo' as const,
	},
];

const exampleUnorderedLinkItems = [
	{ href: '#', label: 'Check eligibility', status: 'done' as const },
	{ href: '#', label: 'Lorem ipsum dolor sit amet', status: 'done' as const },
	{ href: '#', label: 'Case Studies', status: 'doing' as const },
	{ href: '#', label: 'Review and submit', status: 'todo' as const },
];

const exampleOrderedButtonItems = [
	{
		onClick: console.log,
		label: 'Check eligibility',
		status: 'done' as const,
	},
	{
		onClick: console.log,
		label: 'Lorem ipsum dolor sit amet',
		status: 'done' as const,
	},
	{
		onClick: console.log,
		label: 'Case Studies',
		status: 'doing' as const,
	},
	{
		onClick: console.log,
		label: 'Review and submit',
		message: 'Not available until previous tasks are done',
		status: 'todo' as const,
	},
];

export const Basic: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Basic.args = {
	items: exampleOrderedLinkItems,
};

export const Unordered: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Unordered.args = {
	ordered: false,
	items: exampleUnorderedLinkItems,
};

export const Button: ComponentStory<typeof TaskList> = (args) => (
	<TaskList {...args} />
);
Button.args = {
	items: exampleOrderedButtonItems,
};

export const ModularLinks = () => (
	<TaskListContainer>
		{exampleOrderedLinkItems.map(({ label, ...props }, index) => (
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
