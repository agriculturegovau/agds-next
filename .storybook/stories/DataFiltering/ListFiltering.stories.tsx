import { Meta } from '@storybook/react';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useFetchData } from './lib/useFetchData';
import { ListFiltering } from './ListFiltering';

const meta: Meta = {
	title: 'Patterns/Search results',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const List = {
	name: 'Card lists',
	render: function Render() {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({ filters, pagination, sort });

		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<ListFiltering />
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
