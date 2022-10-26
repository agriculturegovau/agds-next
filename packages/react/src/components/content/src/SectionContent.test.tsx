import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { SectionContent, SectionContentProps } from './SectionContent';

afterEach(cleanup);

function renderSectionContent(props?: Partial<SectionContentProps>) {
	return render(
		<SectionContent {...props}>
			<p>Section content</p>
		</SectionContent>
	);
}

describe('SectionContent', () => {
	it('renders correctly', () => {
		const { container } = renderSectionContent();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSectionContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
