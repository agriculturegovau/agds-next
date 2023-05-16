import { StoryObj, Meta } from '@storybook/react';
import { FileUploadFileList } from './FileUploadFileList';
import { FileStatus, FileWithStatus } from './utils';

const meta: Meta<typeof FileUploadFileList> = {
	title: 'forms/FileUpload/Primitives/FileUploadFileList',
	component: FileUploadFileList,
};

export default meta;

type Story = StoryObj<typeof FileUploadFileList>;

function createExampleFile(status?: FileStatus) {
	const file: FileWithStatus = new File(['example'], 'example.jpg', {
		type: 'image/jpg',
	});
	file.status = status;
	return file;
}

export const Basic: Story = {
	args: {
		files: [createExampleFile(), createExampleFile(), createExampleFile()],
		onRemove: (id) => console.log(id),
	},
};

export const Uploading: Story = {
	args: {
		files: [createExampleFile('uploading'), createExampleFile('success')],
		onRemove: (id) => console.log(id),
	},
};
