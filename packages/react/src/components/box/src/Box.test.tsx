import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup, screen } from '../../../../../../test-utils';
import { Box } from './Box';
import { BoxProps } from './styles';

afterEach(cleanup);

function renderBox(props?: Partial<BoxProps>) {
	return render(<Box {...props}>Box element</Box>);
}

describe('Box', () => {
	it('renders correctly', () => {
		const { container } = renderBox();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderBox();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
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
