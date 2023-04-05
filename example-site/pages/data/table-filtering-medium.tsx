import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useSortAndFilter } from '../../components/TableFiltering/lib/useSortAndFilter';
import {
	generateTableCaption,
	useData,
} from '../../components/TableFiltering/lib/utils';
import { TableFilteringMedium } from '../../components/TableFiltering/TableFilteringMedium';

export default function TableFilteringMediumPatternPage() {
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter();

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
			<DocumentTitle title="Table Filtering - Medium" />
			<AppLayout
				template={{
					name: 'Table Filtering - Medium',
					slug: 'table-filtering-medium',
				}}
			>
				<TableFilteringMedium
					data={data}
					filters={filters}
					loading={loading}
					pagination={pagination}
					resetFilters={resetFilters}
					setFilters={setFilters}
					removeFilter={removeFilter}
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
