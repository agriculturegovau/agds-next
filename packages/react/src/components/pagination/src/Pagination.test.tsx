import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { Pagination, PaginationProps } from './Pagination';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderPagination({
			currentPage: 5,
			totalPages: 10,
			generateHref: (pageNumber) => `page-${pageNumber}`,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
