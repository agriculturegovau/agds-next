import { useEffect, useState } from 'react';
import { getData, GetDataParams } from './getData';
import { BusinessForAuditWithIndex } from './generateBusinessData';

export function useData({ sort, filters, pagination }: GetDataParams) {
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

export const genetateTableCaption = ({
	loading,
	totalItems,
}: {
	loading: boolean;
	totalItems: number;
}) => {
	return `Audits ${
		loading ? '' : `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`
	}`.trim();
};
