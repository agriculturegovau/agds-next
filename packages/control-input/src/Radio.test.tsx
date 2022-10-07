import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioProps } from './Radio';

function RadioExample(props: RadioProps) {
	return (
		<Radio data-testid="example" name="my-radio" {...props}>
			My Radio
		</Radio>
	);
}

describe('Radio', () => {
	it('renders correctly with minimal props', () => {
		render(<RadioExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('INPUT');
		expect(el).toHaveAttribute('type', 'radio');
		expect(el).toHaveAttribute('name', 'my-radio');
		expect(el).not.toBeChecked();
		expect(el).toHaveAccessibleName('My Radio');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<RadioExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
	it('responds to a change event', async () => {
		render(<RadioExample />);
		await userEvent.click(screen.getByTestId('example'));
		expect(screen.getByTestId('example')).toBeChecked();
	});
});
