import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { TextLink } from '@ag.ds-next/text-link';
import { VisuallyHidden } from './VisuallyHidden';

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

	it('renders a valid HTML structure', () => {
		const { container } = render(<VisuallyHiddenExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
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
