import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../../../test-utils';
import { Checkbox, CheckboxProps } from './Checkbox';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCheckbox(props?: CheckboxProps) {
	return render(
		<Checkbox data-testid="example" name="my-checkbox" {...props}>
			My checkbox
		</Checkbox>
	);
}

function getCheckbox() {
	return screen.getByTestId('example');
}

describe('Checkbox', () => {
	it('renders correctly', () => {
		const { container } = renderCheckbox();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCheckbox();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders correct attributes', () => {
		renderCheckbox();
		const el = getCheckbox();
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('INPUT');
		expect(el).toHaveAttribute('type', 'checkbox');
		expect(el).toHaveAttribute('name', 'my-checkbox');
		expect(el).not.toBeChecked();
		expect(el).toHaveAccessibleName('My checkbox');
	});

	it('responds when clicked', async () => {
		renderCheckbox();
		expect(getCheckbox()).not.toBeChecked();
		await userEvent.click(getCheckbox());
		expect(getCheckbox()).toBeChecked();
	});

	describe('checked', () => {
		it('renders correct attributes', () => {
			renderCheckbox({ checked: true, onChange: jest.fn() });
			const el = getCheckbox();
			expect(el).toBeChecked();
		});
	});

	describe('invalid', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderCheckbox({ invalid: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('renders correct attributes', () => {
			renderCheckbox({ invalid: true });
			const el = getCheckbox();
			expect(el).toHaveAttribute('aria-invalid', 'true');
		});
	});

	describe('indeterminate', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderCheckbox({
				checked: false,
				indeterminate: true,
				onChange: jest.fn(),
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('renders correct attributes', () => {
			renderCheckbox({
				checked: false,
				indeterminate: true,
				onChange: jest.fn(),
			});
			const el = getCheckbox();
			expect(el).not.toHaveAttribute('checked');
			expect(el).toHaveAttribute('aria-checked', 'mixed');
		});

		it('overrides checked prop', () => {
			renderCheckbox({
				indeterminate: true,
				checked: true,
				onChange: jest.fn(),
			});
			const el = getCheckbox();
			expect(el).not.toHaveAttribute('checked');
			expect(el).toHaveAttribute('aria-checked', 'mixed');
		});
	});
});
