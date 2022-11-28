import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '../../../test-utils';
import { Field, FieldProps } from './Field';

afterEach(cleanup);

function renderField({
	label = '',
	hint = undefined,
	message = undefined,
	required = true,
	invalid = true,
	hideOptionalLabel = false,
	children = (a11yProps) => (
		<input data-testid="example-input" type="text" {...a11yProps} />
	),
	...props
}: Partial<FieldProps>) {
	return render(
		<Field
			label={label}
			hint={hint}
			message={message}
			required={required}
			invalid={invalid}
			hideOptionalLabel={hideOptionalLabel}
			{...props}
		>
			{children}
		</Field>
	);
}

function getLabelElement() {
	return screen.getByText('Name').parentElement as HTMLLabelElement;
}

function getInputElement() {
	return screen.getByTestId('example-input');
}

describe('Field', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderField({ label: 'Name' });
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderField({ label: 'Name' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderField({
				label: 'Name',
				hint: 'Hint text',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderField({
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
			const { container } = renderField({
				label: 'Name',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderField({
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

	it('automatically generates an ID if no ID is provided', () => {
		renderField({ label: 'Name' });
		const inputEl = getInputElement();
		const labelEl = getLabelElement();
		const id = inputEl.id;
		expect(labelEl.htmlFor).toBe(id);
	});

	it('uses ID prop if provided ', () => {
		renderField({ label: 'Name', id: 'name' });
		const labelEl = getLabelElement();
		const inputEl = getInputElement();
		expect(labelEl.htmlFor).toBe('name');
		expect(inputEl.id).toBe('name');
	});

	it('provides the correct a11y props', () => {
		const label = 'Name';
		const hint = 'Hint text';
		const message = 'This field is required';
		renderField({ label, hint, message, invalid: true });
		const labelEl = screen.getByText(label).parentElement as HTMLLabelElement;
		const hintEl = screen.getByText(hint);
		const messageEl = screen.getByText(message);
		const inputEl = screen.getByTestId('example-input');
		expect(inputEl.getAttribute('aria-required')).toBe('true');
		expect(inputEl.getAttribute('aria-describedby')).toBe(
			[messageEl.id, hintEl.id].join(' ')
		);
		expect(inputEl.id).toBe(labelEl.htmlFor);
	});

	describe('FieldLabel', () => {
		describe('Optional', () => {
			it('renders correctly', () => {
				renderField({ label: 'Name', required: false });
				const labelEl = document.querySelector('label');
				expect(labelEl?.textContent).toBe('Name(optional)');
			});
			it('renders correctly when optional label is hidden', () => {
				renderField({
					label: 'Name',
					required: false,
					hideOptionalLabel: true,
				});
				const labelEl = document.querySelector('label');
				expect(labelEl?.textContent).toBe('Name');
			});
		});
		describe('Required', () => {
			it('renders correctly', () => {
				renderField({ label: 'Name', required: true });
				const labelEl = document.querySelector('label');
				expect(labelEl?.textContent).toBe('Name');
			});
			it('renders correctly when optional label is hidden', () => {
				renderField({
					label: 'Name',
					required: false,
					hideOptionalLabel: true,
				});
				const labelEl = document.querySelector('label');
				expect(labelEl?.textContent).toBe('Name');
			});
		});
	});

	describe('FieldHint', () => {
		it('renders correctly', () => {
			const hint = 'Hint text';
			renderField({ label: 'Name', hint });
			const hintEl = screen.getByText(hint);
			const inputEl = screen.getByTestId('example-input');
			expect(hintEl).toBeInTheDocument();
			expect(hintEl).toHaveTextContent(hint);
			expect(inputEl.getAttribute('aria-describedby')).toBe(hintEl.id);
		});
	});

	describe('FieldMessage', () => {
		it('renders correctly', () => {
			const message = 'This field is required';
			renderField({ label: 'Name', message, invalid: true });
			const messageEl = screen.getByText(message);
			const inputEl = screen.getByTestId('example-input');
			expect(messageEl).toBeInTheDocument();
			expect(messageEl).toHaveTextContent(message);
			expect(inputEl.getAttribute('aria-describedby')).toBe(messageEl.id);
		});
	});
});
