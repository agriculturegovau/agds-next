import { Meta } from '@storybook/react';
import { TableFilteringSmallExample } from './TableFilteringSmallExample';
import { TableFilteringMediumExample } from './TableFilteringMediumExample';
import { TableFilteringLargeExample } from './TableFilteringLargeExample';

const meta: Meta = {
	title: 'Patterns/Data filtering and sorting',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Small = {
	name: 'Tables (Small)',
	render: TableFilteringSmallExample,
};

export const Medium = {
	name: 'Tables (Medium)',
	render: TableFilteringMediumExample,
};

export const Large = {
	name: 'Tables (Large)',
	render: TableFilteringLargeExample,
};
