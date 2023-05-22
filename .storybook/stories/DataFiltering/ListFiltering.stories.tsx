import { Meta } from '@storybook/react';
import { ListFilteringLargeExample } from './ListFilteringLargeExample';

const meta: Meta = {
	title: 'Patterns/Data filtering and sorting',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Large = {
	name: 'List (Large)',
	render: ListFilteringLargeExample,
};
