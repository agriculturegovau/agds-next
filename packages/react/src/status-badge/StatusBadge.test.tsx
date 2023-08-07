import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import {
	StatusBadge,
	StatusBadgeProps,
	StatusBadgeTone,
	StatusBadgeWeight,
} from './StatusBadge';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderStatusBadge(props: StatusBadgeProps) {
	return render(<StatusBadge {...props} />);
}

const weights: StatusBadgeWeight[] = ['subtle', 'regular'];

const tones: StatusBadgeTone[] = [
	'error',
	'success',
	'warning',
	'info',
	'neutral',
];

describe('StatusBadge', () => {
	weights.forEach((weight) => {
		describe(`weight: ${weight}`, () => {
			tones.forEach((tone) => {
				describe(`tone: ${tone}`, () => {
					it('renders correctly', () => {
						const { container } = renderStatusBadge({
							weight,
							tone,
							label: `Example`,
						});
						expect(container).toMatchSnapshot();
					});

					it('renders valid HTML with no a11y violations', async () => {
						const { container } = renderStatusBadge({
							weight,
							tone,
							label: `Example`,
						});
						expect(container).toHTMLValidate({
							extends: ['html-validate:recommended'],
						});
						expect(await axe(container)).toHaveNoViolations();
					});
				});
			});
		});
	});
});
