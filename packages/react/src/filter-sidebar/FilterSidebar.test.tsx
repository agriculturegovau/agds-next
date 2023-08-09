import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { FilterSidebar } from './FilterSidebar';
import type { FilterSidebarProps } from './FilterSidebar';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderFilterSidebar(props?: Partial<FilterSidebarProps>) {
	return render(<FilterSidebar {...props} />);
}

describe('FilterSidebar', () => {
	it('renders correctly', () => {
		const { container } = renderFilterSidebar({
			numberOfActiveFilters: 1,
		});
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderFilterSidebar({
			numberOfActiveFilters: 1,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
