import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act, cleanup, render } from '../../../../test-utils';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPasswordInput(props: PasswordInputProps) {
	return render(<PasswordInput {...props} />);
}

describe('PasswordInput', () => {
	it('renders correctly', () => {
		const { container } = renderPasswordInput({ label: 'Password' });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPasswordInput({ label: 'Password' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Toggles input type correctly', async () => {
		const { container } = renderPasswordInput({
			label: 'Password',
		});

		const inputElement = container.querySelector('input');
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute('type', 'password');

		if (!inputElement) return;

		const checkboxElement = container.querySelector('input[type="checkbox"]');
		expect(checkboxElement).toBeInTheDocument();
		expect(checkboxElement).toHaveAttribute('aria-controls', inputElement.id);
		if (!checkboxElement) return;

		// Clicking the Checkbox once should change the input type to "text"
		await act(() => userEvent.click(checkboxElement));
		expect(inputElement).toHaveAttribute('type', 'text');

		// Clicking the Checkbox again should change the input type back to "password"
		await act(() => userEvent.click(checkboxElement));
		expect(inputElement).toHaveAttribute('type', 'password');
	});
});
