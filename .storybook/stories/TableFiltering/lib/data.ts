import {
	generateBusinessData,
	BusinessForAudit,
	BusinessForAuditStatus,
} from './generateBusinessData';

const EXAMPLE_DATA = generateBusinessData();

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
	dateRegistered: {
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
};

export async function getData(params: GetDataParams): Promise<GetDataResponse> {
	const { page, perPage } = params.pagination;
	const { field, order } = params.sort;

	const filteredData = EXAMPLE_DATA.filter((business) => {
		let isValid = true;

		const { dateRegistered, state, status, businessName } = params.filters;

		if (dateRegistered?.from && dateRegistered?.to) {
			if (
				business.dateRegistered < dateRegistered.from ||
				business.dateRegistered > dateRegistered.to
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
			});
		}, 1000);
	});
}
