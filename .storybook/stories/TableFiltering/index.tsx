import { useEffect, useState } from 'react';
import { ExampleSmall } from './ExampleSmall';
import { ExampleMedium } from './ExampleMedium';
import { getData, GetDataParams, GetDataPagination } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';
import { ExampleLarge } from './ExampleLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';

export default {
	title: 'Patterns/Filtering',
};

function useData({ sort, filters, pagination }: GetDataParams) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<BusinessForAudit[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		setLoading(true);
		getData({ sort, filters, pagination }).then((response) => {
			setData(response.data);
			setTotalPages(response.totalPages);
			setTotalItems(response.totalItems);
			setLoading(false);
		});
	}, [sort, filters, pagination]);

	return { loading, data, totalPages, totalItems };
}

const genetateTableCaption = ({
	loading,
	totalItems,
}: {
	pagination: GetDataPagination;
	loading: boolean;
	totalItems: number;
}) => {
	return `Audits ${loading ? '' : `(${totalItems} items)`}`;
};

export const Small = () => {
	const {
		sort,
		filters,
		pagination,
		resetPagination,
		setSort,
		setFilters,
		setPagination,
	} = useSortAndFilter();

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<ExampleSmall
			sort={sort}
			setSort={setSort}
			filters={filters}
			setFilters={setFilters}
			pagination={pagination}
			setPagination={setPagination}
			resetPagination={resetPagination}
			totalPages={totalPages}
			loading={loading}
			data={data}
			tableCaption={tableCaption}
		/>
	);
};

export const Medium = () => {
	const {
		filters,
		pagination,
		resetFilters,
		resetPagination,
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

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<ExampleMedium
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			resetPagination={resetPagination}
			setFilters={setFilters}
			removeFilter={removeFilter}
			setPagination={setPagination}
			setSort={setSort}
			sort={sort}
			tableCaption={tableCaption}
			totalPages={totalPages}
		/>
	);
};

export const Large = () => {
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		resetPagination,
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

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<ExampleLarge
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			removeFilter={removeFilter}
			resetPagination={resetPagination}
			setFilters={setFilters}
			setPagination={setPagination}
			setSort={setSort}
			sort={sort}
			tableCaption={tableCaption}
			totalPages={totalPages}
		/>
	);
};
