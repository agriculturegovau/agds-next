import { PaginationButtons } from '@ag.ds-next/react/pagination';
import {
	useDashboardTableDataContext,
	useSortAndFilterContext,
} from '../lib/contexts';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalPages } = useDashboardTableDataContext();

	if (!data.length) return null;

	return (
		<PaginationButtons
			currentPage={pagination.page}
			onChange={(page) => setPagination({ ...pagination, page })}
			totalPages={totalPages}
		/>
	);
};
