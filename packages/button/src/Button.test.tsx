import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonLink, ButtonProps } from './Button';

function ButtonExample(props: ButtonProps) {
	return (
		<Button data-testid="example" {...props}>
			My button
		</Button>
	);
}

describe('Button', () => {
	it('renders correctly with minimal props', () => {
		render(<ButtonExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('BUTTON');
		expect(el).toHaveAccessibleName('My button');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<ButtonExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
	it('responds to an onClick event', async () => {
		const onClick = jest.fn();
		render(<ButtonExample onClick={onClick} />);
		await userEvent.click(screen.getByTestId('example'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

describe('Button with loading', () => {
	it('renders correctly with minimal props', () => {
		render(<ButtonExample loading />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('BUTTON');
		expect(el).toHaveAccessibleName('Busy');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<ButtonExample loading />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
			},
		});
	});
});

function ButtonLinkExample() {
	return (
		<ButtonLink href="#" data-testid="example">
			My button link
		</ButtonLink>
	);
}

describe('ButtonLink', () => {
	it('renders correctly with minimal props', () => {
		render(<ButtonLinkExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '#');
		expect(el).toHaveAccessibleName('My button link');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<ButtonLinkExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
