import { findBestMatch, flattenItems, hasSubLevelActiveItem } from './utils';
import { defaultTestingProps } from './test-utils';

describe('findBestMatch', () => {
	test('works as expected', () => {
		expect(findBestMatch(defaultTestingProps.items, '/welcome')).toEqual(
			'/welcome'
		);
	});
	test('works with a nested active path', () => {
		expect(
			findBestMatch(defaultTestingProps.items, '/in-detail/record-keeping/tax')
		).toEqual('/in-detail/record-keeping/tax');
	});
	test('works when a hash is present in the active path', () => {
		expect(
			findBestMatch(
				defaultTestingProps.items,
				'/in-detail/record-keeping/tax#hash'
			)
		).toEqual('/in-detail/record-keeping/tax');
	});
});

describe('flattenItems', () => {
	test('has correct array length', () => {
		expect(flattenItems(defaultTestingProps.items)).toHaveLength(12);
	});
});

describe('hasSubLevelActiveItem', () => {
	const activePath = '/in-detail/record-keeping';
	test.each(
		defaultTestingProps.items.map((item) => {
			return { ...item, expected: item.label === 'In detail' };
		})
	)('$label', ({ items, expected }) => {
		expect(hasSubLevelActiveItem(items, activePath)).toBe(expected);
	});
});
