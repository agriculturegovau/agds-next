import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

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
			<DataProvider
				value={{
					data: data,
					loading: loading,
					totalPages: totalPages,
					totalItems: totalItems,
				}}
			>
				<TableFilteringSmall tableCaption={tableCaption} />
			</DataProvider>
		</SortAndFilterProvider>
	);
};
