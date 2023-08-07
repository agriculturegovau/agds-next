import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { allIcons } from './utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

describe('Icon', () => {
	for (const icon of Object.keys(allIcons)) {
		const IconComponent = allIcons[icon as keyof typeof allIcons];

		describe(icon, () => {
			it('renders correctly', () => {
				const { container } = render(<IconComponent />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<IconComponent />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
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
