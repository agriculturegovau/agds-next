import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonLink } from './Button';

describe('Button', () => {
	it('renders correctly with minimal props', () => {
		render(<Button>My button</Button>);
		const el = screen.getByText('My button');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('BUTTON');
		expect(el).toHaveAccessibleName('My button');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<Button>My button</Button>);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
	it('responds to an onClick event', async () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>My button</Button>);
		await userEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

describe('ButtonLink', () => {
	it('renders correctly with minimal props', () => {
		render(<ButtonLink href="#">My button link</ButtonLink>);
		const el = screen.getByText('My button link');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '#');
		expect(el).toHaveAccessibleName('My button link');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(
			<ButtonLink href="#">My button link</ButtonLink>
		);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
