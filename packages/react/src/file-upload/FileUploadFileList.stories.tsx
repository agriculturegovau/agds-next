import { StoryObj, Meta } from '@storybook/react';
import { FileUploadFileList } from './FileUploadFileList';
import { createExampleFile, createExampleImageFile } from './test-utils';

const meta: Meta<typeof FileUploadFileList> = {
	title: 'forms/FileUpload/Primitives/FileUploadFileList',
	component: FileUploadFileList,
};

export default meta;

type Story = StoryObj<typeof FileUploadFileList>;

export const Basic: Story = {
	args: {
		files: [
			createExampleFile({
				name: 'example.pdf',
				type: 'application/pdf',
			}),
			createExampleFile(),
			createExampleFile(),
		],
		onRemove: (id) => console.log(id),
	},
};

export const MixedFiles: Story = {
	args: {
		files: [
			createExampleFile({
				name: 'example.pdf',
				type: 'application/pdf',
			}),
			createExampleImageFile(),
			createExampleFile(),
		],
		onRemove: (id) => console.log(id),
	},
};

export const Uploading: Story = {
	args: {
		files: [
			createExampleFile({ status: 'uploading' }),
			createExampleFile({ status: 'success' }),
		],
		onRemove: (id) => console.log(id),
	},
};
