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
import { CalendarProvider, CalendarProviderProps } from './CalendarContext';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCalendarSingle({
	yearRange,
	...props
}: CalendarSingleProps & CalendarProviderProps) {
	return render(
		<CalendarProvider yearRange={yearRange}>
			<CalendarSingle {...props} />
		</CalendarProvider>
	);
}

const dateRange = {
	from: new Date(2023, 5, 1),
	to: new Date(2023, 5, 7),
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

function renderCalendarRange({
	yearRange,
	...props
}: CalendarRangeProps & CalendarProviderProps) {
	return render(
		<CalendarProvider yearRange={yearRange}>
			<CalendarRange {...props} />
		</CalendarProvider>
	);
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
