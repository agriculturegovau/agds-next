import { Meta } from '@storybook/react';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { ListFiltering } from './ListFiltering';

const ListFilteringExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<ListFiltering />
			</DataProvider>
		</SortAndFilterProvider>
	);
};

const meta: Meta = {
	title: 'Patterns/Data filtering and sorting',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const List = {
	name: 'List filtering',
	render: ListFilteringExample,
	args: {
		showsTags: false,
	},
};
