import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { Logo } from './Logo';

afterEach(cleanup);

describe('Logo', () => {
	it('renders correctly', () => {
		const { container } = render(<Logo />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<Logo />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
