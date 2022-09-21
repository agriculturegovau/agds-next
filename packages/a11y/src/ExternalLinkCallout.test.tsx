import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { TextLink } from '@ag.ds-next/text-link';
import { ExternalLinkCallout } from './ExternalLinkCallout';

function Example() {
	return (
		<TextLink href="#" data-testid="example">
			Visit the Design System
			<ExternalLinkCallout />
		</TextLink>
	);
}

describe('ExternalLinkCallout', () => {
	it('announces to a screenreader user that a link will open in a new tab', () => {
		render(<Example />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent('Visit the Design System, opens in a new tab');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<Example />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
