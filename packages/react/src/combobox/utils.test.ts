import { filterOptions, generateHighlightStyles } from './utils';

describe('filterOptions', () => {
	test('should filter options correctly', () => {
		const options = [
			{ label: 'lorem', value: 'lorem' },
			{ label: 'ipsum', value: 'ipsum' },
			{ label: 'dolar', value: 'dolar' },
		];
		expect(filterOptions(options, 'lo')).toEqual([options[0]]);
		expect(filterOptions(options, 'rem')).toEqual([options[0]]);
		expect(filterOptions(options, 'lorem')).toEqual([options[0]]);
		expect(filterOptions(options, 'LoReM')).toEqual([options[0]]);
		expect(filterOptions(options, 'LOREM')).toEqual([options[0]]);
		expect(filterOptions(options, 'sum')).toEqual([options[1]]);
		expect(filterOptions(options, 'm')).toEqual([options[0], options[1]]);
		expect(filterOptions(options, 'sit')).toEqual([]);
		expect(filterOptions(options, '')).toEqual(options);
	});

	test('should filter out options from a different array but with the same value', () => {
		expect(
			filterOptions(
				[
					{ label: 'lorem', value: 'lorem' },
					{ label: 'ipsum', value: 'ipsum' },
					{ label: 'dolar', value: 'dolar' },
				],
				undefined,
				// Note: This array is different from the first parameter of `filterOptions`
				[{ label: 'lorem', value: 'lorem' }]
			)
		).toEqual([
			{ label: 'ipsum', value: 'ipsum' },
			{ label: 'dolar', value: 'dolar' },
		]);
	});
});

describe('generateHighlightStyles', () => {
	test('it returns empty empty object with no inputValue', () => {
		expect(generateHighlightStyles()).toEqual({});
		expect(generateHighlightStyles('')).toEqual({});
	});

	test('it returns one selector object for single character inputValue', () => {
		expect(generateHighlightStyles('a')).toEqual({
			'[data-char="a" i]': {
				fontWeight: 'bold',
			},
		});
	});

	test('it returns has and sibling selector objects for multi character inputValue', () => {
		expect(generateHighlightStyles('ab')).toEqual({
			'[data-char="a" i] + [data-char="b" i]': {
				fontWeight: 'bold',
			},
			'[data-char="a" i]:has(+ [data-char="b" i])': {
				fontWeight: 'bold',
			},
		});

		expect(generateHighlightStyles('abc')).toEqual({
			'[data-char="a" i] + [data-char="b" i] + [data-char="c" i]': {
				fontWeight: 'bold',
			},
			'[data-char="a" i] + [data-char="b" i]:has(+ [data-char="c" i])': {
				fontWeight: 'bold',
			},
			'[data-char="a" i]:has(+ [data-char="b" i] + [data-char="c" i])': {
				fontWeight: 'bold',
			},
		});
	});
});
