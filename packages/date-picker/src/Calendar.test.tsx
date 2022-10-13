import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import {
	CalendarSingle,
	CalendarSingleProps,
	CalendarRange,
	CalendarRangeProps,
} from './Calendar';

afterEach(cleanup);

function renderCalendarSingle(props: CalendarSingleProps) {
	return render(<CalendarSingle {...props} />);
}

describe('Calendar Single', () => {
	it('renders correctly', () => {
		const { container } = renderCalendarSingle({
			selected: new Date(2022, 10, 1),
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCalendarSingle({
			selected: new Date(2022, 10, 1),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// This is turned off as `react-day-picker` have some invalid IDs
				'valid-id': 'off',
			},
		});
	});
});

function renderCalendarRange(props: CalendarRangeProps) {
	return render(<CalendarRange {...props} />);
}

describe('Calendar Range', () => {
	it('renders correctly', () => {
		const { container } = renderCalendarRange({
			selected: {
				from: new Date(2022, 10, 1),
				to: new Date(2022, 10, 7),
			},
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCalendarRange({
			selected: {
				from: new Date(2022, 10, 1),
				to: new Date(2022, 10, 7),
			},
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// This is turned off as `react-day-picker` have some invalid IDs
			rules: { 'no-inline-style': 'off' },
		});
	});
});
