import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act, waitFor } from '../../../../test-utils';
import { TimePicker, type TimePickerProps } from './TimePicker';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTimePicker(props?: Pick<TimePickerProps, 'loading'>) {
	return render(
		<TimePicker
			label="Select a time"
			hint="Start typing to see results"
			{...props}
		/>
	);
}

describe('TimePicker', () => {
	it('renders correctly', () => {
		const { container } = renderTimePicker();
		expect(container).toMatchSnapshot();
	});

	it('renders correctly when loading', async () => {
		const { container } = renderTimePicker({ loading: true });
		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		await act(async () => input.click());
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTimePicker();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// Our HTML is based off downshift
				'prefer-native-element': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('filters options', async () => {
		const { container } = renderTimePicker();
		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		await act(async () => input.click());
		await waitFor(() => expect(input).toHaveFocus());
		expect(input).toHaveAttribute('aria-expanded', 'true');

		await userEvent.type(input, '1245');
		expect(input.value).toBe('1245');

		const options = container.querySelectorAll('li');
		expect(options.length).toBe(1);
		expect(options[0].textContent).toBe('12:45 pm');
		await userEvent.click(options[0]);
		expect(input.value).toBe('12:45 pm');
	});
});
