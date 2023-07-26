import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

export const TableFilteringSmallExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<TableFilteringSmall />
			</DataProvider>
		</SortAndFilterProvider>
	);
};
