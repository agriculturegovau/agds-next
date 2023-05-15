import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';

export const TableFilteringSmallExample = () => {
	const { sort, filters, pagination, setSort, setFilters, setPagination } =
		useSortAndFilter();

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
		<TableFilteringSmall
			sort={sort}
			setSort={setSort}
			filters={filters}
			setFilters={setFilters}
			pagination={pagination}
			setPagination={setPagination}
			totalPages={totalPages}
			loading={loading}
			data={data}
			tableCaption={tableCaption}
			totalItems={totalItems}
		/>
	);
};
