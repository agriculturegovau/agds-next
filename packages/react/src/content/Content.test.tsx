import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Content, ContentProps } from './Content';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderContent(props?: Partial<ContentProps>) {
	return render(
		<Content {...props}>
			<p>Section content</p>
		</Content>
	);
}

describe('Content', () => {
	it('renders correctly', () => {
		const { container } = renderContent();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
