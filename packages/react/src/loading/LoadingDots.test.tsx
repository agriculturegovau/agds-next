import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen, cleanup } from '../../../../test-utils';
import { LoadingDots, LoadingDotsProps } from './LoadingDots';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function LoadingDotsExample(props: LoadingDotsProps) {
	return <LoadingDots data-testid="example" label="Busy" {...props} />;
}

describe('LoadingDots', () => {
	it('renders correctly with minimal props', () => {
		render(<LoadingDotsExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('SPAN');
		expect(el).toHaveTextContent('Busy');
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = render(<LoadingDotsExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
	it('renders valid HTML with no a11y violations and role="status"', async () => {
		const { container } = render(<LoadingDotsExample role="status" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
