import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploadFile } from './FileUploadFile';

export default {
	title: 'Components/FileUpload/FileUploadFile',
	component: FileUploadFile,
} as ComponentMeta<typeof FileUploadFile>;

export const Basic: ComponentStory<typeof FileUploadFile> = (args) => {
	return <FileUploadFile {...args} />;
};
Basic.args = {
	name: 'Example.jpg',
	size: 2345,
};

export const Uploading: ComponentStory<typeof FileUploadFile> = (args) => {
	return <FileUploadFile {...args} />;
};
Uploading.args = {
	name: 'Example.jpg',
	size: 2345,
	status: 'uploading',
};

export const Success: ComponentStory<typeof FileUploadFile> = (args) => {
	return <FileUploadFile {...args} />;
};
Success.args = {
	name: 'Example.jpg',
	size: 2345,
	status: 'success',
};
