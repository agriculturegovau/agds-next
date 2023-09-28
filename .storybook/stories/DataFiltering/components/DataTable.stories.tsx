import { DataProvider, SortAndFilterContext } from '../lib/contexts';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { useFetchData } from '../lib/useFetchData';
import { DataTable } from './DataTable';

export default {
	title: 'content/Table',
};

export const LoadingAndSort = () => {
	const sortAndFilter = useSortAndFilter({
		itemsPerPage: 10,
	});
	const { filters, pagination, sort } = sortAndFilter;

	const { data, totalPages, totalItems, loading } = useFetchData({
		filters,
		pagination,
		sort,
	});

	return (
		<SortAndFilterContext.Provider value={sortAndFilter}>
			<DataProvider
				value={{
					data: data,
					loading: loading,
					totalPages: totalPages,
					totalItems: totalItems,
				}}
			>
				<DataTable />
			</DataProvider>
		</SortAndFilterContext.Provider>
	);
};
