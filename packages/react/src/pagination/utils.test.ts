import { generatePaginationRangeText } from './utils';

describe('generatePaginationRangeText', () => {
	test('basic usage works correctly', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 50,
				itemsPerPage: 10,
				currentPage: 1,
			})
		).toEqual('1 – 10 of 50 items');

		expect(
			generatePaginationRangeText({
				totalItems: 50,
				itemsPerPage: 10,
				currentPage: 2,
			})
		).toEqual('11 – 20 of 50 items');

		expect(
			generatePaginationRangeText({
				totalItems: 1,
				itemsPerPage: 10,
				currentPage: 1,
			})
		).toEqual('1 – 1 of 1 item');
	});

	test('handles last page correctly', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 45,
				itemsPerPage: 10,
				currentPage: 5,
			})
		).toEqual('41 – 45 of 45 items');
	});

	test('handles singular items correctly ', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 1,
				itemsPerPage: 10,
				currentPage: 1,
			})
		).toEqual('1 – 1 of 1 item');

		expect(
			generatePaginationRangeText({
				totalItems: 1,
				itemsPerPage: 10,
				currentPage: 1,
				singularNoun: 'audit',
				pluralNoun: 'audits',
			})
		).toEqual('1 – 1 of 1 audit');
	});

	test('handles alternative nouns correctly', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 50,
				itemsPerPage: 10,
				currentPage: 1,
				singularNoun: 'audit',
				pluralNoun: 'audits',
			})
		).toEqual('1 – 10 of 50 audits');

		expect(
			generatePaginationRangeText({
				totalItems: 1,
				itemsPerPage: 10,
				currentPage: 1,
				singularNoun: 'audit',
				pluralNoun: 'audits',
			})
		).toEqual('1 – 1 of 1 audit');
	});
});
