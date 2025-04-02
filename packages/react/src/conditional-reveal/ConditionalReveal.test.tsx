import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from '../../../../test-utils';
import {
	ConditionalReveal,
	type ConditionalRevealProps,
} from './ConditionalReveal';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const childTestID = 'child-element';
const buttonLabel = 'Toggle visibility';

const TestComponent = (props: ConditionalRevealProps) => {
	const [isVisible, setIsVisible] = useState(props.visible);
	const handleToggleVisibility = () => setIsVisible((prev) => !prev);

	return (
		<>
			<button onClick={handleToggleVisibility} type="button">
				{buttonLabel}
			</button>
			<ConditionalReveal visible={isVisible}>
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
		const { container } = renderConditionalReveal({ visible: true });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderConditionalReveal({ visible: true });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('does not render the children elements when the prop `visible` is set to `undefined`', () => {
		renderConditionalReveal({ visible: undefined });

		const childElement = screen.queryByTestId(childTestID);
		expect(childElement).toBe(null);
	});

	it('renders the children elements when the prop `visible` is changed from "false" to "true"', async () => {
		renderConditionalReveal({ visible: false });
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
