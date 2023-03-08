import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { ExampleLarge } from './ExampleLarge';
import { useTestData } from './lib/testData';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { genetateTableCaption } from './lib/utils';

afterEach(cleanup);

function LargeFilteringPatternTest({ loading }: { loading: boolean }) {
	const {
		sort,
		filters,
		pagination,
		resetPagination,
		setSort,
		setFilters,
		resetFilters,
		removeFilter,
		setPagination,
	} = useSortAndFilter();

	const { data, totalPages, totalItems } = useTestData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<ExampleLarge
			{...{
				sort,
				setSort,
				filters,
				setFilters,
				resetFilters,
				removeFilter,
				pagination,
				setPagination,
				resetPagination,
				totalPages,
				loading,
				data,
				tableCaption,
			}}
		/>
	);
}

describe('LargeFilteringPattern', () => {
	it('renders correctly', () => {
		const { container } = render(<LargeFilteringPatternTest loading={false} />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<LargeFilteringPatternTest loading={false} />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
