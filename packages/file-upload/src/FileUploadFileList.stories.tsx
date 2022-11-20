import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploadFileList } from './FileUploadFileList';
import { FileStatus, FileWithStatus } from './utils';

export default {
	title: 'forms/FileUpload/Primitives/FileUploadFileList',
	component: FileUploadFileList,
} as ComponentMeta<typeof FileUploadFileList>;

const Template: ComponentStory<typeof FileUploadFileList> = (args) => {
	return <FileUploadFileList {...args} />;
};

function createExampleFile(status?: FileStatus) {
	const file: FileWithStatus = new File(['example'], 'example.jpg', {
		type: 'image/jpg',
	});
	file.status = status;
	return file;
}

export const Basic = Template.bind({});
Basic.args = {
	files: [createExampleFile(), createExampleFile(), createExampleFile()],
	onRemove: (id) => console.log(id),
};

export const Uploading = Template.bind({});
Uploading.args = {
	files: [createExampleFile('uploading'), createExampleFile('success')],
	onRemove: (id) => console.log(id),
};
