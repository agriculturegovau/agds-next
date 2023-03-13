import { RefObject, useState } from 'react';
import { GetDataFilters, GetDataPagination, GetDataSort } from './getData';

export const useSortAndFilter = (args: {
	filters?: Partial<GetDataFilters>;
	itemsPerPage?: number;
	tableRef: RefObject<HTMLTableElement>;
}) => {
	const [pagination, setPaginationObj] = useState<GetDataPagination>({
		page: 1,
		perPage: args.itemsPerPage || 10,
	});
	const [sort, setSortObj] = useState<GetDataSort>({
		field: 'businessName',
		order: 'ASC',
	});
	const [filters, setFiltersObj] = useState<GetDataFilters>({
		assignee: undefined,
		businessName: undefined,
		state: undefined,
		status: undefined,
		requestDate: {
			from: undefined,
			to: undefined,
		},
		...args.filters,
	});

	const focusTable = () => {
		args.tableRef.current?.focus();
	};

	const setSort = (sort: GetDataSort) => {
		setSortObj(sort);
		resetPagination();
		focusTable();
	};

	const setPagination = (pagination: GetDataPagination) => {
		setPaginationObj(pagination);
		focusTable();
	};

	const resetPagination = () => {
		setPaginationObj({ ...pagination, page: 1 });
		focusTable();
	};

	const setFilters = (filters: GetDataFilters) => {
		setFiltersObj(filters);
		resetPagination();
		focusTable();
	};

	const resetFilters = () => {
		setFiltersObj({
			assignee: undefined,
			businessName: undefined,
			state: undefined,
			status: undefined,
			requestDate: {
				from: undefined,
				to: undefined,
			},
		});
		resetPagination();
		focusTable();
	};

	const removeFilter = (key: keyof GetDataFilters) => {
		setFiltersObj({
			...filters,
			[key]: undefined,
		});
		resetPagination();
		focusTable();
	};

	return {
		// sort
		sort,
		setSort,
		// filter
		filters,
		setFilters,
		removeFilter,
		// pagination
		pagination,
		setPagination,
		// reset
		resetFilters,
	};
};
