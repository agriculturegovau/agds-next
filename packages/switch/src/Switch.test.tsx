import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import { Switch, SwitchProps } from './Switch';

afterEach(cleanup);

function renderSwitch(props: SwitchProps) {
	return render(<Switch {...props} />);
}

describe('Switch', () => {
	it('renders correctly', () => {
		const { container } = renderSwitch({
			label: 'Show establishments',
			checked: false,
			onChange: () => undefined,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSwitch({
			label: 'Show establishments',
			checked: false,
			onChange: () => undefined,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});

	it('has correct roles', async () => {
		renderSwitch({
			label: 'Show establishments',
			checked: true,
			onChange: () => undefined,
		});
		const el = await screen.getByRole('switch');
		expect(el).toHaveAttribute('type', 'checkbox');
		expect(el).toHaveAttribute('role', 'switch');
		expect(el).toHaveAttribute('checked');
	});
});
