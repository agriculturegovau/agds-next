import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { FileUploadFile } from './FileUploadFile';
import { createExampleFile, createExampleImageFile } from './test-utils';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadFile',
	component: FileUploadFile,
	args: {
		hideThumbnails: false,
	},
	decorators: [
		(Story) => (
			<Stack as="ul">
				<Story />
			</Stack>
		),
	],
};

export default meta;

type Story = StoryObj<typeof FileUploadFile>;

export const Basic: Story = {
	name: '.txt file',
	args: {
		file: createExampleFile(),
	},
};

export const Uploading: Story = {
	name: '.txt file (uploading)',
	args: {
		file: createExampleFile({ status: 'uploading' }),
	},
};

export const Success: Story = {
	name: '.txt file (success)',
	args: {
		file: createExampleFile({ status: 'success' }),
	},
};

export const WithLink: Story = {
	name: '.txt file (with href)',
	args: {
		file: createExampleFile({
			href: '#',
		}),
	},
};

export const Image: Story = {
	name: '.jpg file',
	args: {
		file: createExampleImageFile(),
	},
};

export const ImageUploading: Story = {
	name: '.jpg file (uploading)',
	args: {
		file: createExampleImageFile({ status: 'uploading' }),
	},
};

export const ImageSuccess: Story = {
	name: '.jpg file (success)',
	args: {
		file: createExampleImageFile({ status: 'success' }),
	},
};

export const Pdf: Story = {
	name: '.pdf file',
	args: {
		file: createExampleFile({
			name: 'example.pdf',
			type: 'application/pdf',
		}),
	},
};

export const Word: Story = {
	name: '.doc file',
	args: {
		file: createExampleFile({
			name: 'example.doc',
			type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		}),
	},
};
