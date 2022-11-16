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
	errors: [{ message: 'File size exceeds 10MB', code: 'file-too-large' }],
	fileName: 'ExampleFile.jpg',
	fileSize: 4580,
};

export const InvalidType = Template.bind({});
InvalidType.args = {
	errors: [
		{
			message: 'File must be one of the following types: jpeg, jpg, png, heic',
			code: 'file-invalid-type',
		},
	],
	fileName: 'ExampleFile.jpg',
	fileSize: 4580,
};

export const Multiple = Template.bind({});
Multiple.args = {
	errors: [
		{ message: 'File size exceeds 10MB', code: 'file-too-large' },
		{
			message: 'File must be one of the following types: jpeg, jpg, png, heic',
			code: 'file-invalid-type',
		},
	],
	fileName: 'ExampleFile.jpg',
	fileSize: 4580,
};
