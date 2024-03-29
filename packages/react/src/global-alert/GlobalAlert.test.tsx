import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Text } from '../text';
import { cleanup, render, screen } from '../../../../test-utils';
import { GlobalAlert, GlobalAlertProps, GlobalAlertTone } from './GlobalAlert';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderGlobalAlert(props: GlobalAlertProps) {
	return render(<GlobalAlert {...props} />);
}

const TONES = ['warning', 'info'] as GlobalAlertTone[];

describe('GlobalAlert', () => {
	TONES.forEach((tone) => {
		describe(`with tone ${tone}`, () => {
			it('renders correctly', () => {
				const { container } = renderGlobalAlert({
					title: 'Alert title',
					children: <Text as="p">Alert description.</Text>,
					tone: tone,
				});
				expect(container).toMatchSnapshot();
			});
		});
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders the correct aria attributes', () => {
		renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(screen.getByRole('region')).toHaveAttribute(
			'aria-label',
			'Alert title'
		);
	});

	describe('Dismissable', () => {
		it('renders correctly', () => {
			const { container } = renderGlobalAlert({
				title: 'Alert title',
				children: <Text as="p">Alert description.</Text>,
				onClose: jest.fn(),
			});
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderGlobalAlert({
				title: 'Alert title',
				children: <Text as="p">Alert description.</Text>,
				onClose: jest.fn(),
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});

		it('responds to an `onClose` event', async () => {
			const onClose = jest.fn();
			renderGlobalAlert({
				title: 'Alert title',
				children: <Text as="p">Alert description.</Text>,
				onClose,
			});
			await userEvent.click(screen.getByText('Close'));
			expect(onClose).toHaveBeenCalledTimes(1);
		});

		it('responds to an `onDismiss` event', async () => {
			const onDismiss = jest.fn();
			renderGlobalAlert({
				title: 'Alert title',
				children: <Text as="p">Alert description.</Text>,
				onDismiss,
			});
			await userEvent.click(screen.getByText('Close'));
			expect(onDismiss).toHaveBeenCalledTimes(1);
		});
	});
});
