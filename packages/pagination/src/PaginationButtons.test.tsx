import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { PaginationButtons, PaginationButtonProps } from './PaginationButtons';

afterEach(cleanup);

function renderPaginationButtons(props?: Partial<PaginationButtonProps>) {
	return render(
		<PaginationButtons
			currentPage={5}
			totalPages={10}
			generateHref={(pageNumber) => `page-${pageNumber}`}
			{...props}
		/>
	);
}

describe('PaginationButtons', () => {
	it('renders correctly', () => {
		const { container } = renderPaginationButtons();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderPaginationButtons();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
