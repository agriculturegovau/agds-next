import { Meta, StoryObj } from '@storybook/react';
import { FileUploadFile } from './FileUploadFile';
import { createExampleFile, createExampleImageFile } from './test-utils';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadFile',
	component: FileUploadFile,
};

export default meta;

type Story = StoryObj<typeof FileUploadFile>;

export const Basic: Story = {
	args: {
		file: createExampleFile(),
	},
};

export const Uploading: Story = {
	args: {
		file: createExampleFile({ status: 'uploading' }),
	},
};

export const Success: Story = {
	args: {
		file: createExampleFile({ status: 'success' }),
	},
};

export const Image: Story = {
	args: {
		file: createExampleImageFile(),
	},
};

export const Pdf: Story = {
	args: {
		file: createExampleFile({
			name: 'example.pdf',
			type: 'application/pdf',
		}),
	},
};

export const Word: Story = {
	args: {
		file: createExampleFile({
			name: 'example.doc',
			type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		}),
	},
};
