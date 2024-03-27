import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import { cleanup, render } from '../../../../test-utils';
import { FileWithStatus } from './utils';
import { createExampleFile } from './test-utils';
import { FileUpload, FileUploadProps } from './FileUpload';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function FileUploadExample(props?: Partial<FileUploadProps>) {
	const [value, setValue] = useState<FileWithStatus[]>([createExampleFile()]);
	return (
		<FileUpload
			label="Upload file"
			hint="General hint information"
			value={value}
			onChange={setValue}
			{...props}
		/>
	);
}

describe('FileUpload', () => {
	/* URL.createObjectURL is not available in JSDOM, so we mock it out */
	window.URL.createObjectURL = jest.fn();

	afterEach(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		window.URL.createObjectURL.mockReset();
	});

	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = render(<FileUploadExample />);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<FileUploadExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
					// html-validate doesn't like aria-label on list elements, even though it's valid
					'aria-label-misuse': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('Max files', () => {
		it('throws expected error', () => {
			try {
				render(<FileUploadExample maxFiles={0} />);
				throw new Error('If it reaches this point, the error did not throw');
			} catch (err) {
				expect((err as Error).message).toBe('maxFiles cannot be less than 1');
			}
		});
	});
});
