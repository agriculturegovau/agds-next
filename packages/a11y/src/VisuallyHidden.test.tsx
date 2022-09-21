import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { TextLink } from '@ag.ds-next/text-link';
import { VisuallyHidden } from './VisuallyHidden';

function Example() {
	return (
		<TextLink href="#" data-testid="example">
			Read more
			<VisuallyHidden> about how to visually hide content</VisuallyHidden>
		</TextLink>
	);
}

describe('VisuallyHidden', () => {
	it('reads out visually hidden text to a screenreader user', () => {
		render(<Example />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent(
			'Read more about how to visually hide content'
		);
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<Example />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
