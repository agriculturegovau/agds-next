import { Meta, StoryObj } from '@storybook/react';
import { FilterSidebar } from '@ag.ds-next/react/filter-sidebar';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { ListFiltering } from './ListFiltering';

const meta: Meta<typeof FilterSidebar> = {
	title: 'Layout/FilterSidebar',
	component: FilterSidebar,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

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

export const Full: StoryObj<typeof FilterSidebar> = {
	name: 'Full example',
	render: ListFilteringExample,
};
