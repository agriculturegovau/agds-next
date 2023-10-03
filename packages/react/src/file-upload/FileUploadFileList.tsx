import { Stack } from '../stack';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus } from './utils';

type FileUploadFileListProps = {
	files: FileWithStatus[];
	onRemove: (file: FileWithStatus) => void;
	disableThumbnails?: boolean;
};

export const FileUploadFileList = ({
	files,
	onRemove,
	disableThumbnails,
}: FileUploadFileListProps) => (
	<Stack as="ul" aria-label="Selected files" gap={0.5}>
		{files.map((file, index) => (
			<FileUploadFile
				key={index}
				file={file}
				onRemove={() => onRemove(file)}
				disableThumbnails={disableThumbnails}
			/>
		))}
	</Stack>
);
