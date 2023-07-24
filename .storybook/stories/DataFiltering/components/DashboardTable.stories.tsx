import { SortAndFilterContext } from '../lib/contexts';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { generateTableCaption, useData } from '../lib/utils';
import { DashboardTable } from './DashboardTable';

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

	const tableCaption = generateTableCaption({
		loading,
		totalItems: 10,
		pagination,
	});

	return (
		<SortAndFilterContext.Provider value={sortAndFilter}>
			<DashboardTable
				{...{
					totalPages,
					totalItems,
					loading,
					data,
					caption: tableCaption,
				}}
			/>
		</SortAndFilterContext.Provider>
	);
};
