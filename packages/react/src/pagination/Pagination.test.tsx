import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Pagination, PaginationProps } from './Pagination';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPagination(props: PaginationProps) {
	return render(<Pagination {...props} />);
}

describe('Pagination', () => {
	it('renders correctly', () => {
		const { container } = renderPagination({
			currentPage: 5,
			totalPages: 10,
			generateHref: (pageNumber) => `page-${pageNumber}`,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPagination({
			currentPage: 5,
			totalPages: 10,
			generateHref: (pageNumber) => `page-${pageNumber}`,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
