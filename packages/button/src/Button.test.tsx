import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
	test('It renders correctly with minimal props', async () => {
		render(<Button>My button</Button>);
		expect(screen.getByRole('button')).toHaveTextContent('My button');
	});
	test('It responds to an onClick event', async () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>My button</Button>);
		await userEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
	test('Has no a11y violations', async () => {
		const { container } = render(<Button>My button</Button>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
