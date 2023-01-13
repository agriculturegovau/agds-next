import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { FileSelect } from './FileSelect';
import type { FileSelectProps } from './FileSelect';

afterEach(cleanup);

function renderFileSelect(props?: Partial<FileSelectProps>) {
	return render(<FileSelect {...props} />);
}

describe('FileSelect', () => {
	it('renders correctly', () => {
		const { container } = renderFileSelect();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderFileSelect();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
