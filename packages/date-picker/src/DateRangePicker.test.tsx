import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';

afterEach(cleanup);

function renderDetail(props: DateRangePickerProps) {
	return render(<DateRangePicker {...props} />);
}

describe('DateRangePicker', () => {
	const { container } = renderDetail({
		value: { from: new Date('2000-01-01'), to: new Date('2000-01-02') },
		onChange: console.log,
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
