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
	describe('when loading', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<TableFilteringSmallLoading />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
					'no-inline-style': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('when loaded', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<TableFilteringSmallLoaded />);

			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
					'no-inline-style': 'off',
				},
			});

			expect(await axe(container)).toHaveNoViolations();
		});

		it('has aria-attributes in Table', async () => {
			const { container } = render(<TableFilteringSmallLoaded />);

			const table = container.querySelector('table');
			expect(table).toHaveAttribute('aria-rowcount', '100');

			// the tr in the header should have aria-rowindex 1
			const tHeadRow = container.querySelector('thead tr');
			expect(tHeadRow).toHaveAttribute('aria-rowindex', '1');

			// the first data row should have aria-rowindex 2
			const tableRow = container.querySelector('tbody tr');
			expect(tableRow).toHaveAttribute('aria-rowindex', '2');
		});
	});
});
