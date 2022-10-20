import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup, screen } from '@testing-library/react';
import { Stack, StackProps } from './Stack';

afterEach(cleanup);

function renderStack(props?: Partial<StackProps>) {
	return render(<Stack {...props}>Stack element</Stack>);
}

describe('Stack', () => {
	it('renders correctly', () => {
		const { container } = renderStack();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderStack();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
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
