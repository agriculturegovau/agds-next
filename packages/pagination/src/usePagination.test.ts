import { usePagination } from './usePagination';

describe('usePagination', () => {
	test('start of list', () => {
		const result = usePagination({ currentPage: 1, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'page', page: 1, isSelected: true },
			{ type: 'page', page: 2, isSelected: false },
			{ type: 'page', page: 3, isSelected: false },
			{ type: 'divider' },
			{ type: 'page', page: 10, isSelected: false },
			{ type: 'direction', page: 2, direction: 'right' },
		]);
	});
	test('middle of list', () => {
		const result = usePagination({ currentPage: 5, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'direction', page: 4, direction: 'left' },
			{ type: 'page', page: 1, isSelected: false },
			{ type: 'divider' },
			{ type: 'page', page: 4, isSelected: false },
			{ type: 'page', page: 5, isSelected: true },
			{ type: 'page', page: 6, isSelected: false },
			{ type: 'divider' },
			{ type: 'page', page: 10, isSelected: false },
			{ type: 'direction', page: 6, direction: 'right' },
		]);
	});
	test('end of list', () => {
		const result = usePagination({ currentPage: 10, totalPages: 10 });
		expect(result).toEqual([
			{ type: 'direction', page: 9, direction: 'left' },
			{ type: 'page', page: 1, isSelected: false },
			{ type: 'divider' },
			{ type: 'page', page: 8, isSelected: false },
			{ type: 'page', page: 9, isSelected: false },
			{ type: 'page', page: 10, isSelected: true },
		]);
	});
});
