import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { generatePaginationRangeText } from './utils';

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

export const WithRangeText: Story = {
	args: {
		currentPage: 5,
		itemRangeText: generatePaginationRangeText({
			totalItems: 100,
			currentPage: 5,
			itemsPerPage: 10,
			singularNoun: 'certificate',
			pluralNoun: 'certificates',
		}),
	},
};

export const ItemsPerPage: Story = {
	args: {
		currentPage: 1,
		itemsPerPage: 10,
	},
	render: function Render(args) {
		const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 10);
		return (
			<Pagination
				{...args}
				itemRangeText={generatePaginationRangeText({
					totalItems: 100,
					currentPage: args.currentPage ?? 1,
					itemsPerPage: args.itemsPerPage ?? 10,
					singularNoun: 'certificate',
					pluralNoun: 'certificates',
				})}
				itemsPerPage={itemsPerPage}
				onItemsPerPageChange={(val) => setItemsPerPage(val)}
			/>
		);
	},
};
