import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Pagination } from './Pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (props) => {
	return (
		<Pagination {...props} generateHref={(pageNumber) => `#${pageNumber}`} />
	);
};

export const OnLight: ComponentStory<typeof Pagination> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	currentPage: 5,
	totalPages: 10,
};

export const OnDark: ComponentStory<typeof Pagination> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	currentPage: 5,
	totalPages: 10,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
	currentPage: 5,
	totalPages: 300,
};

export const CustomLimit = Template.bind({});
CustomLimit.args = {
	windowLimit: 5,
	currentPage: 5,
	totalPages: 300,
};
