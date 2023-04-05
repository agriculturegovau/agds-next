import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useSortAndFilter } from '../../components/TableFiltering/lib/useSortAndFilter';
import {
	generateTableCaption,
	useData,
} from '../../components/TableFiltering/lib/utils';
import { TableFilteringSmall } from '../../components/TableFiltering/TableFilteringSmall';

export default function TableFilteringSmallPatternPage() {
	const { filters, pagination, setFilters, setPagination, setSort, sort } =
		useSortAndFilter();

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
		<>
			<DocumentTitle title="Table Filtering - Small" />
			<AppLayout
				template={{
					name: 'Table Filtering - Small',
					slug: 'table-filtering-medium',
				}}
			>
				<TableFilteringSmall
					data={data}
					filters={filters}
					loading={loading}
					pagination={pagination}
					setFilters={setFilters}
					setPagination={setPagination}
					setSort={setSort}
					sort={sort}
					tableCaption={tableCaption}
					totalPages={totalPages}
					totalItems={totalItems}
				/>
			</AppLayout>
		</>
	);
}
