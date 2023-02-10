import { useEffect, useState } from 'react';
import { ExampleBasic } from './ExampleBasic';
import { ExampleDropDownMenu } from './ExampleDropDownMenu';
import { ExamplePersistentFilters } from './ExamplePersistentFilters';
import {
	getData,
	GetDataParams,
	GetDataFilters,
	GetDataPagination,
	GetDataSort,
} from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

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

export const Basic = () => {
	const {
		filters,
		pagination,
		resetPagination,
		setFilters,
		setPagination,
		sort,
	} = useSortAndFilter({
		filters: {
			status: 'notBooked',
		},
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	return (
		<ExampleBasic
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetPagination={resetPagination}
			setFilters={setFilters}
			setPagination={setPagination}
			totalItems={totalItems}
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
			totalItems={totalItems}
			totalPages={totalPages}
		/>
	);
};

export const PersistentFilters = () => {
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

	return (
		<ExamplePersistentFilters
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
			totalItems={totalItems}
			totalPages={totalPages}
		/>
	);
};
