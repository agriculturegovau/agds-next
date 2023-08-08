import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../../../test-utils';
import { AvatarIcon } from '../icon';
import { Button, ButtonLink, ButtonLinkProps, ButtonProps } from './Button';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderButton(props?: Partial<ButtonProps>) {
	return render(
		<Button data-testid="example" {...props}>
			My button
		</Button>
	);
}

expect.extend(toHaveNoViolations);

describe('Button', () => {
	it('renders correctly', () => {
		const { container } = renderButton();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderButton();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders basic attributes correctly', () => {
		renderButton();
		const el = screen.getByTestId('example');
		expect(el.tagName).toBe('BUTTON');
		expect(el).toHaveAttribute('type', 'button');
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
			expect(el).toHaveAttribute('type', 'button');
			expect(el).toHaveAccessibleName('My button Busy');
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderButton({ loading: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
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

	describe('With Icon', () => {
		it('renders correctly', () => {
			const { container } = renderButton({ iconAfter: AvatarIcon });
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderButton({ iconAfter: AvatarIcon });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('renders correctly with minimal props', () => {
			renderButton({ iconAfter: AvatarIcon });
			const el = screen.getByTestId('example');
			expect(el.tagName).toBe('BUTTON');
			expect(el).toHaveAttribute('type', 'button');
			expect(el).toHaveAccessibleName('My button');
		});
	});

	describe('Small Button', () => {
		it('renders correctly', () => {
			const { container } = renderButton({ size: 'sm' });
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderButton({ size: 'sm' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('renders correctly with minimal props', () => {
			renderButton({ size: 'sm' });
			const el = screen.getByTestId('example');
			expect(el.tagName).toBe('BUTTON');
			expect(el).toHaveAttribute('type', 'button');
			expect(el).toHaveAccessibleName('My button');
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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderButtonLink();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
