import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { TextLinkExternal } from './TextLinkExternal';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTextLinkExternal() {
	return render(
		<TextLinkExternal
			data-testid="example"
			href="https://design-system.agriculture.gov.au"
		>
			External link
		</TextLinkExternal>
	);
}

describe('TextLinkExternal', () => {
	it('renders correctly', () => {
		const { container } = renderTextLinkExternal();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTextLinkExternal();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('opens link in a new tab', () => {
		renderTextLinkExternal();
		const el = screen.getByTestId('example');
		expect(el).toHaveAttribute('target', '_blank');
		expect(el).toHaveAttribute('rel', 'noopener');
	});

	it('announces to a screen reader that the link will open in a new tab', () => {
		renderTextLinkExternal();
		const el = screen.getByTestId('example');
		expect(el).toHaveTextContent('External link, opens in a new tab');
	});
});
