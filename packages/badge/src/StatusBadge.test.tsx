import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { StatusBadge, StatusBadgeProps, StatusBadgeTone } from './StatusBadge';

afterEach(cleanup);

function renderStatusBadge(props: StatusBadgeProps) {
	return render(<StatusBadge {...props} />);
}

const tones: StatusBadgeTone[] = [
	'error',
	'success',
	'warning',
	'info',
	'neutral',
];

describe('StatusBadge', () => {
	tones.forEach((tone) => {
		describe(`tone: ${tone}`, () => {
			it('renders correctly', () => {
				const { container } = renderStatusBadge({ tone, label: `Example` });
				expect(container).toMatchSnapshot();
			});

			it('renders a valid HTML structure', () => {
				const { container } = renderStatusBadge({ tone, label: `Example` });
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	});
});
