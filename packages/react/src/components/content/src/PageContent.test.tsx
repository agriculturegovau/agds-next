import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { PageContent, PageContentProps } from './PageContent';

afterEach(cleanup);

function renderPageContent(props?: Partial<PageContentProps>) {
	return render(
		<PageContent {...props}>
			<p>Section content</p>
		</PageContent>
	);
}

describe('PageContent', () => {
	it('renders correctly', () => {
		const { container } = renderPageContent();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderPageContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
