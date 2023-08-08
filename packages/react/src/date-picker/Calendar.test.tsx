import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import {
	CalendarSingle,
	CalendarSingleProps,
	CalendarRange,
	CalendarRangeProps,
} from './Calendar';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCalendarSingle(props: CalendarSingleProps) {
	return render(<CalendarSingle {...props} />);
}

const dateRange = {
	from: new Date(2022, 5, 1),
	to: new Date(2022, 5, 7),
};

describe('Calendar Single', () => {
	it('renders correctly', () => {
		const { container } = renderCalendarSingle({
			defaultMonth: dateRange.from,
			selected: dateRange.from,
			yearRange: {
				from: dateRange.from.getFullYear() - 10,
				to: dateRange.from.getFullYear() + 10,
			},
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCalendarSingle({
			defaultMonth: dateRange.from,
			selected: dateRange.from,
			yearRange: {
				from: dateRange.from.getFullYear() - 10,
				to: dateRange.from.getFullYear() + 10,
			},
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});

function renderCalendarRange(props: CalendarRangeProps) {
	return render(<CalendarRange {...props} />);
}

describe('Calendar Range', () => {
	it('renders correctly', () => {
		const { container } = renderCalendarRange({
			defaultMonth: dateRange.from,
			selected: dateRange,
			yearRange: {
				from: dateRange.from.getFullYear() - 10,
				to: dateRange.from.getFullYear() + 10,
			},
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCalendarRange({
			defaultMonth: dateRange.from,
			selected: dateRange,
			yearRange: {
				from: dateRange.from.getFullYear() - 10,
				to: dateRange.from.getFullYear() + 10,
			},
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
