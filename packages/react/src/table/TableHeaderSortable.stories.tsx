import { Meta, StoryObj } from '@storybook/react';
import { TableHeaderSortable } from './TableHeaderSortable';

const meta: Meta<typeof TableHeaderSortable> = {
	title: 'Content/Table/TableHeaderSortable',
	component: TableHeaderSortable,
	args: {
		children: 'Name',
	},
};

export default meta;

type Story = StoryObj<typeof TableHeaderSortable>;

export const Basic: Story = {
	name: 'Not active sort',
};

export const Ascending: Story = {
	name: 'Ascending sort',
	args: {
		sort: 'ASC',
	},
};

export const Descending: Story = {
	name: 'Descending sort',
	args: {
		sort: 'DESC',
	},
};
