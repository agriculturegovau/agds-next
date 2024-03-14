import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import {
	StatusBadge,
	StatusBadgeAppearance,
	StatusBadgeLegacyTone,
	StatusBadgeProps,
	StatusBadgeTone,
} from './StatusBadge';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderStatusBadge(props: StatusBadgeProps) {
	return render(<StatusBadge {...props} />);
}

const appearances: StatusBadgeAppearance[] = ['regular', 'subtle'];

const tones: StatusBadgeTone[] = [
	'cannotStartLow',
	'errorHigh',
	'errorLow',
	'errorMedium',
	'infoHigh',
	'infoLow',
	'infoMedium',
	'inProgressLow',
	'notStartedLow',
	'pausedLow',
	'successHigh',
	'successLow',
	'successMedium',
	'unknownLow',
	'warningHigh',
	'warningLow',
	'warningMedium',
];

const legacyTones: StatusBadgeLegacyTone[] = [
	'error',
	'info',
	'neutral',
	'success',
	'warning',
];

describe('StatusBadge', () => {
	appearances.forEach((appearance) => {
		describe(`appearance: ${appearance}`, () => {
			tones.forEach((tone) => {
				describe(`tone: ${tone}`, () => {
					it('renders correctly', () => {
						const { container } = renderStatusBadge({
							appearance,
							tone,
							label: 'Example',
						});
						expect(container).toMatchSnapshot();
					});

					it('renders valid HTML with no a11y violations', async () => {
						const { container } = renderStatusBadge({
							appearance,
							tone,
							label: 'Example',
						});
						expect(container).toHTMLValidate({
							extends: ['html-validate:recommended'],
						});
						expect(await axe(container)).toHaveNoViolations();
					});
				});
			});
		});

		describe(`Legacy weight: ${appearance}`, () => {
			legacyTones.forEach((tone) => {
				describe(`tone: ${tone}`, () => {
					it('renders correctly', () => {
						const { container } = renderStatusBadge({
							weight: appearance,
							tone,
							label: 'Example',
						});
						expect(container).toMatchSnapshot();
					});

					it('renders valid HTML with no a11y violations', async () => {
						const { container } = renderStatusBadge({
							weight: appearance,
							tone,
							label: 'Example',
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
