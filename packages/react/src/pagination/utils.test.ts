import { generatePaginationRangeText } from './utils';

describe('generatePaginationRangeText', () => {
	test('works correctly', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 100,
				firstItem: 10,
				lastItem: 20,
			})
		).toEqual('10 - 20 of 100 items');

		expect(
			generatePaginationRangeText({
				totalItems: 50,
				firstItem: 40,
				lastItem: 45,
			})
		).toEqual('40 - 45 of 50 items');

		expect(
			generatePaginationRangeText({
				totalItems: 1,
				firstItem: 1,
				lastItem: 1,
			})
		).toEqual('1 - 1 of 1 item');
	});

	test('handles alternative nouns correctly', () => {
		expect(
			generatePaginationRangeText({
				totalItems: 100,
				firstItem: 10,
				lastItem: 20,
				singularNoun: 'certificate',
				pluralNoun: 'certificates',
			})
		).toEqual('10 - 20 of 100 certificates');

		expect(
			generatePaginationRangeText({
				totalItems: 1,
				firstItem: 1,
				lastItem: 1,
				singularNoun: 'certificate',
				pluralNoun: 'certificates',
			})
		).toEqual('1 - 1 of 1 certificate');
	});
});
