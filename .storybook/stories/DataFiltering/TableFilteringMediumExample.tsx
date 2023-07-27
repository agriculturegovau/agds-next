import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

export const TableFilteringMediumExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<TableFilteringMedium />
			</DataProvider>
		</SortAndFilterProvider>
	);
};
