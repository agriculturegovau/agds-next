import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '../../../../test-utils';
import { Stack } from '../box';
import { Button } from '../button';
import { DatePicker, DatePickerProps } from './DatePicker';

afterEach(cleanup);

function renderDatePicker(props: DatePickerProps) {
	return render(<DatePicker {...props} />);
}

function ControlledDatePicker({ initialValue }: { initialValue: Date }) {
	const [value, setValue] = useState<Date | undefined>(initialValue);
	return (
		<Stack gap={4} alignItems="flex-start">
			<DatePicker label="Controlled" value={value} onChange={setValue} />
			<Button data-testid="clear" onClick={() => setValue(undefined)}>
				Clear
			</Button>
		</Stack>
	);
}

describe('DatePicker', () => {
	it('renders correctly', () => {
		const { container } = renderDatePicker({
			label: 'Example',
			value: new Date('2000-01-01'),
			onChange: console.log,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDatePicker({
			label: 'Example',
			value: new Date('2000-01-01'),
			onChange: console.log,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
	});

	it('updates correctly based on the `value` prop', async () => {
		const { container } = render(
			<ControlledDatePicker initialValue={new Date('2000-01-01')} />
		);

		let input = container.querySelector('input');
		let calendarTrigger = container.querySelector('button');

		// The input should be a formatted display value of `initialValue`
		expect(input).toHaveValue('01/01/2000');
		// The calendar button trigger should have an aria-label with the formatted display value of `initialValue`
		expect(calendarTrigger).toHaveAttribute(
			'aria-label',
			'Change Date, Saturday January 1st, 2000'
		);

		// Click the `clear` button to clear the value
		await userEvent.click(screen.getByTestId('clear'));

		input = container.querySelector('input');
		calendarTrigger = container.querySelector('button');

		// The input should be empty
		expect(input).toHaveValue('');
		// The calendar button triggers aria-label should be updated
		expect(calendarTrigger).toHaveAttribute('aria-label', 'Choose date');
	});
});
