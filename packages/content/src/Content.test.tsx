import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { Content, ContentProps } from './Content';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
