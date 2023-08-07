import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup, screen } from '../../../../test-utils';
import { Flex, FlexProps } from './Flex';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderFlex(props?: Partial<FlexProps>) {
	return render(<Flex {...props}>Flex element</Flex>);
}

describe('Flex', () => {
	it('renders correctly', () => {
		const { container } = renderFlex();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderFlex();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
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
