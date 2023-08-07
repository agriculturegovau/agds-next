import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { PaginationButtons, PaginationButtonsProps } from './PaginationButtons';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPaginationButtons({
			currentPage: 5,
			totalPages: 10,
			onChange: jest.fn(),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
