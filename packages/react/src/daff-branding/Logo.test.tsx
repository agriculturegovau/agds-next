import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { Logo } from './Logo';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

describe('Logo', () => {
	it('renders correctly', () => {
		const { container } = render(<Logo />);
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = render(<Logo />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
