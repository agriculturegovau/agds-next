import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { FileInput } from './FileInput';
import type { FileInputProps } from './FileInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderFileInput(props?: Partial<FileInputProps>) {
	return render(<FileInput label="Example" {...props} />);
}

describe('FileInput', () => {
	it('renders correctly', () => {
		const { container } = renderFileInput();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderFileInput();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
	});

	describe('invalid', () => {
		it('renders correctly', () => {
			const { container } = renderFileInput({
				invalid: true,
				message: 'This file is not valid',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderFileInput({
				invalid: true,
				message: 'This file is not valid',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
