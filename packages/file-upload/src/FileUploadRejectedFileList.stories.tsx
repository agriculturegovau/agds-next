import { ComponentMeta } from '@storybook/react';
import {
	FileUploadRejectedFileList,
	RejectedFile,
} from './FileUploadRejectedFileList';

export default {
	title: 'forms/FileUpload/FileUploadRejectedFileList',
	component: FileUploadRejectedFileList,
	argTypes: { handleRemoveRejection: { action: 'clicked' } },
} as ComponentMeta<typeof FileUploadRejectedFileList>;

export const Basic = () => {
	const rejectedFiles: RejectedFile[] = [
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
	];

	return (
		<FileUploadRejectedFileList
			fileRejections={rejectedFiles}
			handleRemoveRejection={(id) => console.log(id)}
		/>
	);
};
