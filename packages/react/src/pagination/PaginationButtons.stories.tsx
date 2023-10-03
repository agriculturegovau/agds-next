import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box';
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

export const Basic: Story = {};

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

export const OnLight: Story = {
	render: (args) => <Template {...args} />,
};

export const OnDark: Story = {
	render: (args) => (
		<Box palette="dark" background="body" padding={1.5}>
			<Template {...args} />
		</Box>
	),
};

export const ManyPages: Story = {
	args: {
		totalPages: 300,
	},
};

export const CustomLimit: Story = {
	args: {
		windowLimit: 5,
		totalPages: 300,
	},
};
