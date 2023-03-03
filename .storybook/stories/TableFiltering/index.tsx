import { useEffect, useState } from 'react';
import { ExampleSmall } from './ExampleSmall';
import { ExampleMedium } from './ExampleMedium';
import {
	getData,
	GetDataParams,
	GetDataFilters,
	GetDataPagination,
	GetDataSort,
} from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';
import { ExampleLarge } from './ExampleLarge';

export default {
	title: 'Examples/Filtering',
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

const useSortAndFilter = (args?: { filters?: Partial<GetDataFilters> }) => {
	const [pagination, setPagination] = useState<GetDataPagination>({
		page: 1,
		perPage: 10,
	});
	const [sort, setSort] = useState<GetDataSort>({
		field: 'businessName',
		order: 'ASC',
	});
	const [filters, setFilters] = useState<GetDataFilters>({
		assignee: undefined,
		businessName: undefined,
		state: undefined,
		status: undefined,
		requestDate: {
			from: undefined,
			to: undefined,
		},
		...args?.filters,
	});

	const resetPagination = () => setPagination({ ...pagination, page: 1 });
	const resetFilters = () =>
		setFilters({
			assignee: undefined,
			businessName: undefined,
			state: undefined,
			status: undefined,
			requestDate: {
				from: undefined,
				to: undefined,
			},
		});

	return {
		filters,
		pagination,
		resetFilters,
		resetPagination,
		setFilters,
		setPagination,
		setSort,
		sort,
	};
};

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
			data={data}
			sort={sort}
			setSort={setSort}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetPagination={resetPagination}
			setFilters={setFilters}
			setPagination={setPagination}
			tableCaption={tableCaption}
			totalPages={totalPages}
		/>
	);
};

export const Medium = () => {
	const {
		filters,
		pagination,
		resetFilters,
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
		<ExampleMedium
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
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

export const Large = () => {
	const {
		filters,
		pagination,
		resetFilters,
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
