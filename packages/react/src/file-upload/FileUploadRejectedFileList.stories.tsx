import { Meta, StoryObj } from '@storybook/react';
import { FileUploadRejectedFileList } from './FileUploadRejectedFileList';

const meta: Meta<typeof FileUploadRejectedFileList> = {
	title: 'forms/FileUpload/Primitives/FileUploadRejectedFileList',
	component: FileUploadRejectedFileList,
	argTypes: { handleRemoveRejection: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof FileUploadRejectedFileList>;

export const Basic: Story = {
	args: {
		fileRejections: [
			{
				fileName: 'example1.mp4',
				fileSize: 428325809,
				errors: [
					{ message: 'File size exceeds 10MB', code: 'file-too-large' },
					{
						message:
							'File must be one of the following types: jpeg, jpg, png, heic',
						code: 'file-invalid-type',
					},
				],
			},
			{
				fileName: 'example2.jpg',
				fileSize: 22832300,
				errors: [{ message: 'File size exceeds 10MB', code: 'file-too-large' }],
			},
		],
		handleRemoveRejection: (id) => console.log(id),
	},
};
