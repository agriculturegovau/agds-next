import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Divider } from './Divider';

afterEach(cleanup);

function renderDivider() {
	return render(<Divider />);
}

describe('Divider', () => {
	it('renders correctly', () => {
		const { container } = renderDivider();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderDivider();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
