import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaginationButtons } from './PaginationButtons';
import { generatePaginationRangeText } from './utils';

const meta: Meta<typeof PaginationButtons> = {
	title: 'navigation/Pagination/PaginationButtons',
	component: PaginationButtons,
	args: {
		totalPages: 10,
	},
};

export default meta;

type Story = StoryObj<typeof PaginationButtons>;

const Template: StoryFn<typeof PaginationButtons> = (props) => {
	const [currentPage, setCurrentPage] = useState(5);
	return (
		<PaginationButtons
			{...props}
			currentPage={currentPage}
			onChange={setCurrentPage}
		/>
	);
};

export const Basic: Story = {
	render: (args) => <Template {...args} />,
};

export const ManyPages: Story = {
	render: (args) => <Template {...args} />,
	args: {
		totalPages: 300,
	},
};

export const CustomLimit: Story = {
	render: (args) => <Template {...args} />,
	args: {
		windowLimit: 5,
		totalPages: 300,
	},
};

export const ItemsPerPage: Story = {
	args: {
		currentPage: 1,
		itemsPerPage: 10,
	},
	render: function Render(args) {
		const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
		const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 10);
		const itemRangeText = generatePaginationRangeText({
			totalItems: 100,
			currentPage: args.currentPage ?? 1,
			itemsPerPage: args.itemsPerPage ?? 10,
		});
		return (
			<PaginationButtons
				{...args}
				currentPage={currentPage}
				itemRangeText={itemRangeText}
				itemsPerPage={itemsPerPage}
				onChange={setCurrentPage}
				onItemsPerPageChange={(val) => setItemsPerPage(val)}
			/>
		);
	},
};
