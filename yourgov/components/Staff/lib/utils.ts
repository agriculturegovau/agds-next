import { GetDataPagination, GetDataFilters } from './types';

export const generateTableCaption = ({
	loading,
	totalItems,
	pagination,
}: {
	loading: boolean;
	totalItems: number;
	pagination: GetDataPagination;
}) => {
	if (loading) return 'Staff members';

	const totalItemsPlural = totalItems === 1 ? '1 item' : `${totalItems} items`;
	const firstItem = (pagination.page - 1) * pagination.perPage + 1;
	const lastItem =
		(pagination.page - 1) * pagination.perPage + pagination.perPage;

	const rangeExceedsTotalItems = lastItem > totalItems;
	if (rangeExceedsTotalItems) return `Staff members (${totalItemsPlural})`;

	return `Staff members (${firstItem} - ${lastItem} of ${totalItemsPlural})`;
};

export const STATUS_MAP = {
	Active: {
		label: 'Active',
		tone: 'success',
	},
	Invited: {
		label: 'Invited',
		tone: 'info',
	},
	Paused: {
		label: 'Paused',
		tone: 'neutral',
	},
} as const;

export const getNumberOfActiveFilters = (filters: GetDataFilters) =>
	Object.keys(filters).reduce((acc, key) => {
		if (filters[key as keyof GetDataFilters] !== undefined) return acc + 1;
		return acc;
	}, 0);

export const plural = (
	arrayLength: number,
	singular: string,
	plural: string
) => {
	return arrayLength === 1 ? singular : plural;
};
