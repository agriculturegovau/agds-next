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

	if (totalItems === 1) return '1 Audit';

	const { page, perPage } = pagination;

	const firstItem = (page - 1) * perPage + 1;
	const lastItem = (page - 1) * perPage + perPage;

	return `${firstItem} - ${lastItem} of ${totalItems} Audits`;
};
