import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import {
	StatusBadge,
	StatusBadgeProps,
	StatusBadgeTone,
	StatusBadgeAppearance,
	StatusBadgeType,
} from './StatusBadge';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderStatusBadge(props: StatusBadgeProps) {
	return render(<StatusBadge {...props} />);
}

const appearances: StatusBadgeAppearance[] = ['subtle', 'regular'];

const types: StatusBadgeType[] = [
	'blockedLow',
	'errorHigh',
	'errorLow',
	'errorMedium',
	'infoHigh',
	'infoLow',
	'infoMedium',
	'inProgressLow',
	'pausedLow',
	'successHigh',
	'successLow',
	'successMedium',
	'todoLow',
	'unknownLow',
	'warningHigh',
	'warningLow',
	'warningMedium',
];

const legacyTones: StatusBadgeTone[] = [
	'error',
	'success',
	'warning',
	'info',
	'neutral',
];

describe('StatusBadge', () => {
	appearances.forEach((appearance) => {
		describe(`appearance: ${appearance}`, () => {
			types.forEach((type) => {
				describe(`type: ${type}`, () => {
					it('renders correctly', () => {
						const { container } = renderStatusBadge({
							appearance,
							type,
							label: 'Example',
						});
						expect(container).toMatchSnapshot();
					});

					it('renders valid HTML with no a11y violations', async () => {
						const { container } = renderStatusBadge({
							appearance,
							type,
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
