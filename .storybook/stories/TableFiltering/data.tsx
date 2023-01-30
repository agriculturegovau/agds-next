import {
	generateBusinessData,
	BusinessForAudit,
} from './lib/generateBusinessData';

const data = generateBusinessData();

export type handleGetDataParams = {
	sort: { field: keyof BusinessForAudit; order: 'ASC' | 'DESC' };
	pagination: { page: number; perPage: number };
	filters: { [key: string]: string | undefined };
};

type handleGetDataResponse = {
	data: BusinessForAudit[];
	total: number;
	totalPages: number;
};

export const handleGetData: (
	params: handleGetDataParams
) => Promise<handleGetDataResponse> = async (params) => {
	const { page, perPage } = params.pagination;
	const { field, order } = params.sort;

	const filteredData = data.filter((business) => {
		let isValid = true;
		Object.keys(params.filters).forEach((key) => {
			const value = params.filters[key].toLowerCase();
			if (business[key].toString().toLowerCase().indexOf(value) === -1) {
				isValid = false;
			}
		});
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
