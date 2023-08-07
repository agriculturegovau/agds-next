import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { PageContent, PageContentProps } from './PageContent';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPageContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
