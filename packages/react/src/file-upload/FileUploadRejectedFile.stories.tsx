import { StoryObj, Meta } from '@storybook/react';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';
import { createExampleFile, createExampleImageFile } from './test-utils';

const meta: Meta<typeof FileUploadRejectedFile> = {
	title: 'forms/FileUpload/Primitives/FileUploadRejectedFile',
	component: FileUploadRejectedFile,
};

export default meta;

type Story = StoryObj<typeof FileUploadRejectedFile>;

export const FileSize: Story = {
	args: {
		errors: [{ message: 'File size exceeds 10MB', code: 'file-too-large' }],
		file: createExampleImageFile(),
	},
};

export const InvalidType: Story = {
	args: {
		errors: [
			{
				message:
					'File must be one of the following types: jpeg, jpg, png, heic',
				code: 'file-invalid-type',
			},
		],
		file: createExampleFile(),
	},
};

export const Multiple: Story = {
	args: {
		errors: [
			{ message: 'File size exceeds 10MB', code: 'file-too-large' },
			{
				message:
					'File must be one of the following types: jpeg, jpg, png, heic',
				code: 'file-invalid-type',
			},
		],
		file: createExampleFile(),
	},
};
