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
	const { container } = renderCalendarSingle({
		selected: new Date(2022, 10, 1),
	});

	it('renders correctly', () => {
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});

function renderCalendarRange(props: CalendarRangeProps) {
	return render(<CalendarRange {...props} />);
}

describe('Calendar Range', () => {
	const { container } = renderCalendarRange({
		selected: {
			from: new Date(2022, 10, 1),
			to: new Date(2022, 10, 7),
		},
	});

	it('renders correctly', () => {
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
