import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { ExampleMedium } from './ExampleMedium';
import { useTestData } from './lib/testData';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption } from './lib/utils';

afterEach(cleanup);

function MediumFilteringPatternTest({ loading }: { loading: boolean }) {
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

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
	});

	return (
		<ExampleMedium
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
				totalItems,
				loading,
				data,
				tableCaption,
			}}
		/>
	);
}

describe('MediumFilteringPattern', () => {
	it('renders correctly', () => {
		const { container } = render(
			<MediumFilteringPatternTest loading={false} />
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(
			<MediumFilteringPatternTest loading={false} />
		);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],

			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
