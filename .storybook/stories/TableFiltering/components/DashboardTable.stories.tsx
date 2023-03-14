import { useRef } from 'react';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { generateTableCaption, useData } from '../lib/utils';
import { DashboardTable } from './DashboardTable';

export default {
	title: 'content/Table',
};

export const Application = () => {
	const tableRef = useRef<HTMLTableElement>(null);

	const { sort, filters, pagination, setSort, setFilters, setPagination } =
		useSortAndFilter({
			tableRef,
		});

	const { data, totalPages, totalItems, loading } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
	});

	return (
		<DashboardTable
			{...{
				sort,
				setSort,
				filters,
				setFilters,
				pagination,
				setPagination,
				totalPages,
				totalItems,
				loading,
				data,
				caption: tableCaption,
				tableRef,
			}}
		/>
	);
};
