import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen } from '../../../../test-utils';
import { DividerWithText } from './DividerWithText';
import type { DividerWithTextProps } from './DividerWithText';

expect.extend(toHaveNoViolations);

function renderDividerWithText(props?: Partial<DividerWithTextProps>) {
	return render(<DividerWithText {...props} />);
}

describe('DividerWithText', () => {
	it('renders correctly', () => {
		const { container } = renderDividerWithText({
			label: 'Or',
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderDividerWithText();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders the label heading using the `as` prop', async () => {
		const labelText = 'Business';
		renderDividerWithText({
			label: labelText,
			as: 'h2',
		});

		const labelElement = screen.getByText(labelText);
		expect(labelElement).toBeInTheDocument();
		expect(labelElement.nodeName).toBe('H2');
	});
});
