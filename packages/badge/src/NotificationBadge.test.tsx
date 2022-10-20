import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import { NotificationBadge, NotificationBadgeProps } from './NotificationBadge';
import { badgeToneMap, BadgeTone } from './utils';

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

			it('renders a valid HTML structure', () => {
				const { container } = renderNotificationBadge({
					tone,
					value: 5,
				});
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	});

	describe(`shows max+ instead of value`, () => {
		renderNotificationBadge({ tone: 'neutral', value: 100, max: 99 });
		expect(screen.getByText('99+')).toBeInTheDocument();
	});
});
