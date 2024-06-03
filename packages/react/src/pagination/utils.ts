export const BUTTON_SIZE_XS = '2.75rem'; // 44px
export const BUTTON_SIZE_SM = '3rem'; // 48px

/** Generates some basic text for the item range in Pagination:
 * "1 - 10 of 458 items" */
export function generatePaginationRangeText({
	totalItems,
	itemsPerPage,
	currentPage,
	singularNoun = 'item',
	pluralNoun = 'items',
}: {
	/** The total number of items in the data list. */
	totalItems: number;
	/** The number of items per page. */
	itemsPerPage: number;
	/** The current page number. */
	currentPage: number;
	/** The singular form of the noun to use for the items. */
	singularNoun?: string;
	/** The plural form of the noun to use for the items. */
	pluralNoun?: string;
}) {
	// If there is only one item, use the word the singular noun instead of the plural
	const noun = totalItems === 1 ? singularNoun : pluralNoun;

	const firstItem = (currentPage - 1) * itemsPerPage + 1;

	const lastItem = Math.min(
		(currentPage - 1) * itemsPerPage + itemsPerPage,
		totalItems
	);

	return `${firstItem} - ${lastItem} of ${totalItems} ${noun}`;
}
