import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { ExampleSmall } from './ExampleSmall';
import { useTestData } from './lib/testData';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption } from './lib/utils';

afterEach(cleanup);

function SmallFilteringPatternTest({ loading }: { loading: boolean }) {
	const {
		sort,
		filters,
		pagination,
		resetPagination,
		setSort,
		setFilters,
		setPagination,
	} = useSortAndFilter();

	const { data, totalPages, totalItems } = useTestData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
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
				resetPagination,
				totalPages,
				totalItems,
				loading,
				data,
				tableCaption,
			}}
		/>
	);
}

describe('SmallFilteringPattern', () => {
	it('renders correctly', () => {
		const { container } = render(<SmallFilteringPatternTest loading={false} />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<SmallFilteringPatternTest loading={false} />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
