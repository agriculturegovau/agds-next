import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
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
			defaultMonth: new Date(2022, 5, 1),
			selected: new Date(2022, 5, 1),
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCalendarSingle({
			defaultMonth: new Date(2022, 5, 1),
			selected: new Date(2022, 5, 1),
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

function renderCalendarRange(props: CalendarRangeProps) {
	return render(<CalendarRange {...props} />);
}

describe('Calendar Range', () => {
	it('renders correctly', () => {
		const { container } = renderCalendarRange({
			defaultMonth: new Date(2022, 5, 1),
			selected: { from: new Date(2022, 5, 1), to: new Date(2022, 5, 7) },
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCalendarRange({
			defaultMonth: new Date(2022, 5, 1),
			selected: { from: new Date(2022, 5, 1), to: new Date(2022, 5, 7) },
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
