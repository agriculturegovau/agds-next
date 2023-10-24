import { Meta, StoryObj } from '@storybook/react';
import { FileUploadDropzone } from './FileUploadDropzone';
const meta: Meta<typeof FileUploadDropzone> = {
	title: 'forms/FileUpload/Primitives/FileUploadDropzone',
	component: FileUploadDropzone,
	args: {
		disabled: false,
		invalid: false,
		isDragActive: false,
		multiple: false,
	},
};

export default meta;

type Story = StoryObj<typeof FileUploadDropzone>;

export const Basic: Story = {};

export const AcceptedFiles: Story = {
	args: {
		acceptedFilesSummary: 'doc, docx, pdf',
	},
};

export const MaxFileSize: Story = {
	args: {
		maxFileSizeString: '10 MB',
	},
};

export const MaxFileSizeAndAcceptedFiles: Story = {
	args: {
		acceptedFilesSummary: 'doc, docx, pdf',
		maxFileSizeString: '10 MB',
	},
};
