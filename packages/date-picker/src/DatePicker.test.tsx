import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { DatePicker, DatePickerProps } from './DatePicker';

afterEach(cleanup);

function renderDetail(props: DatePickerProps) {
	return render(<DatePicker {...props} />);
}

describe('DatePicker', () => {
	const { container } = renderDetail({
		label: 'Example',
		value: new Date('2000-01-01'),
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
