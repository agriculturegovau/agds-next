import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { ExternalLinkCallout } from './ExternalLinkCallout';

describe('ExternalLinkCallout', () => {
	it('announces to a screenreader user that a link will open in a new tab', () => {
		render(
			<a href="#" data-testid="link">
				Visit the Design System
				<ExternalLinkCallout />
			</a>
		);
		const el = screen.getByTestId('link');
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent('Visit the Design System, opens in a new tab');
	});
});
