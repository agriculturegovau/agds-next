import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileRejection } from './FileRejection';

export default {
	title: 'Components/FileUpload/FileRejection',
	component: FileRejection,
} as ComponentMeta<typeof FileRejection>;

const Template: ComponentStory<typeof FileRejection> = (args) => {
	return <FileRejection {...args} />;
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
