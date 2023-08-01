import { useEffect, useState } from 'react';
import { getData, GetDataParams, GetDataPagination } from './getData';
import { BusinessForAuditWithIndex } from './generateBusinessData';

export type DashboardTableData = {
	/** Whether the data is loading */
	loading: boolean;
	/** The loaded data */
	data: BusinessForAuditWithIndex[];
	/** The total number of pages in the search */
	totalPages: number;
	/** The total number of items found in the search */
	totalItems: number;
};

export function useData({
	sort,
	filters,
	pagination,
}: GetDataParams): DashboardTableData {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<BusinessForAuditWithIndex[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		setLoading(true);
		getData({ sort, filters, pagination }).then((response) => {
			setData(response.data);
			setTotalPages(response.totalPages);
			setTotalItems(response.totalItems);
			setLoading(false);
		});
	}, [sort, filters, pagination]);

	return { loading, data, totalPages, totalItems };
}

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
