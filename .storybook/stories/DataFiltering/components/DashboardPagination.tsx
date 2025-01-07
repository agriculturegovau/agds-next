import { useEffect, useState } from 'react';
import {
	PaginationButtons,
	generatePaginationRangeText,
} from '../../../../packages/react/src/pagination';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalItems, totalPages, loading } = useDataContext();

	const itemRangeText = generatePaginationRangeText({
		totalItems: totalItems,
		currentPage: pagination.page,
		itemsPerPage: pagination.perPage,
		singularNoun: 'audit',
		pluralNoun: 'audits',
	});

	// Display text for pagination allows us to wait for loading to complete before updating
	const [displayText, setDisplayText] = useState({
		page: pagination.page,
		itemRangeText,
		perPage: pagination.perPage,
	});

	// Wait for loading to complete before updating pagination displayText
	useEffect(() => {
		if (loading) return;

		setDisplayText({
			page: pagination.page,
			itemRangeText,
			perPage: pagination.perPage,
		});
		// We only want to update the display text once the table data has finished loading, all other deps are ignored here
	}, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!data.length) return null;

	return (
		<PaginationButtons
			currentPage={displayText.page}
			itemRangeText={displayText.itemRangeText}
			itemsPerPage={displayText.perPage}
			onChange={(page) => setPagination({ perPage: displayText.perPage, page })}
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
			totalPages={totalPages}
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
