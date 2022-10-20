import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonLink, ButtonLinkProps, ButtonProps } from './Button';

afterEach(cleanup);

function renderButton(props?: Partial<ButtonProps>) {
	return render(
		<Button data-testid="example" {...props}>
			My button
		</Button>
	);
}

describe('Button', () => {
	it('renders correctly', () => {
		const { container } = renderButton();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderButton();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('renders basic attributes correctly', () => {
		renderButton();
		const el = screen.getByTestId('example');
		expect(el.tagName).toBe('BUTTON');
		expect(el).toHaveAccessibleName('My button');
	});

	it('responds to an onClick event', async () => {
		const onClick = jest.fn();
		renderButton({ onClick });
		await userEvent.click(screen.getByTestId('example'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('renders an empty aria-live container', () => {
		const { container } = renderButton();
		const liveRegion = container.querySelector('[aria-live]');
		expect(liveRegion?.childElementCount).toBe(0);
	});

	describe('Loading', () => {
		it('renders correctly', () => {
			const { container } = renderButton({ loading: true });
			expect(container).toMatchSnapshot();
		});

		it('renders correctly with minimal props', () => {
			renderButton({ loading: true });
			const el = screen.getByTestId('example');
			expect(el).toBeInTheDocument();
			expect(el.tagName).toBe('BUTTON');
			expect(el).toHaveAccessibleName('My button Busy');
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderButton({ loading: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: { 'no-inline-style': 'off' },
			});
		});

		it('announces loading label correctly', () => {
			const { container } = renderButton({
				loading: true,
				loadingLabel: 'Processing action',
			});
			const liveRegion = container.querySelector('[aria-live]');
			expect(liveRegion).toHaveTextContent('Processing action');
		});

		it('announces default loadingLabel correctly', () => {
			const { container } = renderButton({ loading: true });
			const liveRegion = container.querySelector('[aria-live]');
			expect(liveRegion).toHaveTextContent('Busy');
		});
	});
});

function renderButtonLink(props?: Partial<ButtonLinkProps>) {
	return render(
		<ButtonLink href="#" data-testid="example" {...props}>
			My button link
		</ButtonLink>
	);
}

describe('ButtonLink', () => {
	it('renders correctly', () => {
		const { container } = renderButtonLink();
		expect(container).toMatchSnapshot();
	});

	it('renders basic attributes correctly', () => {
		renderButtonLink();
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '#');
		expect(el).toHaveAccessibleName('My button link');
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderButtonLink();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
