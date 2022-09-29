import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { Field, FieldProps } from './Field';

function renderField(props: FieldProps) {
	return render(<Field {...props} />);
}

afterEach(cleanup);

describe('Field', () => {
	const { container } = renderField({
		label: 'Name',
		hint: 'Hint text',
		message: 'This field is required',
		required: true,
		invalid: true,
		valid: undefined,
		children: (a11yProps) => <input type="text" {...a11yProps} />,
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
