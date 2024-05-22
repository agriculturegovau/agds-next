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
	const [value, setValue] = useState<FileWithStatus[]>([]);
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

	describe('Multiple, maxSize and accepted file extensions', () => {
		it('renders correctly', () => {
			const { container } = render(
				<FileUploadExample
					accept={['image/jpeg', 'image/png']}
					maxSize={3000}
					multiple
				/>
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(
				<FileUploadExample
					accept={['image/jpeg', 'image/png']}
					maxSize={3000}
					multiple
				/>
			);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
					// html-validate doesn't like aria-label on list elements, even though it's valid
					'aria-label-misuse': 'off',
					// html-validate doesn't like multiple without ="true" even though it's valid
					'attribute-boolean-style': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('1 selected file', () => {
		it('renders correctly', () => {
			const { container } = render(
				<FileUploadExample value={[createExampleFile()]} />
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(
				<FileUploadExample value={[createExampleFile()]} />
			);
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

	describe('Existing files', () => {
		const existingFiles = [
			{
				name: 'example.png',
				size: 123456,
				thumbnailSrc: 'https://via.placeholder.com/150',
				href: '#',
				// Use the meta key to keep track of any extra file info
				// This can be useful info when deleting the file
				meta: { uid: 'abc-def', bucketId: '123-456' },
			},
			{
				name: 'example-no-thumbnail.doc',
				size: 654321,
				href: '#',
				// Use the meta key to keep track of any extra file info
				// This can be useful info when deleting the file
				meta: { uid: 'fed=cba', bucketId: '654-321' },
			},
		];
		it('renders correctly', () => {
			const { container } = render(
				<FileUploadExample existingFiles={existingFiles} />
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(
				<FileUploadExample existingFiles={existingFiles} />
			);
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
});
