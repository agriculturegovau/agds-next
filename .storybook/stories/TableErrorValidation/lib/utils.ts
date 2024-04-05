import { GetDataPagination, GetDataFilters } from './getData';

export const generateTableCaption = ({
	loading,
	totalItems,
	pagination,
}: {
	loading: boolean;
	totalItems: number;
	pagination: GetDataPagination;
}) => {
	if (loading) return 'Audits';

	const totalItemsPlural = totalItems === 1 ? '1 item' : `${totalItems} items`;
	const firstItem = (pagination.page - 1) * pagination.perPage + 1;
	const lastItem =
		(pagination.page - 1) * pagination.perPage + pagination.perPage;

	const rangeExceedsTotalItems = lastItem > totalItems;
	if (rangeExceedsTotalItems) return `Audits (${totalItemsPlural})`;

	return `Audits (${firstItem} - ${lastItem} of ${totalItemsPlural})`;
};

export const STATUS_MAP = {
	notBooked: {
		label: 'Not booked',
		tone: 'neutral',
	},
	booked: {
		label: 'Booked',
		tone: 'info',
	},
	completed: {
		label: 'Completed',
		tone: 'success',
	},
	cancelled: {
		label: 'Cancelled',
		tone: 'error',
	},
} as const;

export const getNumberOfActiveFilters = (filters: GetDataFilters) =>
	Object.keys(filters).reduce((acc, key) => {
		if (key === 'requestDate') {
			if (filters.requestDate?.from || filters.requestDate?.to) {
				return acc + 1;
			} else {
				return acc;
			}
		}

		if (filters[key as keyof GetDataFilters] !== undefined) return acc + 1;
		return acc;
	}, 0);
