import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { FileInput } from './FileInput';
import type { FileInputProps } from './FileInput';

afterEach(cleanup);

function renderFileInput(props?: Partial<FileInputProps>) {
	return render(<FileInput {...props} />);
}

describe('FileInput', () => {
	it('renders correctly', () => {
		const { container } = renderFileInput();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderFileInput();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
