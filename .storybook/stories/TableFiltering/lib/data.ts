import {
	generateBusinessData,
	BusinessForAudit,
	BusinessForAuditStatus,
} from './generateBusinessData';

const EXAMPLE_DATA = generateBusinessData();

export type GetDataParams = {
	sort: { field: keyof BusinessForAudit; order: 'ASC' | 'DESC' };
	pagination: { page: number; perPage: number };
	filters: {
		state: string | undefined;
		dateRegistered: {
			from: Date | undefined;
			to: Date | undefined;
		};
		status: BusinessForAuditStatus | undefined;
	};
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

		const { dateRegistered, state, status } = params.filters;

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
