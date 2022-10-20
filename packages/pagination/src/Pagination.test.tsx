import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { Pagination, PaginationProps } from './Pagination';

afterEach(cleanup);

function renderPagination(props?: Partial<PaginationProps>) {
	return render(
		<Pagination
			currentPage={5}
			totalPages={10}
			generateHref={(pageNumber) => `page-${pageNumber}`}
			{...props}
		/>
	);
}

describe('Pagination', () => {
	it('renders correctly', () => {
		const { container } = renderPagination();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderPagination();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
