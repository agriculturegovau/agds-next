import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { DatePicker, DatePickerProps } from './DatePicker';

afterEach(cleanup);

function renderDatePicker(props: DatePickerProps) {
	return render(<DatePicker {...props} />);
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
		});
	});
});
