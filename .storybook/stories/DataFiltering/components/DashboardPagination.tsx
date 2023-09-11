import { PaginationAdvanced } from '@ag.ds-next/react/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalItems } = useDataContext();

	if (!data.length) return null;

	console.log(totalItems / pagination.perPage);

	return (
		<PaginationAdvanced
			currentPage={pagination.page}
			onChange={(page) => setPagination({ ...pagination, page })}
			totalItems={totalItems}
			itemsPerPage={pagination.perPage}
			itemsPerPageOnChange={(perPage) => setPagination({ page: 1, perPage })}
		/>
	);
};
