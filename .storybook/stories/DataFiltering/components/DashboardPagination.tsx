import {
	PaginationButtons,
	generatePaginationRangeText,
} from '@ag.ds-next/react/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalItems, totalPages } = useDataContext();

	if (!data.length) return null;

	console.log(
		{
			totalItems: totalItems,
			currentPage: pagination.page,
			itemsPerPage: pagination.perPage,
			singularNoun: 'audit',
			pluralNoun: 'audits',
		},
		generatePaginationRangeText({
			totalItems: totalItems,
			currentPage: pagination.page,
			itemsPerPage: pagination.perPage,
			singularNoun: 'audit',
			pluralNoun: 'audits',
		})
	);

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
