import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '../../../../test-utils';
import {
	CallToActionLink,
	CallToActionLinkProps,
	CallToActionButton,
	CallToActionButtonProps,
} from './CallToAction';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCallToActionLink(props?: Partial<CallToActionLinkProps>) {
	return render(
		<CallToActionLink data-testid="example" href="#" {...props}>
			Sign up
		</CallToActionLink>
	);
}

describe('CallToActionLink', () => {
	it('renders correctly', () => {
		const { container } = renderCallToActionLink();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCallToActionLink();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders basic attributes correctly', () => {
		renderCallToActionLink();
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '#');
		expect(el).toHaveAccessibleName('Sign up');
	});
});

function renderCallToActionButton(props?: Partial<CallToActionButtonProps>) {
	return render(
		<CallToActionButton data-testid="example" {...props}>
			Sign up
		</CallToActionButton>
	);
}

describe('CallToActionButton', () => {
	it('renders correctly', () => {
		const { container } = renderCallToActionButton({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCallToActionButton({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('responds to an onClick event', async () => {
		const onClick = jest.fn();
		renderCallToActionButton({ onClick });
		await userEvent.click(screen.getByTestId('example'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
