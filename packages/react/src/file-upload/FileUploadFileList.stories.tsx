import { StoryObj, Meta } from '@storybook/react';
import { FileUploadFileList } from './FileUploadFileList';
import { createExampleFileWithStatus } from './test-utils';

const meta: Meta<typeof FileUploadFileList> = {
	title: 'forms/FileUpload/Primitives/FileUploadFileList',
	component: FileUploadFileList,
};

export default meta;

type Story = StoryObj<typeof FileUploadFileList>;

export const Basic: Story = {
	args: {
		files: [
			createExampleFileWithStatus(),
			createExampleFileWithStatus(),
			createExampleFileWithStatus(),
		],
		onRemove: (id) => console.log(id),
	},
};

export const Uploading: Story = {
	args: {
		files: [
			createExampleFileWithStatus('uploading'),
			createExampleFileWithStatus('success'),
		],
		onRemove: (id) => console.log(id),
	},
};
