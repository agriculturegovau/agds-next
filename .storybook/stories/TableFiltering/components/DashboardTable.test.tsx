import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { DashboardTable, DashboardTableProps } from './DashboardTable';
import { useTestData } from '../lib/testData';
import { useSortAndFilter } from '../lib/useSortAndFilter';

afterEach(cleanup);

const DashboardTableTest = ({ loading }: { loading: boolean }) => {
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

	const caption = 'Table caption';

	return (
		<DashboardTable
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
				caption,
			}}
		/>
	);
};

describe('DashboardTable', () => {
	describe('when loading', () => {});

	describe('when data is loaded', () => {
		it('renders correctly', () => {
			const { container } = render(<DashboardTableTest loading={false} />);
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = render(<DashboardTableTest loading={false} />);
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
});
