import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Switch, SwitchProps } from './Switch';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSwitch({
			label: 'Show establishments',
			checked: false,
			onChange: () => undefined,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
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
