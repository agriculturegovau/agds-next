import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { GetDataPagination } from '../lib/getData';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, loading, totalItems, totalPages } = useDataContext();

	const rangeText = getPaginationText({
		loading,
		totalItems,
		pagination,
	});

	if (!data.length) return null;

	return (
		<PaginationButtons
			currentPage={pagination.page}
			onChange={(page) => setPagination({ ...pagination, page })}
			totalPages={totalPages}
			itemRangeText={rangeText}
			itemsPerPage={pagination.perPage}
			onChangeItemsPerPage={(perPage) =>
				setPagination({ ...pagination, perPage })
			}
		/>
	);
};

export const getPaginationText = ({
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

	return `${firstItem} - ${lastItem} of ${totalItemsPlural} Audits`;
};
