import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useRef } from 'react';
import { cleanup, render, waitFor } from '../../../test-utils';
import { ExampleSmall } from './ExampleSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';

afterEach(cleanup);

function SmallFilteringPatternTest({ loading }: { loading: boolean }) {
	const tableRef = useRef<HTMLTableElement>(null);

	const { sort, filters, pagination, setSort, setFilters, setPagination } =
		useSortAndFilter({
			tableRef,
		});

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
		<ExampleSmall
			{...{
				sort,
				setSort,
				filters,
				setFilters,
				pagination,
				setPagination,
				totalPages,
				totalItems,
				loading,
				data,
				tableCaption,
				tableRef,
			}}
		/>
	);
}

describe('SmallFilteringPattern', () => {
	it('renders a valid HTML structure when loading', async () => {
		const { container } = render(<SmallFilteringPatternTest loading />);
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
		const { container } = render(<SmallFilteringPatternTest loading={false} />);

		// Wait for the data to be loaded
		await waitFor(() =>
			expect(container.querySelector('caption')?.textContent).toContain('items')
		);

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
