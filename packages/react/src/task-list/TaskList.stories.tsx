import { Meta, StoryObj } from '@storybook/react';
import { TaskList, TaskListProps } from './index';

const meta: Meta<typeof TaskList> = {
	title: 'forms/TaskList',
	component: TaskList,
	args: {},
};

export default meta;

type Story = StoryObj<typeof TaskList>;

const exampleLinkItems: TaskListProps['items'] = [
	{
		href: '#',
		label: 'Check eligibility',
		message: 'Short description of the task',
		status: 'done',
	},
	{
		href: '#',
		label: 'Personal details',
		message: 'Short description of the task',
		status: 'doneRecently',
	},
	{
		href: '#',
		label: 'Business details',
		message: 'Short description of the task',
		status: 'doing',
	},
	{
		href: '#',
		label: 'Export',
		message: <em>This step is not required based on your selection criteria</em>,
		status: 'notRequired',
	},
	{
		href: '#',
		label: 'Review and submit',
		message: 'Not available until previous tasks are done',
		status: 'blocked',
	},
];

const exampleButtonItems: TaskListProps['items'] = exampleLinkItems
	.map((item) => ({ ...item, onClick: console.log }))
	.map((item) => {
		if ('href' in item) delete item.href;
		return item;
	});

export const Unordered: Story = {
	args: {
		items: exampleLinkItems,
	},
};

export const Ordered: Story = {
	args: {
		items: exampleLinkItems,
		ordered: true,
	},
};

export const Buttons: Story = {
	args: {
		items: exampleButtonItems,
	},
};

export const OrderedButtons: Story = {
	args: {
		items: exampleButtonItems,
		ordered: true,
	},
};
