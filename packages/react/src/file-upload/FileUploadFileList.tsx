import { Stack } from '../stack';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus } from './utils';

type FileUploadFileListProps = {
	files: FileWithStatus[];
	onRemove: (index: number, file: FileWithStatus) => void;
	hideThumbnails?: boolean;
};

export const FileUploadFileList = ({
	files,
	onRemove,
	hideThumbnails,
}: FileUploadFileListProps) => {
	if (!files.length) {
		return null;
	}

	return (
		<Stack as="ul" aria-label="Selected files" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadFile
					key={index}
					file={file}
					onRemove={() => onRemove(index, file)}
					hideThumbnails={hideThumbnails}
				/>
			))}
		</Stack>
	);
};
