import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { allIcons } from './utils';

afterEach(cleanup);

describe('Icon', () => {
	for (const icon of Object.keys(allIcons)) {
		const IconComponent = allIcons[icon as keyof typeof allIcons];

		describe(icon, () => {
			it('renders correctly', () => {
				const { container } = render(<IconComponent />);
				expect(container).toMatchSnapshot();
			});

			it('renders a valid HTML structure', () => {
				const { container } = render(<IconComponent />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});

			it('renders correct default attributes', () => {
				const { container } = render(<IconComponent />);
				const el = container.querySelector('svg');
				expect(el).toHaveAttribute('viewBox', '0 0 24 24');
				expect(el).toHaveAttribute('role', 'img');
				expect(el).toHaveAttribute('aria-hidden', 'true');
				expect(el).toHaveAttribute('focusable', 'false');
			});

			it('supports aria-labels', () => {
				const { container } = render(
					<IconComponent aria-hidden="false" aria-label="Hello world" />
				);
				const el = container.querySelector('svg');
				expect(el).toHaveAttribute('aria-hidden', 'false');
				expect(el).toHaveAttribute('focusable', 'true');
				expect(el).toHaveAttribute('aria-label', 'Hello world');
			});
		});
	}
});
