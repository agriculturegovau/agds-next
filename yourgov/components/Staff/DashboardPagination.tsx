import { useEffect, useState } from 'react';
import {
	PaginationButtons,
	generatePaginationRangeText,
} from '@ag.ds-next/react/src/pagination';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';

export const DashboardPagination = () => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { displayData, totalItems, totalPages, loading } = useDataContext();

	console.log({ displayData, totalItems, totalPages });

	const itemRangeText = generatePaginationRangeText({
		totalItems: totalItems,
		currentPage: pagination.page,
		itemsPerPage: pagination.perPage,
		singularNoun: 'item',
		pluralNoun: 'items',
	});

	// Display text for pagination allows us to wait for loading to complete before updating
	const [displayText, setDisplayText] = useState({
		page: pagination.page,
		itemRangeText,
		perPage: pagination.perPage,
	});

	useEffect(() => {
		// Wait for loading to complete before updating pagination displayText
		if (loading) return;

		setDisplayText({
			page: pagination.page,
			itemRangeText,
			perPage: pagination.perPage,
		});
	}, [itemRangeText, loading, pagination.page, pagination.perPage]);

	if (!displayData.length) return null;

	return (
		<PaginationButtons
			currentPage={displayText.page}
			onChange={(page) => setPagination({ perPage: displayText.perPage, page })}
			totalPages={totalPages}
			itemRangeText={displayText.itemRangeText}
			itemsPerPage={displayText.perPage}
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
