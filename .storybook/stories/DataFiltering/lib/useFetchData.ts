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
};

/** In a real app, this function would fetch data from an API. */
export function useFetchData({
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
