import { RefObject, useState } from 'react';
import { GetDataFilters, GetDataPagination, GetDataSort } from './getData';

export type SortAndFilterType = {
	// sort
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	// filter
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetFilters: () => void;
	removeFilter: (key: keyof GetDataFilters) => void;
	// pagination
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	resetPagination: () => void;
};

export const useSortAndFilter: (args?: {
	filters?: Partial<GetDataFilters>;
	itemsPerPage?: number;
	tableRef: RefObject<HTMLTableElement>;
}) => SortAndFilterType = (args) => {
	const [pagination, setPaginationObj] = useState<GetDataPagination>({
		page: 1,
		perPage: args?.itemsPerPage || 10,
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
		...args?.filters,
	});

	const focusTable = () => {
		console.log('focusTable', args?.tableRef?.current);
		if (args?.tableRef?.current) {
			args.tableRef.current.focus();
		}
	};

	const setSort = (sort: GetDataSort) => {
		setSortObj(sort);
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
		focusTable();
	};

	const removeFilter = (key: keyof GetDataFilters) => {
		setFiltersObj({
			...filters,
			[key]: undefined,
		});
		focusTable();
	};

	return {
		// sort
		sort,
		setSort,
		// filter
		filters,
		setFilters,
		resetFilters,
		removeFilter,
		// pagination
		pagination,
		setPagination,
		resetPagination,
	};
};
