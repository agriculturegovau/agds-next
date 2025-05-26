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
			},
			{
				name: 'example.jpg',
				size: 123456,
				thumbnailSrc: 'https://placehold.co/144',
			},
			{
				name: 'example.jpg',
				size: 123456,
				thumbnailSrc: 'https://placehold.co/144',
				href: '#',
			},
			{
				name: 'onclick.jpg',
				size: 123456,
				href: '#',
				thumbnailSrc: 'https://placehold.co/144',
				onClick: (event) => {
					event.preventDefault();
					console.log('Existing file clicked');
				},
			},
		],
	},
};
