import { Meta, StoryObj } from '@storybook/react';
import { FileUploadExistingFileList } from './FileUploadExistingFileList';

const meta: Meta<typeof FileUploadExistingFileList> = {
	title: 'forms/FileUpload/Primitives/FileUploadExistingFileList',
	component: FileUploadExistingFileList,
	args: {
		hideThumbnails: false,
	},
};

export default meta;

type Story = StoryObj<typeof FileUploadExistingFileList>;

export const Basic: Story = {
	args: {
		files: [
			{
				name: 'example.pdf',
				size: 123456,
				thumbnailSrc: 'https://via.placeholder.com/150',
				onDelete: () => console.log('Delete file'),
			},
		],
	},
};
