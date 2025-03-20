import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '../../../../test-utils';
import { ToggleButton } from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton';

expect.extend(toHaveNoViolations);

function renderToggleButton(props: ToggleButtonProps) {
	return render(<ToggleButton {...props} />);
}

describe('ToggleButton', () => {
	it('renders correctly', () => {
		const { container } = renderToggleButton({
			label: 'Flag message',
			onClick: () => undefined,
			pressed: false,
			pressedLabel: 'Unflag message',
		});

		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderToggleButton({
			label: 'Flag message',
			onClick: () => undefined,
			pressed: false,
			pressedLabel: 'Unflag message',
		});

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});

		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders alternative icon and label when pressedLabel = true', async () => {
		const { container } = renderToggleButton({
			label: 'Flag message',
			onClick: () => undefined,
			pressed: true,
			pressedLabel: 'Unflag message',
		});

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});

		expect(await axe(container)).toHaveNoViolations();
		expect(container).toMatchSnapshot();
	});

	it('renders aria-label when hiddenLabel = true', async () => {
		const { container } = renderToggleButton({
			hiddenLabel: true,
			label: 'Flag message',
			onClick: () => undefined,
			pressed: false,
			pressedLabel: 'Unflag message',
		});

		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});

		expect(await axe(container)).toHaveNoViolations();
		expect(container).toMatchSnapshot();
	});
});
