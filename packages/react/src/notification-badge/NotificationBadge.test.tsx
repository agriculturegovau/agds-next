import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { NotificationBadge, NotificationBadgeProps } from './NotificationBadge';
import { BadgeTone, badgeToneMap } from './utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderNotificationBadge(props: NotificationBadgeProps) {
	return render(<NotificationBadge {...props} />);
}

const tones = Object.keys(badgeToneMap) as BadgeTone[];

describe('NotificationBadge', () => {
	tones.forEach((tone) => {
		describe(`tone: ${tone}`, () => {
			it('renders correctly', () => {
				const { container } = renderNotificationBadge({
					tone,
					value: 5,
				});
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = renderNotificationBadge({
					tone,
					value: 5,
				});
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe(`shows max+ instead of value`, () => {
		renderNotificationBadge({ tone: 'neutral', value: 100, max: 99 });
		expect(screen.getByText('99+')).toBeInTheDocument();
	});
});
