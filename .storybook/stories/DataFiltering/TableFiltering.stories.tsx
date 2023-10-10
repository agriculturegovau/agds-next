import { Meta } from '@storybook/react';
import { TableFilteringLarge } from './TableFilteringLarge';
import { TableFilteringSmall } from './TableFilteringSmall';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useFetchData } from './lib/useFetchData';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

const args = { throwError: false };

type StoryArgs = typeof args;

const meta: Meta = {
	title: 'Patterns/Tables',
	parameters: {
		layout: 'fullscreen',
	},
	args: args,
	argTypes: {
		throwError: {
			control: {
				type: 'boolean',
			},
		},
	},
};

export default meta;

export const FilterSmall = {
	name: 'Filter and sort (Small)',
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<TableFilteringSmall />
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const FilterMedium = {
	name: 'Filter and sort (Medium)',
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<TableFilteringMedium />
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const FilterLarge = {
	name: 'Filter and sort (Large)',
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<TableFilteringLarge />
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
