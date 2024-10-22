import { usePagination } from './usePagination';

describe('usePagination', () => {
	test('start of list', () => {
		const result = usePagination({
			currentPage: 1,
			totalPages: 10,
			windowLimit: 3,
		});
		expect(result).toEqual([
			{ type: 'page', pageNumber: 1, isActive: true },
			{ type: 'page', pageNumber: 2, isActive: false },
			{ type: 'page', pageNumber: 3, isActive: false },
			{ type: 'separator', pageNumber: 0 },
			{ type: 'page', pageNumber: 10, isActive: false },
			{ type: 'direction', pageNumber: 2, direction: 'right' },
		]);
	});

	test('middle of list', () => {
		const result = usePagination({
			currentPage: 5,
			totalPages: 10,
			windowLimit: 3,
		});
		expect(result).toEqual([
			{ type: 'direction', pageNumber: 4, direction: 'left' },
			{ type: 'page', pageNumber: 1, isActive: false },
			{ type: 'separator', pageNumber: 0 },
			{ type: 'page', pageNumber: 4, isActive: false },
			{ type: 'page', pageNumber: 5, isActive: true },
			{ type: 'page', pageNumber: 6, isActive: false },
			{ type: 'separator', pageNumber: 0 },
			{ type: 'page', pageNumber: 10, isActive: false },
			{ type: 'direction', pageNumber: 6, direction: 'right' },
		]);
	});

	test('end of list', () => {
		const result = usePagination({
			currentPage: 10,
			totalPages: 10,
			windowLimit: 3,
		});
		expect(result).toEqual([
			{ type: 'direction', pageNumber: 9, direction: 'left' },
			{ type: 'page', pageNumber: 1, isActive: false },
			{ type: 'separator', pageNumber: 0 },
			{ type: 'page', pageNumber: 8, isActive: false },
			{ type: 'page', pageNumber: 9, isActive: false },
			{ type: 'page', pageNumber: 10, isActive: true },
		]);
	});

	describe('removed unwanted separators from start of list', () => {
		test('from start of list', () => {
			const result = usePagination({
				currentPage: 4,
				totalPages: 10,
				windowLimit: 3,
			});
			expect(result).toEqual([
				{ type: 'direction', pageNumber: 3, direction: 'left' },
				{ type: 'page', pageNumber: 1, isActive: false },
				{ type: 'page', pageNumber: 2, isActive: false },
				{ type: 'page', pageNumber: 3, isActive: false },
				{ type: 'page', pageNumber: 4, isActive: true },
				{ type: 'page', pageNumber: 5, isActive: false },
				{ type: 'separator', pageNumber: 0 },
				{ type: 'page', pageNumber: 10, isActive: false },
				{ type: 'direction', pageNumber: 5, direction: 'right' },
			]);
		});

		test('from start of list with alt window limit', () => {
			const result = usePagination({
				currentPage: 4,
				totalPages: 10,
				windowLimit: 5,
			});
			expect(result).toEqual([
				{ type: 'direction', pageNumber: 3, direction: 'left' },
				{ type: 'page', pageNumber: 1, isActive: false },
				{ type: 'page', pageNumber: 2, isActive: false },
				{ type: 'page', pageNumber: 3, isActive: false },
				{ type: 'page', pageNumber: 4, isActive: true },
				{ type: 'page', pageNumber: 5, isActive: false },
				{ type: 'page', pageNumber: 6, isActive: false },
				{ type: 'separator', pageNumber: 0 },
				{ type: 'page', pageNumber: 10, isActive: false },
				{ type: 'direction', pageNumber: 5, direction: 'right' },
			]);
		});

		test('from end of list', () => {
			const result = usePagination({
				currentPage: 7,
				totalPages: 10,
				windowLimit: 3,
			});
			expect(result).toEqual([
				{ type: 'direction', pageNumber: 6, direction: 'left' },
				{ type: 'page', pageNumber: 1, isActive: false },
				{ type: 'separator', pageNumber: 0 },
				{ type: 'page', pageNumber: 6, isActive: false },
				{ type: 'page', pageNumber: 7, isActive: true },
				{ type: 'page', pageNumber: 8, isActive: false },
				{ type: 'page', pageNumber: 9, isActive: false },
				{ type: 'page', pageNumber: 10, isActive: false },
				{ type: 'direction', pageNumber: 8, direction: 'right' },
			]);
		});

		test('from end of list with alt window limit', () => {
			const result = usePagination({
				currentPage: 7,
				totalPages: 10,
				windowLimit: 5,
			});
			expect(result).toEqual([
				{ type: 'direction', pageNumber: 6, direction: 'left' },
				{ type: 'page', pageNumber: 1, isActive: false },
				{ type: 'separator', pageNumber: 0 },
				{ type: 'page', pageNumber: 5, isActive: false },
				{ type: 'page', pageNumber: 6, isActive: false },
				{ type: 'page', pageNumber: 7, isActive: true },
				{ type: 'page', pageNumber: 8, isActive: false },
				{ type: 'page', pageNumber: 9, isActive: false },
				{ type: 'page', pageNumber: 10, isActive: false },
				{ type: 'direction', pageNumber: 8, direction: 'right' },
			]);
		});
	});
});
