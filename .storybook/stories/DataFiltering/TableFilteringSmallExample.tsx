import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { SortAndFilterProvider } from './lib/SortAndFilterContext';

export const TableFilteringSmallExample = () => {
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
			<TableFilteringSmall
				totalPages={totalPages}
				loading={loading}
				data={data}
				tableCaption={tableCaption}
				totalItems={totalItems}
			/>
		</SortAndFilterProvider>
	);
};
