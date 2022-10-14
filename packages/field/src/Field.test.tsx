import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import { Field, FieldProps } from './Field';

function renderField({
	label = 'Name',
	hint = undefined,
	message = undefined,
	required = true,
	invalid = true,
	valid = undefined,
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
			valid={valid}
			{...props}
		>
			{children}
		</Field>
	);
}

afterEach(cleanup);

describe('Field', () => {
	it('renders correctly', () => {
		const { container } = renderField({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderField({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('automatically generates an ID if no ID is provided', () => {
		renderField({});
		const inputEl = screen.getByTestId('example-input');
		const labelEl = screen.getByText('Name').parentElement as HTMLLabelElement;
		const id = inputEl.id;
		expect(labelEl.htmlFor).toBe(id);
	});

	it('uses ID prop if provided ', () => {
		renderField({ id: 'name' });
		const labelEl = screen.getByText('Name').parentElement as HTMLLabelElement;
		const inputEl = screen.getByTestId('example-input');
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
		it('renders correctly when optional', () => {
			renderField({ required: false });
			const labelEl = screen.getByText('Name')
				.parentElement as HTMLLabelElement;
			expect(labelEl).toBeInTheDocument();
			expect(labelEl).toHaveTextContent('Name(optional)');
		});
		it('renders correctly when required', () => {
			renderField({ required: true });
			const labelEl = screen.getByText('Name')
				.parentElement as HTMLLabelElement;
			expect(labelEl).toBeInTheDocument();
			expect(labelEl).toHaveTextContent('Name');
		});
	});

	describe('FieldHint', () => {
		it('renders correctly', () => {
			const hint = 'Hint text';
			renderField({ hint });
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
			renderField({ message, invalid: true });
			const messageEl = screen.getByText(message);
			const inputEl = screen.getByTestId('example-input');
			expect(messageEl).toBeInTheDocument();
			expect(messageEl).toHaveTextContent(message);
			expect(inputEl.getAttribute('aria-describedby')).toBe(messageEl.id);
		});
	});
});
