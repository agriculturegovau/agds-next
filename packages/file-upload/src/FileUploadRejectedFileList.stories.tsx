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
			id: 'video1539282985.mp4_file-invalid-type',
			fileName: 'video1539282985.mp4',
			fileSize: 428325809,
			message: 'File must be one of the following types: jpeg, jpg, png, heic',
			code: 'file-invalid-type',
		},
		{
			id: 'video1539282985.mp4_file-too-large',
			fileName: 'video1539282985.mp4',
			fileSize: 428325809,
			message: 'File size exceeds 2 MB',
			code: 'file-too-large',
		},
	];

	return (
		<FileUploadRejectedFileList
			fileRejections={rejectedFiles}
			handleRemoveRejection={(id) => console.log(id)}
		/>
	);
};
