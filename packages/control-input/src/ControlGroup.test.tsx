import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ControlGroup, ControlGroupProps } from './ControlGroup';
import { Checkbox } from './Checkbox';

function renderControlGroup(props?: Partial<CalloutProps>) {
	return render(
		<ControlGroup {...props}>
			<Checkbox>Option A</Checkbox>
			<Checkbox>Option B</Checkbox>
			<Checkbox>Option C</Checkbox>
			<Checkbox>Option D</Checkbox>
		</ControlGroup>
	);
}

describe('ControlGroup', () => {
	it('renders correctly', () => {
		const { container } = renderControlGroup({ label: 'Control group label' });
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderControlGroup({ label: 'Control group label' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
