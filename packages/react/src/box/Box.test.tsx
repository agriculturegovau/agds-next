import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup, screen } from '../../../../test-utils';
import { Box } from './Box';
import { BoxProps } from './styles';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBox(props?: Partial<BoxProps>) {
	return render(<Box {...props}>Box element</Box>);
}

describe('Box', () => {
	it('renders correctly', () => {
		const { container } = renderBox();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderBox();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('can render other HTML tags using the `as` prop', () => {
		render(
			<Box as="section" data-testid="example">
				Section element
			</Box>
		);
		expect(screen.getByTestId('example').tagName).toBe('SECTION');
	});
});
