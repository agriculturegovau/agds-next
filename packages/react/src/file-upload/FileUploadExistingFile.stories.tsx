import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../../packages/react/src/stack';
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

export const WithThumbnail: Story = {
	name: '.jpg file with thumbnail',
	args: {
		file: {
			name: 'example.jpg',
			thumbnailSrc: 'https://placehold.co/144',
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
			thumbnailSrc: 'https://placehold.co/144',
			size: 123456,
		},
	},
};

export const WithHrefAndOnClick: Story = {
	name: 'with href and onClick',
	args: {
		file: {
			name: 'onClick.jpg',
			thumbnailSrc: 'https://placehold.co/144',
			size: 123456,
			href: '#',
			onClick: (event) => {
				event.preventDefault();
				console.log('Existing file clicked');
			},
		},
	},
};
