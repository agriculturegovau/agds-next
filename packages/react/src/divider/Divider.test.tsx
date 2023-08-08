import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Divider } from './Divider';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderDivider() {
	return render(<Divider />);
}

describe('Divider', () => {
	it('renders correctly', () => {
		const { container } = renderDivider();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDivider();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
