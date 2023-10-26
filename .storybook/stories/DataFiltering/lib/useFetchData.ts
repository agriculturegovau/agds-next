import { useEffect, useState } from 'react';
import { BusinessForAuditWithIndex } from './generateBusinessData';
import { getData, GetDataParams } from './getData';

export type DashboardTableData = {
	/** Whether the data is loading */
	loading: boolean;
	/** The loaded data */
	data: BusinessForAuditWithIndex[];
	/** The total number of pages in the search */
	totalPages: number;
	/** The total number of items found in the search */
	totalItems: number;
	/** An error message, if any */
	error?: string;
};

/** In a real app, this function would fetch data from an API. */
export function useFetchData({
	sort,
	filters,
	pagination,
	throwError,
}: GetDataParams): DashboardTableData {
	const [loading, setLoading] = useState(true);
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

	if (throwError) {
		return {
			error: 'Something went wrong',
			loading: false,
			data: [],
			totalPages: 0,
			totalItems: 0,
		};
	}

	return { loading, data, totalPages, totalItems };
}
