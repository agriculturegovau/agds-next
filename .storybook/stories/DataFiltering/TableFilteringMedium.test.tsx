import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../test-utils';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { generateBusinessData } from './lib/generateBusinessData';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const generatedData = generateBusinessData()
	.slice(0, 1)
	.map((i, index) => ({ ...i, index }));

function TableFilteringMediumLoaded() {
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
				<TableFilteringMedium />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

function TableFilteringMediumLoading() {
	const sortAndFilter = useSortAndFilter();
	const data = { loading: true, data: [], totalPages: 0, totalItems: 0 };
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<TableFilteringMedium />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

describe('MediumFilteringPattern', () => {
	it('renders valid HTML with no a11y violations when loading', async () => {
		const { container } = render(<TableFilteringMediumLoading />);
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

	it('renders valid HTML with no a11y violations when loaded', async () => {
		const { container } = render(<TableFilteringMediumLoaded />);

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
