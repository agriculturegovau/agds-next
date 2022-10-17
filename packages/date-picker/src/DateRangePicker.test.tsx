import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';

afterEach(cleanup);

function renderDateRangePicker(props: DateRangePickerProps) {
	return render(<DateRangePicker {...props} />);
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
});
