import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { ContentBleed } from './ContentBleed';
import { Content } from './Content';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderContentBleed() {
	return render(
		<Content>
			<ContentBleed visible={{ md: false }}>
				<p>Content bleed content</p>
			</ContentBleed>
		</Content>
	);
}

describe('ContentBleed', () => {
	it('renders correctly', () => {
		const { container } = renderContentBleed();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderContentBleed();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
