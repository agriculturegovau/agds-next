import { TableFilteringLarge } from './TableFilteringLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { SortAndFilterProvider } from './lib/SortAndFilterContext';

export const TableFilteringLargeExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;

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
		<SortAndFilterProvider value={sortAndFilter}>
			<TableFilteringLarge
				data={data}
				loading={loading}
				tableCaption={tableCaption}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</SortAndFilterProvider>
	);
};
