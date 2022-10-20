import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { Textarea, TextareaProps } from './Textarea';

afterEach(cleanup);

function renderTextarea(props: TextareaProps) {
	return render(<Textarea {...props} />);
}

describe('Textarea', () => {
	it('renders correctly', () => {
		const { container } = renderTextarea({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderTextarea({
			label: 'Name',
			hint: 'Hint text',
			message: 'This field is required',
			invalid: true,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
	});
});
