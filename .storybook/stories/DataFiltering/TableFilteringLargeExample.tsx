import { TableFilteringLarge } from './TableFilteringLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

export const TableFilteringLargeExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider
				value={{
					data: data,
					loading: loading,
					totalPages: totalPages,
					totalItems: totalItems,
				}}
			>
				<TableFilteringLarge />
			</DataProvider>
		</SortAndFilterProvider>
	);
};
