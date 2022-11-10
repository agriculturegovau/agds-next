import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render } from '../../../test-utils';
import { ControlGroup, ControlGroupProps } from './ControlGroup';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';

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

describe('ControlGroup with Checkboxes', () => {
	it('renders correctly', () => {
		const { container } = renderCheckboxGroup({ label: 'Control group label' });
		expect(container).toMatchSnapshot();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});

	it('renders correctly with invalid state', () => {
		const { container } = renderCheckboxGroup({
			label: 'Control group label',
			hint: 'This is a hint',
			message: 'This is an error message',
			invalid: true,
		});
		expect(container).toMatchSnapshot();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});

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

describe('ControlGroup with Radios', () => {
	it('renders correctly', () => {
		const { container } = renderRadioGroup({ label: 'Control group label' });
		expect(container).toMatchSnapshot();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});

	it('renders correctly with invalid state', () => {
		const { container } = renderRadioGroup({
			label: 'Control group label',
			hint: 'This is a hint',
			message: 'This is an error message',
			invalid: true,
		});
		expect(container).toMatchSnapshot();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
