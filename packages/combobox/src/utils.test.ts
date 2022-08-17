import { filterOptions, splitLabel } from './utils';

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
});

describe('splitLabel', () => {
	test('it should split a label correctly', () => {
		expect(splitLabel('Australia', '')).toEqual(['Australia']);
		expect(splitLabel('Australia', ' ')).toEqual(['Australia']);
		expect(splitLabel('Australia', 'Lorem')).toEqual(['Australia']);
		expect(splitLabel('Australia', 'AUS')).toEqual(['Aus', 'tralia']);
		expect(splitLabel('Australia', 'aus')).toEqual(['Aus', 'tralia']);
		expect(splitLabel('Australia', 'stra')).toEqual(['Au', 'stra', 'lia']);
		expect(splitLabel('Australia', 'STRA')).toEqual(['Au', 'stra', 'lia']);
		expect(splitLabel('Australia', 'ia')).toEqual(['Austral', 'ia']);
	});
});
