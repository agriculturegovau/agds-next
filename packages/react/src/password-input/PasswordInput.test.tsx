import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPasswordInput(props: PasswordInputProps) {
	return render(<PasswordInput {...props} />);
}

describe('PasswordInput', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderPasswordInput({
				label: 'Password',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderPasswordInput({
				label: 'Password',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderPasswordInput({
				label: 'Name',
				hint: 'Hint text',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderPasswordInput({
				label: 'Name',
				hint: 'Hint text',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('Invalid', () => {
		it('renders correctly', () => {
			const { container } = renderPasswordInput({
				label: 'Name',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderPasswordInput({
				label: 'Name',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('Supports autocomplete attribute', () => {
		it('renders correctly', () => {
			const { container } = renderPasswordInput({
				label: 'Name',
				autoComplete: 'given-name',
			});
			const el = container.querySelector('input');
			expect(el).toHaveAttribute('autocomplete', 'given-name');
		});
	});
});
