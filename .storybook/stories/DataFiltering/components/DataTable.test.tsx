import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { DataProvider, SortAndFilterProvider } from '../lib/contexts';
import { generateBusinessData } from '../lib/generateBusinessData';
import { DataTable } from './DataTable';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const generatedData = generateBusinessData()
	.slice(0, 10)
	.map((i, index) => ({ ...i, index }));

function DataTableLoaded() {
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
				<DataTable />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

function DataTableLoading() {
	const sortAndFilter = useSortAndFilter();
	const data = { loading: true, data: [], totalPages: 0, totalItems: 0 };
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<DataTable />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

describe('DataTable', () => {
	it('renders valid HTML with no a11y violations when loading', async () => {
		const { container } = render(<DataTableLoading />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders valid HTML with no a11y violations when loaded', async () => {
		const { container } = render(<DataTableLoaded />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});

		expect(await axe(container)).toHaveNoViolations();
	});

	it('has accessibility features in table', async () => {
		const { container } = render(<DataTableLoaded />);
		const table = container.querySelector('table');
		// expect(table).toHaveAttribute('aria-labelledby');
		// expect(table).toHaveAttribute('aria-describedby');
		expect(table).toHaveAttribute('aria-rowcount');
	});

	it('has accessibility features in table row', async () => {
		const { container } = render(<DataTableLoaded />);
		const tableRow = container.querySelector('tr:nth-child(2)');
		expect(tableRow).toHaveAttribute('aria-rowindex');
	});
});
