import { Meta } from '@storybook/react';
import { ListFilteringLargeExample } from './ListFilteringLargeExample';

const meta: Meta = {
	title: 'Patterns/Data filtering and sorting',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const List = {
	name: 'List',
	render: ListFilteringLargeExample,
	args: {
		showsTags: false,
	},
};

export const WithTags = {
	name: 'List (with tags)',
	render: ListFilteringLargeExample,
	args: {
		showsTags: true,
	},
};
