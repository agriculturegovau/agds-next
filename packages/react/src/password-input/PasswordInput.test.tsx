import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
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

	it('Toggles input type', async () => {
		const { container } = renderPasswordInput({
			label: 'Password',
		});

		const inputElement = await container.querySelector('input');
		expect(inputElement).toBeInTheDocument();
		if (!inputElement) return;

		const checkboxElement = await container.querySelector(
			'input[type="checkbox"]'
		);
		expect(checkboxElement).toBeInTheDocument();
		if (!checkboxElement) return;

		expect(inputElement).toHaveAttribute('type', 'password');
		await userEvent.click(checkboxElement);
		expect(inputElement).toHaveAttribute('type', 'text');
		await userEvent.click(checkboxElement);
		expect(inputElement).toHaveAttribute('type', 'password');
	});
});
