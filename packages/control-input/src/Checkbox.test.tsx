import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../../test-utils';
import { Checkbox, CheckboxProps } from './Checkbox';

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

	it('renders a valid HTML structure', () => {
		const { container } = render(<CheckboxExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
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
