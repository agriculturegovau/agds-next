import {
	PaginationButtons,
	generatePaginationRangeText,
} from '@ag.ds-next/react/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { GetDataPagination } from '../lib/getData';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalItems, totalPages } = useDataContext();

	if (!data.length) return null;

	return (
		<PaginationButtons
			currentPage={pagination.page}
			onChange={(page) => setPagination({ ...pagination, page })}
			totalPages={totalPages}
			itemRangeText={generatePaginationRangeText({
				totalItems: totalItems,
				currentPage: pagination.page,
				itemsPerPage: pagination.perPage,
				singularNoun: 'audit',
				pluralNoun: 'audits',
			})}
			itemsPerPage={pagination.perPage}
			onItemsPerPageChange={(perPage) =>
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
