import { ExampleSmall } from './ExampleSmall';
import { ExampleMedium } from './ExampleMedium';
import { ExampleLarge } from './ExampleLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { genetateTableCaption, useData } from './lib/utils';

export default {
	title: 'Patterns/Filtering',
};

export const Small = () => {
	const {
		sort,
		filters,
		pagination,
		resetPagination,
		setSort,
		setFilters,
		setPagination,
	} = useSortAndFilter();

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<ExampleSmall
			sort={sort}
			setSort={setSort}
			filters={filters}
			setFilters={setFilters}
			pagination={pagination}
			setPagination={setPagination}
			resetPagination={resetPagination}
			totalPages={totalPages}
			loading={loading}
			data={data}
			tableCaption={tableCaption}
			totalItems={totalItems}
		/>
	);
};

export const Medium = () => {
	const {
		filters,
		pagination,
		resetFilters,
		resetPagination,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter();

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<ExampleMedium
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			resetPagination={resetPagination}
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

export const Large = () => {
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		resetPagination,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter();

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<ExampleLarge
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			removeFilter={removeFilter}
			resetPagination={resetPagination}
			setFilters={setFilters}
			setPagination={setPagination}
			setSort={setSort}
			sort={sort}
			tableCaption={tableCaption}
			totalPages={totalPages}
			totalItems={totalItems}
		/>
	);
};
