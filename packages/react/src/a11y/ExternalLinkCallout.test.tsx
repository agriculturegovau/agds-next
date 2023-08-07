import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TextLink } from '../text-link';
import { render, screen, cleanup } from '../../../../test-utils';
import { ExternalLinkCallout } from './ExternalLinkCallout';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = render(<ExternalLinkCalloutExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('announces to a screen reader user that a link will open in a new tab', () => {
		render(<ExternalLinkCalloutExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent('Visit the Design System, opens in a new tab');
	});
});
