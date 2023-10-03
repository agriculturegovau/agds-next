import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
	title: 'navigation/Pagination',
	component: Pagination,
	args: {
		currentPage: 5,
		totalPages: 10,
		generateHref: (pageNumber) => `#${pageNumber}`,
	},
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {};

export const ManyPages: Story = {
	args: {
		currentPage: 5,
		totalPages: 300,
	},
};

export const CustomLimit: Story = {
	args: {
		windowLimit: 5,
		currentPage: 5,
		totalPages: 300,
	},
};
