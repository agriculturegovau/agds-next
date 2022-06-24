import { usePagination } from './usePagination';

describe('usePagination', () => {
	test('start of list', () => {
		const result = usePagination({ currentPage: 1, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'page', pageNumber: 1, isActive: true },
			{ type: 'page', pageNumber: 2, isActive: false },
			{ type: 'page', pageNumber: 3, isActive: false },
			{ type: 'separator' },
			{ type: 'page', pageNumber: 10, isActive: false },
			{ type: 'direction', pageNumber: 2, direction: 'right' },
		]);
	});
	test('middle of list', () => {
		const result = usePagination({ currentPage: 5, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'direction', pageNumber: 4, direction: 'left' },
			{ type: 'page', pageNumber: 1, isActive: false },
			{ type: 'separator' },
			{ type: 'page', pageNumber: 4, isActive: false },
			{ type: 'page', pageNumber: 5, isActive: true },
			{ type: 'page', pageNumber: 6, isActive: false },
			{ type: 'separator' },
			{ type: 'page', pageNumber: 10, isActive: false },
			{ type: 'direction', pageNumber: 6, direction: 'right' },
		]);
	});
	test('end of list', () => {
		const result = usePagination({ currentPage: 10, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'direction', pageNumber: 9, direction: 'left' },
			{ type: 'page', pageNumber: 1, isActive: false },
			{ type: 'separator' },
			{ type: 'page', pageNumber: 8, isActive: false },
			{ type: 'page', pageNumber: 9, isActive: false },
			{ type: 'page', pageNumber: 10, isActive: true },
		]);
	});
});
