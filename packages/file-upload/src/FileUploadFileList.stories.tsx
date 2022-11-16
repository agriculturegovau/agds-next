import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploadFileList } from './FileUploadFIleList';

export default {
	title: 'forms/FileUpload/FileUploadFileList',
	component: FileUploadFileList,
} as ComponentMeta<typeof FileUploadFileList>;

const Template: ComponentStory<typeof FileUploadFileList> = (args) => {
	return <FileUploadFileList {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
	files: [
		new File(['this is an example file'], 'example1.jpg', {
			type: 'image/jpg',
		}),
		new File(['this is an example file'], 'example2.jpg', {
			type: 'image/jpg',
		}),
		new File(['this is an example file'], 'example3.jpg', {
			type: 'image/jpg',
		}),
	],
	onRemove: (id) => console.log(id),
};
