import { Meta, StoryObj } from '@storybook/react';
import { FileUploadFile } from './FileUploadFile';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadFile',
	component: FileUploadFile,
};

export default meta;

type Story = StoryObj<typeof FileUploadFile>;

export const Basic: Story = {
	args: {
		name: 'Example.jpg',
		size: 2345,
	},
};

export const Uploading: Story = {
	args: {
		name: 'Example.jpg',
		size: 2345,
		status: 'uploading',
	},
};

export const Success: Story = {
	args: {
		name: 'Example.jpg',
		size: 2345,
		status: 'success',
	},
};
