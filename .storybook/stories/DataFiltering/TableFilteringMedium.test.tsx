import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, waitFor } from '../../../test-utils';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

afterEach(cleanup);

function TableFilteringMediumTest({ loading }: { loading: boolean }) {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;

	const { data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider
				value={{
					data: data,
					loading: loading,
					totalPages: totalPages,
					totalItems: totalItems,
				}}
			>
				<TableFilteringMedium tableCaption={tableCaption} />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

describe('MediumFilteringPattern', () => {
	it('renders a valid HTML structure when loading', async () => {
		const { container } = render(<TableFilteringMediumTest loading />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});

	it('renders a valid HTML structure when loaded', async () => {
		const { container } = render(<TableFilteringMediumTest loading={false} />);

		// Wait for the data to be loaded
		await waitFor(() =>
			expect(container.querySelector('caption')?.textContent).toContain('items')
		);

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});
});
