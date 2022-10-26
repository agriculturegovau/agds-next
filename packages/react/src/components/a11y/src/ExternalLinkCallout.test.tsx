import '@testing-library/jest-dom';
import 'html-validate/jest';
import { TextLink } from '../../text-link/src';
import { render, screen, cleanup } from '../../../../../../test-utils';
import { ExternalLinkCallout } from './ExternalLinkCallout';

afterEach(cleanup);

function ExternalLinkCalloutExample() {
	return (
		<TextLink href="#" data-testid="example">
			Visit the Design System
			<ExternalLinkCallout />
		</TextLink>
	);
}

describe('ExternalLinkCallout', () => {
	it('renders correctly', () => {
		const { container } = render(<ExternalLinkCalloutExample />);
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = render(<ExternalLinkCalloutExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('announces to a screen reader user that a link will open in a new tab', () => {
		render(<ExternalLinkCalloutExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent('Visit the Design System, opens in a new tab');
	});
});
