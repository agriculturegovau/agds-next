import { useEffect, useState } from 'react';
import { ExampleSmall } from './ExampleSmall';
import { ExampleDropDownMenu } from './ExampleDropDownMenu';
import { ExampleFilterBar } from './ExampleFilterBar';
import { ExampleSearch } from './ExampleSearch';
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
		filters,
		pagination,
		resetPagination,
		setFilters,
		setPagination,
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
		<ExampleSmall
			data={data}
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

export const DropDown = () => {
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
		<ExampleDropDownMenu
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
DropDown.storyName = 'Drop down filter menu';

export const FilterBar = () => {
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
		<ExampleFilterBar
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

export const Search = () => {
	const {
		filters,
		pagination,
		resetPagination,
		setFilters,
		setPagination,
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
		<ExampleSearch
			data={data}
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
