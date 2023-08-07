import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup, screen } from '../../../../test-utils';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { ControlGroup, ControlGroupProps } from './ControlGroup';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCheckboxGroup(props?: Partial<ControlGroupProps>) {
	return render(
		<ControlGroup {...props}>
			<Checkbox data-testid="option-a">Option A</Checkbox>
			<Checkbox data-testid="option-b">Option B</Checkbox>
			<Checkbox data-testid="option-c">Option C</Checkbox>
			<Checkbox data-testid="option-d">Option D</Checkbox>
		</ControlGroup>
	);
}

function renderRadioGroup(props?: Partial<ControlGroupProps>) {
	return render(
		<ControlGroup {...props}>
			<Radio data-testid="option-a">Option A</Radio>
			<Radio data-testid="option-b">Option B</Radio>
			<Radio data-testid="option-c">Option C</Radio>
			<Radio data-testid="option-d">Option D</Radio>
		</ControlGroup>
	);
}

describe('ControlGroup ', () => {
	describe('With Checkboxes', () => {
		it('renders correctly', () => {
			const { container } = renderCheckboxGroup({
				label: 'Control group label',
			});
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderCheckboxGroup({
				label: 'Control group label',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('renders correctly when invalid', () => {
			const { container } = renderCheckboxGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders correct aria attributes when invalid', () => {
			renderCheckboxGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			const messageId = screen.getByText('Error message').getAttribute('id');
			[
				screen.getByTestId('option-a'),
				screen.getByTestId('option-b'),
				screen.getByTestId('option-c'),
				screen.getByTestId('option-d'),
			].forEach((option) => {
				expect(option).toHaveAttribute('aria-describedby', messageId);
				expect(option).toHaveAttribute('aria-invalid', 'true');
			});
		});

		it('renders valid HTML with no a11y violations when invalid', () => {
			const { container } = renderCheckboxGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});

	describe('With Radios', () => {
		it('renders correctly', () => {
			const { container } = renderRadioGroup({ label: 'Control group label' });
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderRadioGroup({ label: 'Control group label' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});

		it('renders correctly when invalid', () => {
			const { container } = renderRadioGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders correct aria attributes when invalid', () => {
			renderRadioGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			const messageId = screen.getByText('Error message').getAttribute('id');
			[
				screen.getByTestId('option-a'),
				screen.getByTestId('option-b'),
				screen.getByTestId('option-c'),
				screen.getByTestId('option-d'),
			].forEach((option) => {
				expect(option).toHaveAttribute('aria-describedby', messageId);
				expect(option).toHaveAttribute('aria-invalid', 'true');
			});
		});

		it('renders valid HTML with no a11y violations when invalid', () => {
			const { container } = renderRadioGroup({
				label: 'Control group label',
				hint: 'Hint text',
				message: 'Error message',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});
});
