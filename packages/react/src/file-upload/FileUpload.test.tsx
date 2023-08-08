import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useState } from 'react';
import { cleanup, render } from '../../../../test-utils';
import { FileWithStatus } from './utils';
import { FileUpload, FileUploadProps } from './FileUpload';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function FileUploadExample(props?: Partial<FileUploadProps>) {
	const [value, setValue] = useState<FileWithStatus[]>([
		new File(['this is an example file'], 'example.jpg', {
			type: 'image/jpg',
		}),
	]);
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
					// TODO the following rules are broken. Once fixed these should be removed.
					'input-attributes': 'off',
					'aria-label-misuse': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
