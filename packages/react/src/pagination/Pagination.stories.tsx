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

export const withRangeText: Story = {
	name: 'with range text',
	args: {
		currentPage: 5,
		itemRangeText: generatePaginationRangeText({
			firstItem: 1,
			lastItem: 10,
			totalItems: 300,
			singularNoun: 'certificate',
			pluralNoun: 'certificates',
		}),
	},
};

export const itemsPerPage: Story = {
	args: {
		currentPage: 1,
		itemsPerPage: 10,
	},
	render: function Render(args) {
		const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 10);
		const itemRangeText = generatePaginationRangeText({
			firstItem: (args.currentPage - 1) * itemsPerPage + 1, // (5 - 1) * 10 + 1 = 41
			lastItem: args.currentPage * itemsPerPage, // 5 * 10 = 50
			totalItems: 300,
			singularNoun: 'certificate',
			pluralNoun: 'certificates',
		});

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
