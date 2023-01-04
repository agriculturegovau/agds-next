import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { ContentBleed } from './ContentBleed';
import { Content } from './Content';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderContentBleed();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
