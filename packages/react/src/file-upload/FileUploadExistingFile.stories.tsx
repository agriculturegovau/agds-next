import { Meta, StoryObj } from '@storybook/react';
import { FileUploadExistingFile } from './FileUploadExistingFile';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadExistingFile',
	component: FileUploadExistingFile,
	args: {
		hideThumbnails: false,
	},
};

export default meta;

type Story = StoryObj<typeof FileUploadExistingFile>;

export const Basic: Story = {
	name: '.txt file',
	args: {
		file: {
			name: 'example.pdf',
			size: 123456,
			onDelete: () => console.log('Delete'),
		},
	},
};

export const Image: Story = {
	name: '.jpg file',
	args: {
		file: {
			name: 'example.jpg',
			thumbnailSrc: 'https://via.placeholder.com/150',
			size: 123456,
			onDelete: () => console.log('Delete'),
		},
	},
};

export const WithHref: Story = {
	name: 'with href',
	args: {
		file: {
			name: 'example.jpg',
			href: '#',
			thumbnailSrc: 'https://via.placeholder.com/150',
			size: 123456,
			onDelete: () => console.log('Delete'),
		},
	},
};
