import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { TextLink } from './TextLink';

afterEach(cleanup);

function renderTextLink() {
	return render(
		<TextLink data-testid="example" href="/example">
			Internal link
		</TextLink>
	);
}

describe('TextLink', () => {
	it('renders correctly', () => {
		const { container } = renderTextLink();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderTextLink();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
