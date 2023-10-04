import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

export const itemRangeText: Story = {
	args: {
		currentPage: 5,
		itemRangeText: 'Showing 1-10 of 300 items',
	},
};

export const itemsPerPage: Story = {
	args: {
		currentPage: 5,
		itemsPerPage: 10,
	},
	render: function Render(args) {
		const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);
		const itemRangeText = `Showing 1-${itemsPerPage} of 300 items`;
		return (
			<Pagination
				{...args}
				itemsPerPage={itemsPerPage}
				onChangeItemsPerPage={(val) => setItemsPerPage(val)}
				itemRangeText={itemRangeText}
			/>
		);
	},
};
