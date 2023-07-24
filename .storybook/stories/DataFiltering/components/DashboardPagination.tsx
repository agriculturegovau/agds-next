import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { useSortAndFilterContext } from '../lib/SortAndFilterContext';

type DashboardPaginationProps = {
	data: any[];
	totalPages: number;
};

export const DashboardPagination = ({
	data,
	totalPages,
}: DashboardPaginationProps) => {
	const { pagination, setPagination } = useSortAndFilterContext();

	if (data.length) return null;

	return (
		<PaginationButtons
			currentPage={pagination.page}
			onChange={(page) => setPagination({ ...pagination, page })}
			totalPages={totalPages}
		/>
	);
};
