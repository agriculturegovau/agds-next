import { DateRangeWithString } from '@ag.ds-next/react/date-range-picker';
import {
	generateBusinessData,
	BusinessForAudit,
	BusinessForAuditStatus,
	BusinessForAuditWithIndex,
} from './generateBusinessData';

export type GetDataSort = {
	/** The field to sort by */
	field: keyof BusinessForAudit;
	/** The order to sort by */
	order: 'ASC' | 'DESC';
};

export type GetDataPagination = {
	/** The current page number */
	page: number;
	/** The number of items to display per page */
	perPage: number;
};

export type GetDataFilters = {
	assignee: string | undefined;
	businessName: string | undefined;
	state: string | undefined;
	requestDate: DateRangeWithString;
	status: BusinessForAuditStatus | undefined;
	services: string[] | undefined;
	destinations: string[] | undefined;
};

export type GetDataParams = {
	sort: GetDataSort;
	pagination: GetDataPagination;
	filters: GetDataFilters;
};

type GetDataResponse = {
	data: BusinessForAuditWithIndex[];
	total: number;
	totalPages: number;
	totalItems: number;
};

export const doesBusinessMatchFilters = (
	business: BusinessForAudit,
	filters: Partial<GetDataFilters>
) => {
	let isValid = true;

	const {
		requestDate,
		state,
		status,
		businessName,
		assignee,
		services,
		destinations,
	} = filters;

	if (requestDate && requestDate.from && typeof requestDate.from !== 'string') {
		if (business.requestDate < requestDate.from) {
			isValid = false;
		}
	}

	if (requestDate && requestDate.to && typeof requestDate.to !== 'string') {
		if (business.requestDate > requestDate.to) {
			isValid = false;
		}
	}

	if (state) {
		const value = state.toLowerCase();
		if (business.state.toString().toLowerCase().indexOf(value) === -1) {
			isValid = false;
		}
	}

	if (status) {
		const value = status.toLowerCase();
		if (business.status.toString().toLowerCase().indexOf(value) === -1) {
			isValid = false;
		}
	}

	if (businessName) {
		const value = businessName.toLowerCase();
		if (!business.businessName.toString().toLowerCase().includes(value)) {
			isValid = false;
		}
	}

	if (assignee) {
		if (
			!business.assignee ||
			(business.assignee && business.assignee !== assignee)
		) {
			isValid = false;
		}
	}

	if (services && services.length > 0) {
		// ensures a business has all the services selected.
		const hasAllServices = services.every((service) => {
			return (business.services || []).includes(service);
		});
		if (!hasAllServices) {
			isValid = false;
		}
	}

	if (destinations && destinations.length > 0) {
		// ensures a business sends to at least one of the destinations selected.
		const hasDestination = destinations.some((destination) => {
			return (business.destinations || []).includes(destination);
		});
		if (!hasDestination) {
			isValid = false;
		}
	}

	return isValid;
};

// TODO: write tests for this
const sortData = (
	a: BusinessForAudit,
	b: BusinessForAudit,
	sort: GetDataSort
) => {
	const { field, order } = sort;
	const aValue = a[field];
	const bValue = b[field];

	if (aValue === undefined) return 1;
	if (bValue === undefined) return -1;

	if (aValue > bValue) {
		return order === 'ASC' ? 1 : -1;
	}
	if (aValue < bValue) {
		return order === 'ASC' ? -1 : 1;
	}
	return 0;
};

// Instantiate the data once
const allData = generateBusinessData();

/** Simulates the retrieval of data from an API */
export async function getData(params: GetDataParams): Promise<GetDataResponse> {
	const { page, perPage } = params.pagination;

	const filteredData = allData.filter((business) =>
		doesBusinessMatchFilters(business, params.filters)
	);

	const sortedData = filteredData
		.sort((a, b) => sortData(a, b, params.sort))
		.map((business, index) => ({
			...business,
			/** The index of the search result */
			index,
		}));

	const paginatedData = sortedData.slice((page - 1) * perPage, page * perPage);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: paginatedData,
				total: sortedData.length,
				totalPages: Math.ceil(sortedData.length / perPage),
				totalItems: sortedData.length,
			});
		}, 1000);
	});
}
