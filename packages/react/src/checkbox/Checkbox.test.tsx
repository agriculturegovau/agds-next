import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../../../test-utils';
import { Checkbox, CheckboxProps } from './Checkbox';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function CheckboxExample(props: CheckboxProps) {
	return (
		<Checkbox data-testid="example" name="my-checkbox" {...props}>
			My checkbox
		</Checkbox>
	);
}

describe('Checkbox', () => {
	it('renders correctly with minimal props', () => {
		render(<CheckboxExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('INPUT');
		expect(el).toHaveAttribute('type', 'checkbox');
		expect(el).toHaveAttribute('name', 'my-checkbox');
		expect(el).not.toBeChecked();
		expect(el).toHaveAccessibleName('My checkbox');
	});

	it('renders correctly when invalid ', () => {
		render(<CheckboxExample invalid />);
		const el = screen.getByTestId('example');
		expect(el).toHaveAttribute('aria-invalid', 'true');
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = render(<CheckboxExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders correctly', () => {
		const { container } = render(<CheckboxExample />);
		expect(container).toMatchSnapshot();
	});

	it('responds to a change event', async () => {
		render(<CheckboxExample />);
		await userEvent.click(screen.getByTestId('example'));
		expect(screen.getByTestId('example')).toBeChecked();
	});
});
