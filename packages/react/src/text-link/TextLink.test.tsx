import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { TextLink } from './TextLink';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTextLink();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
