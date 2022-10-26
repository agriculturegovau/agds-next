import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../box';
import { PaginationButtons } from './PaginationButtons';

export default {
	title: 'navigation/Pagination/PaginationButtons',
	component: PaginationButtons,
} as ComponentMeta<typeof PaginationButtons>;

const Template: ComponentStory<typeof PaginationButtons> = (props) => {
	const [currentPage, setCurrentPage] = useState(5);
	return (
		<PaginationButtons
			{...props}
			currentPage={currentPage}
			onChange={setCurrentPage}
		/>
	);
};

export const OnLight: ComponentStory<typeof PaginationButtons> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	totalPages: 10,
};

export const OnDark: ComponentStory<typeof PaginationButtons> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	totalPages: 10,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
	totalPages: 300,
};

export const CustomLimit = Template.bind({});
CustomLimit.args = {
	windowLimit: 5,
	totalPages: 300,
};
