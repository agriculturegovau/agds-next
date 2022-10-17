import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { TextInput, TextInputProps } from './TextInput';

afterEach(cleanup);

function renderTextInput(props: TextInputProps) {
	return render(<TextInput {...props} />);
}

describe('TextInput', () => {
	it('renders correctly', () => {
		const { container } = renderTextInput({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderTextInput({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
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
