import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '../../../../test-utils';
import { Stack } from '../box';
import { Button } from '../button';
import {
	DateRange,
	DateRangePicker,
	DateRangePickerProps,
} from './DateRangePicker';

afterEach(cleanup);

function renderDateRangePicker(props: DateRangePickerProps) {
	return render(<DateRangePicker {...props} />);
}

function ControlledDateRangePicker({
	initialValue,
}: {
	initialValue: DateRange;
}) {
	const [value, setValue] = useState<DateRange>(initialValue);
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker value={value} onChange={setValue} />
			<Button
				data-testid="clear"
				onClick={() => setValue({ from: undefined, to: undefined })}
			>
				Clear
			</Button>
		</Stack>
	);
}

describe('DateRangePicker', () => {
	it('renders correctly', () => {
		const { container } = renderDateRangePicker({
			value: { from: new Date('2000-01-01'), to: new Date('2000-01-02') },
			onChange: console.log,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDateRangePicker({
			value: { from: new Date('2000-01-01'), to: new Date('2000-01-02') },
			onChange: console.log,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});

	it('updates correctly based on the `value` prop', async () => {
		const { container } = render(
			<ControlledDateRangePicker
				initialValue={{
					from: new Date('2000-01-01'),
					to: new Date('2000-01-07'),
				}}
			/>
		);

		let inputs = container.querySelectorAll('input');
		let calendarTriggers = container.querySelectorAll('button');

		// The inputs should be a formatted display value of `initialValue`
		expect(inputs[0]).toHaveValue('01/01/2000');
		expect(inputs[1]).toHaveValue('07/01/2000');

		// The calendar button trigger should have an aria-label with the formatted display value of `initialValue`
		expect(calendarTriggers[0]).toHaveAttribute(
			'aria-label',
			'Change Date, Saturday January 1st, 2000'
		);
		expect(calendarTriggers[1]).toHaveAttribute(
			'aria-label',
			'Change Date, Friday January 7th, 2000'
		);

		// Click the `clear` button to clear the value
		await userEvent.click(screen.getByTestId('clear'));

		inputs = container.querySelectorAll('input');
		calendarTriggers = container.querySelectorAll('button');

		// The inputs should be empty
		expect(inputs[0]).toHaveValue('');
		expect(inputs[1]).toHaveValue('');

		// The calendar button triggers aria-label should be updated
		expect(calendarTriggers[0]).toHaveAttribute('aria-label', 'Choose date');
		expect(calendarTriggers[1]).toHaveAttribute('aria-label', 'Choose date');
	});
});
