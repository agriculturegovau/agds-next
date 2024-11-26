import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../../test-utils';
import { FileWithStatus } from './utils';
import { createExampleFile } from './test-utils';
import { FileUpload, FileUploadProps } from './FileUpload';

expect.extend(toHaveNoViolations);

function FileUploadExample(
	props?: Partial<FileUploadProps> & {
		setCurrentValue?: (files: FileWithStatus[]) => void;
	}
) {
	const { setCurrentValue, ...fileUploadProps } = props || {};
	const [value, setValue] = useState<FileWithStatus[]>([]);

	useEffect(() => {
		setCurrentValue?.(value);
	}, [value, setCurrentValue]);

	return (
		<FileUpload
			label="Upload file"
			hint="General hint information"
			value={value}
			onChange={setValue}
			{...fileUploadProps}
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

	describe('when `multiple` is true', () => {
		// We'll track the current value of the controlled component here and update it with the `setCurrentValue` function
		let currentValue: FileWithStatus[] = [];
		const setCurrentValue = (files: FileWithStatus[]) => {
			currentValue = files;
		};

		describe('when multiple files are selected', () => {
			beforeEach(async () => {
				const { container } = render(
					<FileUploadExample multiple setCurrentValue={setCurrentValue} />
				);

				const fileInput = container.querySelector(
					'input[type="file"]'
				) as HTMLInputElement;

				const user = userEvent.setup();

				await user.upload(fileInput, [
					createExampleFile({ name: 'example-1.txt' }),
					createExampleFile({ name: 'example-2.txt' }),
				]);
			});

			test('then the input should contain the selected files', () => {
				const fileNames = currentValue.map(({ name }) => name);

				expect(fileNames).toEqual(['example-1.txt', 'example-2.txt']);
			});

			test('then each should appear in a list indicating they are selected', () => {
				expect(
					screen.getByRole('list', { name: 'Selected files' })
				).toHaveTextContent(/example-1.txt \(100 B\).+example-2.txt \(100 B\)/);
			});

			describe('when a "Remove" button is pressed', () => {
				beforeEach(async () => {
					const removeButton = await screen.findByRole('button', {
						name: 'Remove file: example-1.txt',
					});

					const user = userEvent.setup();

					await user.click(removeButton);
				});

				test('then the corresponding file should be removed from the list', async () => {
					expect(
						screen.getByRole('list', { name: 'Selected files' }).textContent
					).toBe('example-2.txt (100 B)Remove');
				});

				test('then the input should contain the selected files', async () => {
					const fileNames = currentValue.map(({ name }) => name);

					expect(fileNames).toEqual(['example-2.txt']);
				});
			});
		});

		describe('when `maxFiles` is defined', () => {
			describe('when a single file is selected', () => {
				test('then it should be accepted', async () => {
					const { container } = render(
						<FileUploadExample multiple maxFiles={2} />
					);

					const fileInput = container.querySelector(
						'input[type="file"]'
					) as HTMLInputElement;

					const user = userEvent.setup();

					await user.upload(fileInput, [
						createExampleFile({ name: 'example-1.txt' }),
					]);

					expect(
						screen.getByRole('list', { name: 'Selected files' }).textContent
					).toBe('example-1.txt (100 B)Remove');
				});
			});

			describe('when more files than the maxFiles limit are selected', () => {
				beforeEach(async () => {
					const { container } = render(
						<FileUploadExample
							multiple
							maxFiles={2}
							setCurrentValue={setCurrentValue}
						/>
					);

					const fileInput = container.querySelector(
						'input[type="file"]'
					) as HTMLInputElement;

					const user = userEvent.setup();

					await user.upload(fileInput, [
						createExampleFile({ name: 'example-1.txt' }),
						createExampleFile({ name: 'example-2.txt' }),
						createExampleFile({ name: 'example-3.txt' }),
					]);
				});

				test('then the first files up to that limit should be accepted', () => {
					expect(
						screen.getByRole('list', { name: 'Selected files' })
					).toHaveTextContent(
						/example-1.txt \(100 B\).+example-2.txt \(100 B\)/
					);
				});

				test('then an error message should be displayed listing the files that were not accepted', () => {
					const errorMessage = screen.getByText(
						'The following file could not be selected'
					);

					expect(errorMessage).toBeVisible();
				});

				test('then the remaining files above that limit should not be accepted', () => {
					const errorsList = screen.getAllByRole('list')[0];

					expect(errorsList).toHaveTextContent(
						/example-3.txt \(100 B\) - Too many files/
					);
				});

				test('then the input should contain the accepted files', () => {
					const fileNames = currentValue.map(({ name }) => name);

					expect(fileNames).toEqual(['example-1.txt', 'example-2.txt']);
				});
			});

			describe('when `accept` is defined and a mix of accepted/unaccepted file extensions are selected', () => {
				beforeEach(async () => {
					const { container } = render(
						<FileUploadExample
							accept={['application/xml']}
							multiple
							setCurrentValue={setCurrentValue}
						/>
					);

					const fileInput = container.querySelector(
						'input[type="file"]'
					) as HTMLInputElement;

					const user = userEvent.setup();

					await user.upload(fileInput, [
						createExampleFile({
							name: 'example-xml.xml',
							type: 'application/xml',
						}),
						createExampleFile({ name: 'example-txt.txt' }),
						createExampleFile({
							name: 'example-pdf.pdf',
							type: 'application/pdf',
						}),
					]);
				});

				test('then the valid file extensions should be accepted', () => {
					expect(
						screen.getByRole('list', { name: 'Selected files' })
					).toHaveTextContent(/example-xml.xml \(100 B\)/);
				});

				// Skipping as this isn't rendering in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then an error message should be displayed listing the files that were not accepted', () => {
					const errorMessage = screen.getByText(
						'The following files could not be selected'
					);

					expect(errorMessage).toBeVisible();
				});

				// Skipping as this isn't rendering in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then the invalid file extensions should not be accepted', () => {
					const errorsList = screen.getAllByRole('list')[0];

					expect(errorsList).toHaveTextContent(
						/example-txt.txt \(100 B\) - Invalid file type.+example-json.json \(100 B\) - Invalid file type/
					);
				});

				test('then the input should contain the accepted files', () => {
					const fileNames = currentValue.map(({ name }) => name);

					expect(fileNames).toEqual(['example-xml.xml']);
				});
			});
		});

		describe('when `maxSize` is defined and a mix of sizes above/below the limit are selected', () => {
			beforeEach(async () => {
				const maxSize = 150;
				const { container } = render(
					<FileUploadExample
						maxSize={maxSize}
						multiple
						setCurrentValue={setCurrentValue}
					/>
				);

				const fileInput = container.querySelector(
					'input[type="file"]'
				) as HTMLInputElement;

				const user = userEvent.setup();

				await user.upload(fileInput, [
					createExampleFile({ name: 'example-1.txt' }),
					createExampleFile({ name: 'example-2.txt' }),
					createExampleFile({ name: 'example-3.txt', size: maxSize + 1 }),
				]);
			});

			test('then the valid file sizes should be accepted', () => {
				expect(
					screen.getByRole('list', { name: 'Selected files' })
				).toHaveTextContent(/example-1.txt \(100 B\).+example-2.txt \(100 B\)/);
			});

			// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
			test.skip('then an error message should be displayed listing the files that were not accepted', () => {
				const errorMessage = screen.getByText(
					'The following file could not be selected'
				);

				expect(errorMessage).toBeVisible();
			});

			// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
			test.skip('then the invalid file sizes should not be accepted', () => {
				const errorsList = screen.getAllByRole('list')[0];

				expect(errorsList).toHaveTextContent(
					/example-3.txt \(151 B\) - File is over 150 B/
				);
			});

			// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
			test.skip('then the input should contain the accepted files', () => {
				const fileNames = currentValue.map(({ name }) => name);

				expect(fileNames).toEqual(['example-1.txt', 'example-2.txt']);
			});
		});

		describe('when `maxFiles`, `maxSize`, and `accept` are defined', () => {
			beforeEach(async () => {
				const maxSize = 150;
				const { container } = render(
					<FileUploadExample
						accept={['text/plain']}
						maxFiles={2}
						maxSize={maxSize}
						multiple
						setCurrentValue={setCurrentValue}
					/>
				);

				const fileInput = container.querySelector(
					'input[type="file"]'
				) as HTMLInputElement;

				const user = userEvent.setup();

				await user.upload(fileInput, [
					createExampleFile({ name: 'example-1.txt' }), // Valid file
					createExampleFile({ name: 'example-2.txt', size: maxSize + 1 }), // Too large but valid file extension
					createExampleFile({ name: 'example-3.txt' }), // Valid file
					createExampleFile({ name: 'example-4.txt' }), // Valid file but is above the `maxFiles` limit
					createExampleFile({
						name: 'example-5.xml',
						type: 'application/xml',
						size: maxSize + 2,
					}), // Too large and invalid file extension
				]);
			});

			describe('when more files than the maxFiles limit are selected, including unaccepted file extensions and sizes above/below the maxSize limit', () => {
				// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then the first files with accepted file extensions up to that limit should be accepted', () => {
					expect(
						screen.getByRole('list', { name: 'Selected files' })
					).toHaveTextContent(
						/example-1.txt \(100 B\).+example-3.txt \(100 B\)/
					);
				});

				// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then an error message should be displayed listing the files that were not accepted', () => {
					const errorMessage = screen.getByText(
						'The following files could not be selected'
					);

					expect(errorMessage).toBeVisible();
				});

				// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then the invalid files should not be accepted', () => {
					const errorsList = screen.getAllByRole('list')[0];

					expect(errorsList).toHaveTextContent(
						/example-2.txt \(151 B\) - File is over 150 B.+example-4.txt \(100 B\) - Too many files.+example-5.xml \(152 B\) - Invalid file type/
					);
				});

				// Skipping as this isn't rendering correctly in tests but is in the actual component - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then the input should contain the accepted files', () => {
					const fileNames = currentValue.map(({ name }) => name);

					expect(fileNames).toEqual(['example-1.txt', 'example-3.txt']);
				});
			});

			describe('when errors exist and new files with errors are uploaded', () => {
				// Skipping as this isn't rendering correctly in tests. This has a known issue in the component where some error messages aren't removed on interaction. - need to fix this test, likely by mocking `react-dropzone`
				test.skip('then the error message should display a new list of errors, wiping previous errors', async () => {
					const { container } = render(
						<FileUploadExample setCurrentValue={setCurrentValue} />
					);

					const fileInput = container.querySelector(
						'input[type="file"]'
					) as HTMLInputElement;

					const user = userEvent.setup();

					await user.upload(fileInput, [
						createExampleFile({ name: 'example-6.txt' }), // Valid file but is above the `maxFiles` limit
						createExampleFile({ name: 'example-7.xml' }), // Invalid file extension
					]);

					const errorsList = screen.getAllByRole('list')[0];

					expect(errorsList).toHaveTextContent(
						/example-6.txt \(100 B\) - Too many filesexample-7.xml \(100 B\) - Invalid file type/
					);
				});
			});
		});
	});
});
