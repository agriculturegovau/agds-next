import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, waitFor, act } from '../../../test-utils';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useData } from './lib/utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function TableFilteringMediumTest({ loading }: { loading: boolean }) {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });
	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={{ ...data, loading }}>
				<TableFilteringMedium />
			</DataProvider>
		</SortAndFilterProvider>
	);
}

describe('MediumFilteringPattern', () => {
	it('renders valid HTML with no a11y violations when loading', async () => {
		const { container } = render(<TableFilteringMediumTest loading />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('renders valid HTML with no a11y violations when loaded', async () => {
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

		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
