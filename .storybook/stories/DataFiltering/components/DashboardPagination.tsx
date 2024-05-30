import {
	PaginationButtons,
	generatePaginationRangeText,
} from '@ag.ds-next/react/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';

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
				setPagination({
					page: getValidPage({
						currentPage: pagination.page,
						totalItems,
						perPage,
						prevPerPage: pagination.perPage,
					}),
					perPage,
				})
			}
		/>
	);
};

const getValidPage = ({
	currentPage,
	totalItems,
	perPage,
	prevPerPage,
}: {
	currentPage: number;
	totalItems: number;
	perPage: number;
	prevPerPage: number;
}) => {
	// So the user doesn't lose their position in the nav order,
	// we find the lowest displayed item number and ensure it is
	// still on the page when we change items per page.
	const lowestDisplayedItemPosition = Math.floor(
		currentPage * prevPerPage + (1 - prevPerPage)
	);
	const newPageWithLowestDisplayedItemPosition = Math.floor(
		lowestDisplayedItemPosition / perPage + 1
	);

	return currentPage > totalItems / perPage
		? Math.ceil(totalItems / perPage)
		: newPageWithLowestDisplayedItemPosition;
};
