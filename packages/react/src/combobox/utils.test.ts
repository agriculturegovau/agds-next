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

describe('splitLabel', () => {
	test('it should split a label correctly', () => {
		const option = 'Australia';
		expect(splitLabel(option, '')).toEqual(['Australia']);
		expect(splitLabel(option, ' ')).toEqual(['Australia']);
		expect(splitLabel(option, 'Lorem')).toEqual(['Australia']);
		expect(splitLabel(option, 'AUS')).toEqual(['Aus', 'tralia']);
		expect(splitLabel(option, 'aus')).toEqual(['Aus', 'tralia']);
		expect(splitLabel(option, 'stra')).toEqual(['Au', 'stra', 'lia']);
		expect(splitLabel(option, 'STRA')).toEqual(['Au', 'stra', 'lia']);
		expect(splitLabel(option, 'ia')).toEqual(['Austral', 'ia']);
	});

	test('it should split a multi word labels correctly', () => {
		const option = 'New Zealand';
		expect(splitLabel(option, '')).toEqual(['New Zealand']);
		expect(splitLabel(option, 'New')).toEqual(['New', ' Zealand']);
		expect(splitLabel(option, 'New ')).toEqual(['New ', 'Zealand']);
		expect(splitLabel(option, 'New Z')).toEqual(['New Z', 'ealand']);
	});
});
