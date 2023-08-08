import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Field, FieldProps } from './Field';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderField({
	label = '',
	hint = undefined,
	message = undefined,
	required = false,
	invalid = false,
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

const label = 'Name';
const hint = 'Hint text';
const message = 'This field is required';

function getLabelElement() {
	return screen.getByText(label).parentElement as HTMLLabelElement;
}

function getInputElement() {
	return screen.getByTestId('example-input');
}

describe('Field', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderField({ label });
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderField({ label });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderField({ label, hint });
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderField({ label, hint });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('Invalid', () => {
		it('renders correctly', () => {
			const { container } = renderField({ label, message, invalid: true });
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderField({ label, message, invalid: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('automatically generates an ID if no ID is provided', () => {
		renderField({ label });
		const inputEl = getInputElement();
		const labelEl = getLabelElement();
		const id = inputEl.id;
		expect(id).toMatch(/^field-(.*)$/);
		expect(labelEl.htmlFor).toBe(id);
	});

	it('uses ID prop if provided ', () => {
		const id = 'name';
		renderField({ label, id });
		const labelEl = getLabelElement();
		const inputEl = getInputElement();
		expect(labelEl.htmlFor).toBe(id);
		expect(inputEl.id).toBe(id);
	});

	describe('Field a11yProps', () => {
		it('provides the correct a11y props', () => {
			renderField({ label, hint });
			const labelEl = getLabelElement();
			const hintEl = screen.getByText(hint);
			const inputEl = getInputElement();
			expect(inputEl.getAttribute('aria-required')).toBe('false');
			expect(inputEl.getAttribute('aria-invalid')).toBe('false');
			expect(inputEl.getAttribute('aria-describedby')).toBe(hintEl.id);
			expect(inputEl.id).toBe(labelEl.htmlFor);
		});
		it('provides the correct a11y props when invalid', () => {
			renderField({ label, hint, message, invalid: true });
			const labelEl = getLabelElement();
			const hintEl = screen.getByText(hint);
			const messageEl = screen.getByText(message);
			const inputEl = getInputElement();
			expect(inputEl.getAttribute('aria-required')).toBe('false');
			expect(inputEl.getAttribute('aria-invalid')).toBe('true');
			expect(inputEl.getAttribute('aria-describedby')).toBe(
				`${messageEl.id} ${hintEl.id}`
			);
			expect(inputEl.id).toBe(labelEl.htmlFor);
		});
	});

	describe('FieldLabel', () => {
		describe('Optional', () => {
			it('renders correctly', () => {
				renderField({ label, required: false });
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe(`${label} (optional)`);
			});
			it('renders correctly when optional label is hidden', () => {
				renderField({
					label,
					required: false,
					hideOptionalLabel: true,
				});
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe(label);
			});
		});

		describe('Required', () => {
			it('renders correctly', () => {
				renderField({ label, required: true });
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe(label);
			});
			it('renders correctly when optional label is hidden', () => {
				renderField({
					label,
					required: false,
					hideOptionalLabel: true,
				});
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe('Name');
			});
		});

		describe('Secondary Label', () => {
			const secondaryLabel = '(dd/mm/yyyy)';

			it('renders correctly when optional', () => {
				renderField({ label, secondaryLabel, required: false });
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe(
					`${label} ${secondaryLabel} (optional)`
				);
			});

			it('renders correctly when true', () => {
				renderField({ label, secondaryLabel, required: true });
				const labelEl = getLabelElement();
				expect(labelEl.textContent).toBe(`${label} ${secondaryLabel}`);
			});
		});
	});

	describe('FieldHint', () => {
		it('renders correctly', () => {
			renderField({ label, hint });
			const hintEl = screen.getByText(hint);
			expect(hintEl).toBeInTheDocument();
			expect(hintEl).toBeInstanceOf(HTMLSpanElement);
			expect(hintEl).toHaveTextContent(hint);
			const inputEl = getInputElement();
			expect(inputEl.getAttribute('aria-describedby')).toBe(hintEl.id);
		});
	});

	describe('FieldMessage', () => {
		it('renders correctly', () => {
			renderField({ label, message, invalid: true });
			const messageEl = screen.getByText(message);
			expect(messageEl).toBeInTheDocument();
			expect(messageEl).toBeInstanceOf(HTMLSpanElement);
			expect(messageEl).toHaveTextContent(message);
			const inputEl = getInputElement();
			expect(inputEl.getAttribute('aria-describedby')).toBe(messageEl.id);
		});

		it('does not render when invalid is false', () => {
			renderField({ label, message, invalid: false });
			const messageEl = screen.queryByText(message);
			expect(messageEl).not.toBeInTheDocument();
		});
	});
});
