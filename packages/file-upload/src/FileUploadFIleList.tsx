import { Stack } from '@ag.ds-next/box';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus } from './utils';

export const FileUploadFileList = ({
	files,
	onRemove,
}: {
	files: FileWithStatus[];
	onRemove: (file: FileWithStatus) => void;
}) => (
	<Stack as="ul" aria-label="Selected files" gap={0.5}>
		{files.map((file, index) => (
			<FileUploadFile
				key={index}
				name={file.name}
				size={file.size}
				status={file.status}
				onRemove={() => onRemove(file)}
			/>
		))}
	</Stack>
);
