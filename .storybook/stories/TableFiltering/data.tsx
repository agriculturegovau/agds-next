import {
	generateBusinessData,
	BusinessForAudit,
	BusinessForAuditStatus,
} from './lib/generateBusinessData';

const data = generateBusinessData();

export type handleGetDataFilters = {
	state: string | undefined;
	dateRegistered: {
		from: Date | undefined;
		to: Date | undefined;
	};
	status: BusinessForAuditStatus | undefined;
};

export type GetDataParams = {
	sort: { field: keyof BusinessForAudit; order: 'ASC' | 'DESC' };
	pagination: { page: number; perPage: number };
	filters: handleGetDataFilters;
};

type handleGetDataResponse = {
	data: BusinessForAudit[];
	total: number;
	totalPages: number;
};

export const handleGetData: (
	params: GetDataParams
) => Promise<handleGetDataResponse> = async (params) => {
	const { page, perPage } = params.pagination;
	const { field, order } = params.sort;

	const filteredData = data.filter((business) => {
		let isValid = true;

		const { dateRegistered, state, status } = params.filters;

		if (dateRegistered) {
			const { from, to } = dateRegistered;
			if (business.dateRegistered < from || business.dateRegistered > to) {
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
};
