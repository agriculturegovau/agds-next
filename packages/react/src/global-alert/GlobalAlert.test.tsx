import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { Text } from '../text';
import { cleanup, render, screen } from '../../../../test-utils';
import { GlobalAlert, GlobalAlertProps } from './GlobalAlert';

afterEach(cleanup);

function renderGlobalAlert(props: GlobalAlertProps) {
	return render(<GlobalAlert {...props} />);
}

describe('GlobalAlert', () => {
	it('renders correctly', () => {
		const { container } = renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
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
	});

	it('has correct aria attributes', () => {
		renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(screen.getByRole('region')).toHaveAttribute(
			'aria-label',
			'Alert title'
		);
	});

	it('responds to an onClose event', async () => {
		const onClose = jest.fn();
		const { container } = renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
			onClose,
		});

		expect(container).toMatchSnapshot();

		await userEvent.click(screen.getByText('Dismiss'));
		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
