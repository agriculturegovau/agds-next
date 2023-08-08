import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { SectionContent, SectionContentProps } from './SectionContent';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSectionContent();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
