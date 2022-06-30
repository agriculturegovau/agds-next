type PaginationElements =
	| {
			type: 'direction';
			direction: 'left' | 'right';
			pageNumber: number;
	  }
	| {
			type: 'page';
			pageNumber: number;
			isActive: boolean;
	  }
	| {
			type: 'separator';
	  };

export type UsePaginationProps = {
	windowLimit: number;
	currentPage: number;
	totalPages: number;
};

export function usePagination({
	currentPage,
	totalPages,
	windowLimit,
}: UsePaginationProps) {
	const elements: PaginationElements[] = [];

	let minPage = 1;
	let maxPage = totalPages;

	// Create range
	if (windowLimit < totalPages) {
		const rightLimit = Math.floor(windowLimit / 2);
		const leftLimit = rightLimit + (windowLimit % 2) - 1;
		minPage = currentPage - leftLimit;
		maxPage = currentPage + rightLimit;

		if (minPage < 1) {
			maxPage = windowLimit;
			minPage = 1;
		}

		if (maxPage > totalPages) {
			minPage = totalPages - windowLimit + 1;
			maxPage = totalPages;
		}
	}

	// If we are not on the first page, create the 'previous' element
	if (currentPage > 1) {
		elements.push({
			type: 'direction',
			direction: 'left',
			pageNumber: currentPage - 1,
		});
	}

	// If we are passed page 2, create the '1 ...' elements
	if (minPage > 1) {
		elements.push({ type: 'page', pageNumber: 1, isActive: 1 === currentPage });
		if (minPage > 2) elements.push({ type: 'separator' });
	}

	// loop over range
	for (let page = minPage; page <= maxPage; page++) {
		const isActive = page === currentPage;
		elements.push({ type: 'page', pageNumber: page, isActive });
	}

	// If we are not at the end of the list, create the 'n ...' elements
	if (maxPage + 1 < totalPages) elements.push({ type: 'separator' });
	if (maxPage < totalPages) {
		elements.push({
			type: 'page',
			pageNumber: totalPages,
			isActive: totalPages === currentPage,
		});
	}

	// If we are not on the last page, create the 'next' element
	if (currentPage < totalPages) {
		elements.push({
			type: 'direction',
			direction: 'right',
			pageNumber: currentPage + 1,
		});
	}

	return elements;
}
