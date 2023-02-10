import {
	generateBusinessData,
	BusinessForAudit,
	BusinessForAuditStatus,
} from './generateBusinessData';

export type GetDataSort = {
	field: keyof BusinessForAudit;
	order: 'ASC' | 'DESC';
};

export type GetDataPagination = {
	page: number;
	perPage: number;
};

export type GetDataFilters = {
	businessName: string | undefined;
	state: string | undefined;
	requestDate: {
		from: Date | undefined;
		to: Date | undefined;
	};
	status: BusinessForAuditStatus | undefined;
};

export type GetDataParams = {
	sort: GetDataSort;
	pagination: GetDataPagination;
	filters: GetDataFilters;
};

type GetDataResponse = {
	data: BusinessForAudit[];
	total: number;
	totalPages: number;
	totalItems: number;
};

const allData = generateBusinessData();

export async function getData(params: GetDataParams): Promise<GetDataResponse> {
	const { page, perPage } = params.pagination;
	const { field, order } = params.sort;

	const filteredData = allData.filter((business) => {
		let isValid = true;

		const { requestDate, state, status, businessName } = params.filters;

		if (requestDate?.from && requestDate?.to) {
			if (
				business.requestDate < requestDate.from ||
				business.requestDate > requestDate.to
			) {
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

		return isValid;
	});

	const sortedData = filteredData.sort((a, b) => {
		if (a[field] > b[field]) {
			return order === 'ASC' ? 1 : -1;
		}
		if (a[field] < b[field]) {
			return order === 'ASC' ? -1 : 1;
		}
		return 0;
	});

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: sortedData.slice((page - 1) * perPage, page * perPage),
				total: sortedData.length,
				totalPages: Math.ceil(sortedData.length / perPage),
				totalItems: sortedData.length,
			});
		}, 1000);
	});
}
