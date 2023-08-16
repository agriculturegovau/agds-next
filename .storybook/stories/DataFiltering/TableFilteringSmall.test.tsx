import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../test-utils';
import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { generateBusinessData } from './lib/generateBusinessData';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const generatedData = generateBusinessData()
	.slice(0, 10)
	.map((i, idx) => ({ ...i, index: idx }));

function TableFilteringSmallLoaded() {
	const sortAndFilter = useSortAndFilter();
	const data = {
		loading: false,
		data: generatedData,
		totalPages: 10,
		totalItems: 100,
	};
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<TableFilteringSmall />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

function TableFilteringSmallLoading() {
	const sortAndFilter = useSortAndFilter();
	const data = { loading: true, data: [], totalPages: 0, totalItems: 0 };
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<TableFilteringSmall />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

describe('SmallFilteringPattern', () => {
	it('renders valid HTML with no a11y violations when loading', async () => {
		const { container } = render(<TableFilteringSmallLoading />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders valid HTML with no a11y violations when loaded', async () => {
		const { container } = render(<TableFilteringSmallLoaded />);

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});

		expect(await axe(container)).toHaveNoViolations();
	});
});
