import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { ControlGroup, ControlGroupProps } from './ControlGroup';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';

afterEach(cleanup);

function renderCheckboxGroup(props?: Partial<ControlGroupProps>) {
	return render(
		<ControlGroup {...props}>
			<Checkbox>Option A</Checkbox>
			<Checkbox>Option B</Checkbox>
			<Checkbox>Option C</Checkbox>
			<Checkbox>Option D</Checkbox>
		</ControlGroup>
	);
}

function renderRadioGroup(props?: Partial<ControlGroupProps>) {
	return render(
		<ControlGroup {...props}>
			<Radio>Option A</Radio>
			<Radio>Option B</Radio>
			<Radio>Option C</Radio>
			<Radio>Option D</Radio>
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

		it('renders a valid HTML structure', () => {
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

		it('renders a valid HTML structure when invalid', () => {
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

		it('renders a valid HTML structure', () => {
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

		it('renders a valid HTML structure invalid', () => {
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
