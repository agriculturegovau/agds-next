import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaginationButtons } from './PaginationButtons';

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
