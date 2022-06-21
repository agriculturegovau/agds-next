type PaginationElements =
	| {
			type: 'direction';
			direction: 'left' | 'right';
			page: number;
	  }
	| {
			type: 'page';
			page: number;
			isSelected: boolean;
	  }
	| {
			type: 'divider';
	  };

export function usePagination({
	currentPage,
	limit = 3,
	totalPages,
}: {
	currentPage: number;
	limit?: number;
	totalPages: number;
}) {
	const elements: PaginationElements[] = [];

	let minPage = 1;
	let maxPage = totalPages;

	// Create range
	if (limit < totalPages) {
		const rightLimit = Math.floor(limit / 2);
		const leftLimit = rightLimit + (limit % 2) - 1;
		minPage = currentPage - leftLimit;
		maxPage = currentPage + rightLimit;

		if (minPage < 1) {
			maxPage = limit;
			minPage = 1;
		}

		if (maxPage > totalPages) {
			minPage = totalPages - limit + 1;
			maxPage = totalPages;
		}
	}

	// If we are not on the first page, create the 'previous' element
	if (currentPage > 1) {
		elements.push({
			type: 'direction',
			direction: 'left',
			page: currentPage - 1,
		});
	}

	// If we are passed page 2, create the '1 ...' elements
	if (minPage > 1) {
		elements.push({ type: 'page', page: 1, isSelected: 1 === currentPage });
		if (minPage > 2) elements.push({ type: 'divider' });
	}

	// loop over range
	for (let page = minPage; page <= maxPage; page++) {
		const isSelected = page === currentPage;
		elements.push({ type: 'page', page, isSelected });
	}

	// If we are not at the end of the list, create the 'n ...' elements
	if (maxPage + 1 < totalPages) elements.push({ type: 'divider' });
	if (maxPage < totalPages) {
		elements.push({
			type: 'page',
			page: totalPages,
			isSelected: totalPages === currentPage,
		});
	}

	// If we are not on the last page, create the 'next' element
	if (currentPage < totalPages) {
		elements.push({
			type: 'direction',
			direction: 'right',
			page: currentPage + 1,
		});
	}

	return elements;
}
