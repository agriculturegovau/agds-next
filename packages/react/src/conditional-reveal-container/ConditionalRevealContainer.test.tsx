import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from '../../../../test-utils';
import { useToggleState } from '../core';
import {
	ConditionalRevealContainer,
	type ConditionalRevealContainerProps,
} from './ConditionalRevealContainer';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const childTestID = 'child-element';
const buttonLabel = 'Toggle visibility';

const TestComponent = ({
	visible = false,
}: ConditionalRevealContainerProps) => {
	const [isVisible, toggleIsVisible] = useToggleState<boolean>(
		visible,
		!visible
	);

	return (
		<>
			<button onClick={toggleIsVisible} type="button">
				{buttonLabel}
			</button>
			<ConditionalRevealContainer visible={isVisible}>
				<p data-testid={childTestID}>conditional-content</p>
			</ConditionalRevealContainer>
		</>
	);
};

function renderConditionalRevealContainer(
	props: ConditionalRevealContainerProps
) {
	return render(<TestComponent {...props} />);
}

describe('ConditionalRevealContainer', () => {
	it('renders correctly', () => {
		const { container } = renderConditionalRevealContainer({ visible: true });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderConditionalRevealContainer({ visible: true });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('does not render the children elements when the prop `visible` is set to `undefined`', () => {
		renderConditionalRevealContainer({ visible: undefined });

		const childElement = screen.queryByTestId(childTestID);
		expect(childElement).toBe(null);
	});

	it('renders the children elements when the prop `visible` is changed from "false" to "true"', async () => {
		renderConditionalRevealContainer({ visible: false });
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
