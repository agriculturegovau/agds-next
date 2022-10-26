import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { PaginationButtons, PaginationButtonsProps } from './PaginationButtons';

afterEach(cleanup);

function renderPaginationButtons(props: PaginationButtonsProps) {
	return render(<PaginationButtons {...props} />);
}

describe('PaginationButtons', () => {
	it('renders correctly', () => {
		const { container } = renderPaginationButtons({
			currentPage: 5,
			totalPages: 10,
			onChange: jest.fn(),
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderPaginationButtons({
			currentPage: 5,
			totalPages: 10,
			onChange: jest.fn(),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
