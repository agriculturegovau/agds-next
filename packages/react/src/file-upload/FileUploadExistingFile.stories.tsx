import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@ag.ds-next/react/stack';
import { FileUploadExistingFile } from './FileUploadExistingFile';

const meta: Meta = {
	title: 'forms/FileUpload/Primitives/FileUploadExistingFile',
	component: FileUploadExistingFile,
	args: {
		hideThumbnails: false,
	},
	decorators: [
		(Story) => (
			<Stack as="ul">
				<Story />
			</Stack>
		),
	],
};

export default meta;

type Story = StoryObj<typeof FileUploadExistingFile>;

export const Basic: Story = {
	name: '.png file',
	args: {
		file: {
			name: 'example.png',
			size: 123456,
		},
	},
};

export const Image: Story = {
	name: '.jpg file',
	args: {
		file: {
			name: 'example.jpg',
			size: 123456,
		},
	},
};

export const WithThumbnail: Story = {
	name: '.jpg file',
	args: {
		file: {
			name: 'example.jpg',
			thumbnailSrc: 'https://via.placeholder.com/150',
			size: 123456,
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
		},
	},
};
