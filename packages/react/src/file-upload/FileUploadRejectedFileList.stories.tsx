import { Meta, StoryObj } from '@storybook/react';
import { FileUploadRejectedFileList } from './FileUploadRejectedFileList';
import { createExampleFile, createExampleImageFile } from './test-utils';

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
				file: createExampleFile({
					name: 'example1.mp4',
					type: 'video/mp4',
				}),
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
				file: createExampleImageFile(),
				errors: [{ message: 'File size exceeds 10MB', code: 'file-too-large' }],
			},
		],
		handleRemoveRejection: (id) => console.log(id),
	},
};
