import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup, screen } from '../../../../test-utils';
import { Stack, StackProps } from './Stack';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderStack(props?: Partial<StackProps>) {
	return render(<Stack {...props}>Stack element</Stack>);
}

describe('Stack', () => {
	it('renders correctly', () => {
		const { container } = renderStack();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderStack();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('can render other HTML tags using the `as` prop', () => {
		render(
			<Stack as="section" data-testid="example">
				Section element
			</Stack>
		);
		expect(screen.getByTestId('example').tagName).toBe('SECTION');
	});
});
