import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';

export default {
	title: 'forms/FileUpload/FileUploadRejectedFile',
	component: FileUploadRejectedFile,
} as ComponentMeta<typeof FileUploadRejectedFile>;

const Template: ComponentStory<typeof FileUploadRejectedFile> = (args) => {
	return <FileUploadRejectedFile {...args} />;
};

export const FileSize = Template.bind({});
FileSize.args = {
	message: 'File size exceeds 10MB',
	fileName: 'ExampleFile.jpg',
	fileSize: 4580,
};

export const InvalidType = Template.bind({});
InvalidType.args = {
	message: 'File must be one of the following types: jpg, png, gif',
	fileName: 'ExampleFile.jpg',
	fileSize: 4580,
};
