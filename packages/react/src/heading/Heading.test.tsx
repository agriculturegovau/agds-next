import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Heading, HeadingProps } from './Heading';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderHeading(props: Partial<HeadingProps>) {
	return render(<Heading {...props}>Heading element</Heading>);
}

describe('Heading', () => {
	it('renders correctly', () => {
		const { container } = renderHeading({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderHeading({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('can render a other heading tags using the `as` prop', () => {
		render(
			<Heading as="h1" data-testid="example">
				Heading 1 element
			</Heading>
		);
		expect(screen.getByTestId('example').tagName).toBe('H1');
	});
});
