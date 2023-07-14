import { Meta } from '@storybook/react';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { ListFiltering } from './ListFiltering';

const ListFilteringExample = () => {
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter({});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<ListFiltering
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			setFilters={setFilters}
			removeFilter={removeFilter}
			setPagination={setPagination}
			setSort={setSort}
			sort={sort}
			tableCaption={tableCaption}
			totalPages={totalPages}
			totalItems={totalItems}
		/>
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
