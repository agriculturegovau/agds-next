import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useState } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act, fireEvent, render, screen } from '../../../../test-utils';
import { ConditionalReveal } from './ConditionalReveal';
import type { ConditionalRevealProps } from './ConditionalReveal';

expect.extend(toHaveNoViolations);

const childTestID = 'child-element';
const buttonLabel = 'Toggle visibility';
const TestComponent = (props: ConditionalRevealProps) => {
	const { isVisible } = props;
	const [visible, setVisible] = useState(isVisible);

	const handleToggleVisibility = () => setVisible((prev) => !prev);

	return (
		<>
			<button onClick={handleToggleVisibility} type="button">
				{buttonLabel}
			</button>
			<ConditionalReveal isVisible={visible}>
				<p data-testid={childTestID}>conditional-content</p>
			</ConditionalReveal>
		</>
	);
};

function renderConditionalReveal(props: ConditionalRevealProps) {
	return render(<TestComponent {...props} />);
}

describe('ConditionalReveal', () => {
	it('renders correctly', () => {
		const { container } = renderConditionalReveal({ isVisible: true });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderConditionalReveal({ isVisible: true });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders the children elements when the prop `isVisible` is changed from "false" to "true"', async () => {
		renderConditionalReveal({ isVisible: false });
		const initialElement = screen.queryByTestId(childTestID);
		expect(initialElement).toBe(null);

		const buttonElement = screen.getByText(buttonLabel);
		act(() => {
			fireEvent.click(buttonElement);
		});

		const childElement = await screen.findByTestId(childTestID);
		expect(childElement).toBeInTheDocument();
	});
});
