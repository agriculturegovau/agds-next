import { Meta, StoryObj } from '@storybook/react';
import { FileUploadFile } from './FileUploadFile';
import {
	createExampleFileWithStatus,
	createExampleImageFileWithStatus,
} from './test-utils';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadFile',
	component: FileUploadFile,
};

export default meta;

type Story = StoryObj<typeof FileUploadFile>;

export const Basic: Story = {
	args: {
		file: createExampleFileWithStatus(),
	},
};

export const Uploading: Story = {
	args: {
		file: createExampleFileWithStatus('uploading'),
	},
};

export const Success: Story = {
	args: {
		file: createExampleFileWithStatus('success'),
	},
};

export const Image: Story = {
	args: {
		file: createExampleImageFileWithStatus(),
	},
};
