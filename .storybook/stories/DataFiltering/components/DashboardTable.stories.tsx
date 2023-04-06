import { useSortAndFilter } from '../lib/useSortAndFilter';
import { generateTableCaption, useData } from '../lib/utils';
import { DashboardTable } from './DashboardTable';

export default {
	title: 'content/Table',
};

export const Application = () => {
	const { sort, filters, pagination, setFilters, setPagination } =
		useSortAndFilter({
			itemsPerPage: 10,
		});

	const { data, totalPages, totalItems, loading } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems: 10,
		pagination,
	});

	return (
		<DashboardTable
			{...{
				filters,
				setFilters,
				pagination,
				setPagination,
				totalPages,
				totalItems,
				loading,
				data,
				caption: tableCaption,
			}}
		/>
	);
};
