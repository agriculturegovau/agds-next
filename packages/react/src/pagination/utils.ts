export const BUTTON_SIZE_XS = '2.75rem' as const; // 44px
export const BUTTON_SIZE_SM = '3rem' as const; // 48px

/** Generates some basic text for the item range in Pagination:
 * "1 - 10 of 458 items" */
export const generatePaginationRangeText = ({
	totalItems,
	firstItem,
	lastItem,
	singularNoun = 'item',
	pluralNoun = 'items',
}: {
	/** Total number of items in the search results*/
	totalItems: number;
	/** The index of the first item in the current page */
	firstItem: number;
	/** The index of the last item in the current page */
	lastItem: number;
	/** The singular form of the noun to use for the items */
	singularNoun?: string;
	/** The plural form of the noun to use for the items */
	pluralNoun?: string;
}) => {
	/**  If there is only one item, use the word "item" instead of "items" */
	const noun = totalItems === 1 ? singularNoun : pluralNoun;

	return `${firstItem} - ${lastItem} of ${totalItems} ${noun}`;
};
