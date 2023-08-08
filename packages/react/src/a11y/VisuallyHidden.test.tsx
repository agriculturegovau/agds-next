import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TextLink } from '../text-link';
import { render, screen, cleanup } from '../../../../test-utils';
import { VisuallyHidden } from './VisuallyHidden';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function VisuallyHiddenExample() {
	return (
		<TextLink href="#" data-testid="example">
			Read more
			<VisuallyHidden> about how to visually hide content</VisuallyHidden>
		</TextLink>
	);
}

describe('VisuallyHidden', () => {
	it('renders correctly', () => {
		const { container } = render(<VisuallyHiddenExample />);
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = render(<VisuallyHiddenExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('reads out visually hidden text to a screen reader user', () => {
		render(<VisuallyHiddenExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent(
			'Read more about how to visually hide content'
		);
	});
});
