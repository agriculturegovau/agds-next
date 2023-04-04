import { RefObject, useState } from 'react';
import { GetDataFilters, GetDataPagination, GetDataSort } from './getData';

export const useSortAndFilter = (
	args: {
		filters?: Partial<GetDataFilters>;
		itemsPerPage?: number;
	} = {}
) => {
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

	const setSort = (sort: GetDataSort) => {
		setSortObj(sort);
		resetPagination();
	};

	const setPagination = (pagination: GetDataPagination) => {
		setPaginationObj(pagination);
	};

	const resetPagination = () => {
		setPaginationObj({ ...pagination, page: 1 });
	};

	const setFilters = (filters: GetDataFilters) => {
		setFiltersObj(filters);
		resetPagination();
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
	};

	const removeFilter = (key: keyof GetDataFilters) => {
		setFiltersObj({
			...filters,
			[key]: undefined,
		});
		resetPagination();
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
