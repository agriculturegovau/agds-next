import { useEffect, useState } from 'react';
import {
	BusinessForAudit,
	BusinessForAuditWithIndex,
} from './generateBusinessData';
import { getData, GetDataParams } from './getData';

export type DashboardTableData = {
	updateData?: (
		data:
			| {
					batchItems: string[];
					isDeleted?: boolean;
					isCompleted?: never;
					newItemData?: never;
			  }
			| {
					newItemData: BusinessForAudit;
					isCompleted?: boolean;
					isDeleted?: boolean;
					batchItems?: never;
			  }
	) => void;
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
	const [currentData, setCurrentData] = useState<BusinessForAuditWithIndex[]>(
		[]
	);
	const [totalPages, setTotalPages] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const [interimData, setInterimData] = useState<BusinessForAuditWithIndex[]>(
		[]
	);

	useEffect(() => {
		setLoading(true);
		getData({ sort, filters, pagination }, interimData).then((response) => {
			setCurrentData(response.currentData);
			setData(response.data);
			setTotalPages(response.totalPages);
			setTotalItems(response.totalItems);
			setLoading(false);
		});
	}, [sort, filters, pagination, interimData]);

	const updateData = (
		data:
			| {
					batchItems: string[];
					isDeleted?: boolean;
					isCompleted?: never;
					newItemData?: never;
			  }
			| {
					newItemData: BusinessForAudit;
					isCompleted?: boolean;
					isDeleted?: boolean;
					batchItems?: never;
			  }
	) => {
		const { batchItems, isDeleted, newItemData } = data;

		if (batchItems) {
			setInterimData(
				isDeleted
					? currentData.filter((item) => !batchItems.includes(item.id))
					: currentData.map((item) =>
							batchItems.includes(item.id)
								? { ...item, status: 'completed' }
								: item
					  )
			);
		} else {
			const itemToEdit = currentData.find(({ id }) => id === newItemData.id);
			if (!itemToEdit) return;
			const indexOfData = currentData.indexOf(itemToEdit);

			setInterimData([
				...currentData.slice(0, indexOfData),
				...(isDeleted ? [] : [{ ...itemToEdit, ...newItemData }]),
				...currentData.slice(indexOfData + 1),
			]);
		}
	};

	if (throwError) {
		return {
			error: 'Something went wrong',
			loading: false,
			data: [],
			totalPages: 0,
			totalItems: 0,
			updateData: () => undefined,
		};
	}

	return { loading, data, totalPages, totalItems, updateData };
}
