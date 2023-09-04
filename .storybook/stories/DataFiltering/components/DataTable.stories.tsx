import { DataProvider, SortAndFilterContext } from '../lib/contexts';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { useData } from '../lib/utils';
import { DataTable } from './DataTable';

export default {
	title: 'content/Table',
};

export const Application = () => {
	const sortAndFilter = useSortAndFilter({
		itemsPerPage: 10,
	});
	const { filters, pagination, sort } = sortAndFilter;

	const { data, totalPages, totalItems, loading } = useData({
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
