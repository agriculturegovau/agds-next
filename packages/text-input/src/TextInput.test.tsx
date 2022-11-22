import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { TextInput, TextInputProps } from './TextInput';

afterEach(cleanup);

function renderTextInput(props: TextInputProps) {
	return render(<TextInput {...props} />);
}

describe('TextInput', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Name',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderTextInput({ label: 'Name' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Name',
				hint: 'Hint text',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderTextInput({
				label: 'Name',
				hint: 'Hint text',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('Invalid', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Name',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderTextInput({
				label: 'Name',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('Supports different input types', () => {
		describe('Email', () => {
			it('renders correctly', () => {
				const { container } = renderTextInput({
					label: 'Email',
					type: 'email',
				});
				const el = container.querySelector('input');
				expect(el).toHaveAttribute('type', 'email');
			});
		});
		describe('Password', () => {
			it('renders correctly', () => {
				const { container } = renderTextInput({
					label: 'Password',
					type: 'password',
				});
				expect(container.querySelector('input')).toHaveAttribute(
					'type',
					'password'
				);
			});
		});
	});

	describe('Supports number input', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Postcode',
				inputMode: 'numeric',
				pattern: '[0-9]*',
				autoComplete: 'postal-code',
			});
			const el = container.querySelector('input');
			expect(el).toHaveAttribute('inputmode', 'numeric');
			expect(el).toHaveAttribute('pattern', '[0-9]*');
			expect(el).toHaveAttribute('autocomplete', 'postal-code');
		});
	});

	describe('Supports autocomplete attribute', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Name',
				autoComplete: 'given-name',
			});
			const el = container.querySelector('input');
			expect(el).toHaveAttribute('autocomplete', 'given-name');
		});
	});

	describe('Search input', () => {
		it('renders correctly', () => {
			const { container } = renderTextInput({
				label: 'Search',
				type: 'search',
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderTextInput({
				label: 'Search',
				type: 'search',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});

		it('hides the icon from screen readers', () => {
			const { container } = renderTextInput({
				label: 'Search',
				type: 'search',
			});
			const el = container.querySelector('svg');
			expect(el).toBeInTheDocument();
			expect(el).toHaveAttribute('aria-hidden', 'true');
			expect(el).toHaveAttribute('focusable', 'false');
		});
	});
});
