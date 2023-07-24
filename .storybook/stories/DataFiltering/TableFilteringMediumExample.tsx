import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { SortAndFilterProvider } from './lib/SortAndFilterContext';

export const TableFilteringMediumExample = () => {
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
			<TableFilteringMedium
				data={data}
				loading={loading}
				tableCaption={tableCaption}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</SortAndFilterProvider>
	);
};
