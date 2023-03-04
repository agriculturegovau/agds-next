import { useState } from 'react';
import { GetDataFilters, GetDataPagination, GetDataSort } from './data';

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
}) => SortAndFilterType = (args) => {
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

	const removeFilter = (key: keyof GetDataFilters) => {
		setFilters({
			...filters,
			[key]: undefined,
		});
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
