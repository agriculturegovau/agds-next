import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup, screen } from '../../../../../../test-utils';
import { Flex, FlexProps } from './Flex';

afterEach(cleanup);

function renderFlex(props?: Partial<FlexProps>) {
	return render(<Flex {...props}>Flex element</Flex>);
}

describe('Flex', () => {
	it('renders correctly', () => {
		const { container } = renderFlex();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderFlex();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('can render other HTML tags using the `as` prop', () => {
		render(
			<Flex as="section" data-testid="example">
				Section element
			</Flex>
		);
		expect(screen.getByTestId('example').tagName).toBe('SECTION');
	});
});
