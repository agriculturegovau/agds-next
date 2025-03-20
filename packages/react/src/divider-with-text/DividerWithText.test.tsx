import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { DividerWithText } from './DividerWithText';
import type { DividerWithTextProps } from './DividerWithText';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderDividerWithText(props: DividerWithTextProps) {
	return render(<DividerWithText {...props} />);
}

describe('DividerWithText', () => {
	it('renders correctly', () => {
		const { container } = renderDividerWithText({
			children: <p>Divider text</p>,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDividerWithText({
			children: <p>Divider text</p>,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders provided children element', async () => {
		const childTestId = 'test-id';
		renderDividerWithText({
			children: <p data-testid={childTestId}>Divider text</p>,
		});

		const childElement = screen.getByTestId(childTestId);
		expect(childElement).toBeInTheDocument();
	});
});
